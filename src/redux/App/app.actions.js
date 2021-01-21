import appTypes from "./app.types";

export const setDefaultItems = () => ({
  type: appTypes.SET_DEFAULT_HOME_PAGE_ITEMS,
});

export const setFocus = (itemID) => ({
  type: appTypes.SET_FOCUS,
  payload: itemID,
});

export const setFocusReset = () => ({
  type: appTypes.SET_FOCUS_RESET,
});

export const setItems = (items) => ({
  type: appTypes.SET_ITEMS,
  payload: items,
});

export const setTrash = (trashItems) => ({
  type: appTypes.SET_TRASH,
  payload: trashItems,
});

export const setTrashIcon = (result) => ({
  type: appTypes.SET_TRASH_ICON,
  payload: result,
});
