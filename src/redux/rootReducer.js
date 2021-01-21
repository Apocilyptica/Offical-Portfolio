import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducer from "./App/app.reducer";
import trashReducer from "./Trash/trash.reducers";

export const rootReducer = combineReducers({
  apps: appReducer,
  trash: trashReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: [],
};

export default persistReducer(configStorage, rootReducer);
