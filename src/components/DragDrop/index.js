import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setAppActive, setDefaultItems, setFocus, setFocusReset, setItems, setTrash, setTrashIcon } from "../../redux/App/app.actions";
import { setAppActiveSettings } from "../../redux/Active/active.actions";
import { setTrashActive, setTrashInactive, setTrashItem } from "../../redux/Trash/trash.actions";

// Default App Setting Data
import { defaultAppSettings } from "../Data";

// Styles
import "./styles.scss";

const mapState = ({ apps, trash }) => ({
  items: apps.items,
  trash: trash,
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggingOver, isDropAnimating, draggableStyle, item, trash, snapshot, index, items) => {
  if (!isDropAnimating) {
    return {
      backgroundColor: isDragging && item !== "id-1" ? (draggingOver ? "lightgreen" : "red") : item === "id-1" && trash ? "lightgreen" : null,
      transition: "background-color 1s ease",
      ...draggableStyle,
    };
  }
  const indexOfTrash = items.findIndex((item) => item.id === "id-1");

  const { moveTo, curve, duration } = snapshot.dropAnimation;
  const translate = `translate(${moveTo.x}px, ${moveTo.y - (index - indexOfTrash) * 100}px)`;
  const rotate = "rotate(0.5turn)";

  if (!draggingOver && item !== "id-1") {
    return {
      ...draggableStyle,
      transform: `${translate} ${rotate}`,
      // slowing down the drop because we can
      transition: `all ${curve} ${duration + 1}s`,
    };
  }

  return { ...draggableStyle };
};

const ItemApp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { items, trash } = useSelector(mapState);

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

  const handleDoubleClick = (app) => {
    dispatch(setAppActive(app));
    dispatch(setAppActiveSettings({ appName: app.appName, appSettings: defaultAppSettings[app.appName] }));
    history.push(app.URL);
  };

  const handleClick = (e) => {
    dispatch(setFocus(e));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      dispatch(setTrashInactive());
      dispatch(setTrashItem(result));
      dispatch(setTrash(result));
      dispatch(setTrashIcon(items));

      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const updatedItems = reorder(items, result.source.index, result.destination.index);

    dispatch(setItems(updatedItems));
  };

  const onDragUpdate = (result) => {
    !result.destination ? dispatch(setTrashActive()) : dispatch(setTrashInactive());
  };

  const onDragStart = () => {
    dispatch(setFocusReset());
  };

  return (
    <div className="dragAndDrop" ref={wrapperRef}>
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate} onDragStart={onDragStart}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      onClick={(e) => handleClick(item)}
                      onDoubleClick={() => handleDoubleClick(item)}
                      style={getItemStyle(
                        snapshot.isDragging,
                        snapshot.draggingOver,
                        snapshot.isDropAnimating,
                        provided.draggableProps.style,
                        item.id,
                        trash.isTrash,
                        snapshot,
                        index,
                        items
                      )}
                    >
                      <img src={item.icon} alt={item.alt} className={`image ${item.isFocus}`} />
                      <span className={`title ${item.isFocus}`}>{item.title}</span>
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

export default ItemApp;
