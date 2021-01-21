import trashTypes from "./trash.types";
import { handleAddToTrash } from "./trash.utils";

const INITIAL_STATE = {
  trashItems: [],
  isTrash: false,
};
const trashReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case trashTypes.TRASH_IS_ACTIVE: {
      return {
        ...state,
        isTrash: true,
      };
    }
    case trashTypes.TRASH_IS_INACTIVE: {
      return {
        ...state,
        isTrash: false,
      };
    }
    case trashTypes.SET_TRASH_ITEM: {
      return {
        ...state,
        trashItems: handleAddToTrash({
          prevTrashItems: state.trashItems,
          nextTrashItem: action.payload,
        }),
      };
    }
    default:
      return state;
  }
};

export default trashReducer;
