import { DefaultHomePageItems } from "../../components/Data";

export const exixtingTrashItem = ({ prevTrashItems, nextTrashItem }) => {
  return prevTrashItems.find((trashItem) => trashItem.draggableId === nextTrashItem.draggableId);
};

export const handleAddToTrash = ({ prevTrashItems, nextTrashItem }) => {
  const trashItemExixts = exixtingTrashItem({ prevTrashItems, nextTrashItem });
  const timestamp = new Date();

  const data = DefaultHomePageItems.find((item) => {
    return item.id === nextTrashItem.draggableId ? item : null;
  });

  if (trashItemExixts || nextTrashItem.draggableId === "id-1") {
    return [...prevTrashItems];
  }

  return [
    ...prevTrashItems,
    {
      ...nextTrashItem,
      name: data.title,
      originalLoaction: data.icon,
      dateDeleted: timestamp,
      size: data.size,
      itemType: data.itemType,
      dateModified: data.dateModified,
    },
  ];
};
