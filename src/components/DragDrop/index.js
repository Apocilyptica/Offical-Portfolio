import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { HomePageItems } from "../Helpers";
import "./styles.scss";

const initial = HomePageItems;

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

function Item({ item, index }) {
  const history = useHistory();

  const handleClick = (e) => {
    history.push(e);
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onDoubleClick={(e) => handleClick(item.URL)}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        >
          <img src={item.icon} alt={item.alt} />
          {item.content}
        </div>
      )}
    </Draggable>
  );
}

const ItemList = React.memo(function ItemList({ items }) {
  return items.map((item, index) => <Item item={item} index={index} key={item.id} />);
});

function ItemApp() {
  const [state, setState] = useState({ items: initial });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(state.items, result.source.index, result.destination.index);

    setState({ items });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ItemList items={state.items} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ItemApp;
