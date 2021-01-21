import appTypes from "./app.types";
import { DefaultHomePageItems } from "../../components/Data";
import { handleSetFocus } from "./app.utils";

const INITIAL_STATE = {
  items: DefaultHomePageItems,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.SET_DEFAULT_HOME_PAGE_ITEMS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case appTypes.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case appTypes.SET_FOCUS:
      return {
        ...state,
        items: handleSetFocus({
          prevItems: state.items,
          itemToSetFocus: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default appReducer;
