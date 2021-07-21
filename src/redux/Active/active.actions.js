import activeTypes from "./active.types";

export const setAppActiveSettings = (appSettings) => ({
  type: activeTypes.SET_APP_ACTIVE_SETTINGS,
  payload: appSettings,
});

export const setAppActiveRemove = (appName) => ({
  type: activeTypes.SET_APP_ACTIVE_REMOVE,
  payload: appName,
});

export const updateAppActiveZIndex = (updatedAppSetting) => ({
  type: activeTypes.UPDATE_APP_ACTIVE_ZINDEX,
  payload: updatedAppSetting,
});

export const updateAppActiveOffset = (updatedAppOffset) => ({
  type: activeTypes.UPDATE_APP_ACTIVE_OFFSET,
  payload: updatedAppOffset,
});

export const updateAppActiveMaximize = (updatedAppSize) => ({
  type: activeTypes.UPDATE_APP_ACTIVE_MAXIMIZE,
  payload: updatedAppSize,
});

export const updateAppActiveSettings = (updatedAppSetting) => ({
  type: activeTypes.UPDATE_APP_ACTIVE_SETTINGS,
  payload: updatedAppSetting,
});
