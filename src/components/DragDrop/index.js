import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { setDefaultItems, setFocus, setItems } from "../../redux/App/app.actions";

import "./styles.scss";

const mapState = ({ apps }) => ({
  items: apps.items,
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "lightgreen" : null,
  ...draggableStyle,
});

function ItemApp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { items } = useSelector(mapState);

  useEffect(() => {
    dispatch(setDefaultItems());
    // eslint-disable-next-line
  }, []);

  const handleDoubleClick = (e) => {
    history.push(e);
  };

  const handleClick = (e) => {
    dispatch(setFocus(e));
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const updatedItems = reorder(items, result.source.index, result.destination.index);

    dispatch(setItems(updatedItems));
  }

  return (
    <div className="dragAndDrop">
      <DragDropContext onDragEnd={onDragEnd}>
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
                      onDoubleClick={(e) => handleDoubleClick(item.URL)}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
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
}

export default ItemApp;
