import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducer from "./App/app.reducer";
import trashReducer from "./Trash/trash.reducer";
import activeReducer from "./Active/active.reducer";

export const rootReducer = combineReducers({
  apps: appReducer,
  trash: trashReducer,
  active: activeReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: [],
};

export default persistReducer(configStorage, rootReducer);
