export const exixtingTrashItem = ({ prevTrashItems, nextTrashItem }) => {
  return prevTrashItems.find((trashItem) => trashItem.draggableId === nextTrashItem.draggableId);
};

export const handleAddToTrash = ({ prevTrashItems, nextTrashItem }) => {
  const trashItemExixts = exixtingTrashItem({ prevTrashItems, nextTrashItem });

  if (trashItemExixts || nextTrashItem.draggableId === "id-1") {
    return [...prevTrashItems];
  }

  return [...prevTrashItems, nextTrashItem];
};
