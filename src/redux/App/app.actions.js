import appTypes from "./app.types";

export const setDefaultItems = () => ({
  type: appTypes.SET_DEFAULT_HOME_PAGE_ITEMS,
});

export const setFocus = (itemID) => ({
  type: appTypes.SET_FOCUS,
  payload: itemID,
});

export const setItems = (items) => ({
  type: appTypes.SET_ITEMS,
  payload: items,
});