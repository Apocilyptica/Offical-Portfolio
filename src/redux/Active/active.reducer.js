import activeTypes from "./active.types";

import { handleRemoveApp, handleUpdateStyle, handleUpdateZIndex, handleUpdateOffset, handleUpdateMaximize } from "./active.utils";

const INITIAL_STATE = {
  activeAppSettings: {},
  nextZIndex: 1,
  nextID: 1,
};

const activeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case activeTypes.SET_APP_ACTIVE_SETTINGS:
      return {
        ...state,
        activeAppSettings: {
          ...state.activeAppSettings,
          [action.payload.appName]: {
            id: `id-${state.nextID}`,
            ...action.payload.appSettings,
            zIndex: state.nextZIndex,
          },
        },
        nextZIndex: state.nextZIndex + 1,
        nextID: state.nextID + 1,
      };
    case activeTypes.SET_APP_ACTIVE_REMOVE:
      return {
        ...state,
        activeAppSettings: handleRemoveApp({
          prevItems: state.activeAppSettings,
          itemToRemove: action.payload,
        }),
      };

    case activeTypes.UPDATE_APP_ACTIVE_ZINDEX:
      return {
        ...state,
        activeAppSettings: {
          ...state.activeAppSettings,
          [action.payload.appName]: handleUpdateZIndex({ prevItems: action.payload.appSettings, zIndex: state.nextZIndex }),
        },
        nextZIndex: state.nextZIndex + 1,
      };
    case activeTypes.UPDATE_APP_ACTIVE_OFFSET:
      return {
        ...state,
        activeAppSettings: {
          ...state.activeAppSettings,
          [action.payload.appName]: handleUpdateOffset({ prevItems: action.payload.appSettings, newOffset: action.payload.newOffset }),
        },
      };
    case activeTypes.UPDATE_APP_ACTIVE_MAXIMIZE:
      return {
        ...state,
        activeAppSettings: {
          ...state.activeAppSettings,
          [action.payload.appName]: handleUpdateMaximize({
            prevItems: action.payload.appSettings,
            newSize: action.payload.newSize,
            defaultSettings: action.payload.defaultSettings,
          }),
        },
      };
    case activeTypes.UPDATE_APP_ACTIVE_SETTINGS:
      return {
        ...state,
        activeAppSettings: {
          ...state.activeAppSettings,
          [action.payload.appName]: handleUpdateStyle({ prevItems: action.payload.appSettings, action: action.payload.action }),
        },
      };
    default:
      return state;
  }
};

export default activeReducer;
