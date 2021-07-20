import activeTypes from "./active.types";

export const setAppActiveSettings = (appSettings) => ({
  type: activeTypes.SET_APP_ACTIVE_SETTINGS,
  payload: appSettings,
});

export const setAppActiveRemove = (appName) => ({
  type: activeTypes.SET_APP_ACTIVE_REMOVE,
  payload: appName,
});

export const updateAppActiveSettings = (updatedAppSetting) => ({
  type: activeTypes.UPDATE_APP_ACTIVE_SETTINGS,
  payload: updatedAppSetting,
});
