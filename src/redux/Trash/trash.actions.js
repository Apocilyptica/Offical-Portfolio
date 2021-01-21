import trashTypes from "./trash.types";

export const setTrashActive = () => ({
  type: trashTypes.TRASH_IS_ACTIVE,
});

export const setTrashInactive = () => ({
  type: trashTypes.TRASH_IS_INACTIVE,
});

export const setTrashItem = (item) => ({
  type: trashTypes.SET_TRASH_ITEM,
  payload: item,
});
