import React, { useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setDefaultItems, setFocus, setFocusReset, setItems } from "../../redux/App/app.actions";

// Styles
import "./styles.scss";

const mapState = ({ active }) => ({
  activeApps: active.activeAppSettings,
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: 8 * 2,
  margin: `0 8px 0 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const Toolbar = () => {
  const dispatch = useDispatch();
  const { activeApps } = useSelector(mapState);
  const activeAppsArray = Object.values(activeApps);

  useEffect(() => {
    dispatch(setDefaultItems());
    // eslint-disable-next-line
  }, []);

  const useOutsideClick = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          dispatch(setFocusReset());
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  const handleClick = (e) => {
    dispatch(setFocus(e));
  };

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    padding: 8,
    overflow: "auto",
  });

  const onDragEnd = (result) => {
    if (result.destination.index === result.source.index) {
      return;
    }

    const updatedItems = reorder(activeApps, result.source.index, result.destination.index);

    dispatch(setItems(updatedItems));
  };

  const onDragStart = () => {
    dispatch(setFocusReset());
  };

  return (
    <div className="dragAndDrop" ref={wrapperRef}>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <Droppable droppableId="list">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
              {activeAppsArray &&
                activeAppsArray.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={(e) => handleClick(item)}
                        style={getItemStyle(
                          snapshot.isDragging,
                          snapshot.draggingOver,
                          snapshot.isDropAnimating,
                          provided.draggableProps.style,
                          item.id,
                          snapshot,
                          index,
                          activeApps
                        )}
                      >
                        <img src={item.footer.icon} alt={item.footer.alt} className={`image ${item.footer.isFocus}`} />
                        <span></span>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Toolbar;
