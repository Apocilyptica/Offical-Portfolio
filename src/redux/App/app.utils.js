import FilledTrash from "../../assets/icons/icon-recycling-bin-trash-waste-container-trash-can-png-f1c0f23c93a00c044cd500c414098063.png";

export const handleSetFocus = ({ prevItems, itemToSetFocus }) => {
  const existingItem = prevItems.find((items) => items.id === itemToSetFocus.id);

  return prevItems.map((items) =>
    items.id === existingItem.id
      ? {
          ...items,
          isFocus: "isFocus",
        }
      : {
          ...items,
          isFocus: "",
        }
  );
};

export const existingTrashItem = ({ prevItems, trashItem }) => {
  return prevItems.find((item) => item.id === trashItem.draggableId && item.id !== "id-1");
};

export const handleSetTrash = ({ prevItems, trashItem }) => {
  const trashItemExixts = existingTrashItem({ prevItems, trashItem });

  if (trashItemExixts) {
    return prevItems.filter((item) => item.id !== trashItem.draggableId);
  }

  return prevItems;
};

export const handleSetTrashIcon = ({ currentItems, isTrash }) => {
  return currentItems.map((item) =>
    item.id === "id-1" && isTrash.draggableId !== "id-1"
      ? {
          ...item,
          icon: FilledTrash,
        }
      : item
  );
};
