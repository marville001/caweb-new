import { CREATE_PRAYER, EDIT_PRAYER, GET_PRAYERS } from "../../types.admin";

const initialState = {
  prayers: [],
  isLoadingPrayers: false,
  isCreatingPrayer: false,
  isEditingPrayer: false,
  error: "",
};

const prayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRAYERS.REQUEST:
      return { ...state, isLoadingPrayers: true, error: "" };
    case GET_PRAYERS.SUCCESS:
      return {
        ...state,
        prayers: action.prayers,
        isLoadingPrayers: false,
        error: "",
      };
    case GET_PRAYERS.FAIL:
      return { ...state, isLoadingPrayers: false, error: action.error };

    case CREATE_PRAYER.REQUEST:
      return { ...state, isCreatingPrayer: true };
    case CREATE_PRAYER.SUCCESS:
      return {
        ...state,
        isCreatingPrayer: false,
      };
    case CREATE_PRAYER.FAIL:
      return { ...state, isCreatingPrayer: false };

    case EDIT_PRAYER.REQUEST:
      return { ...state, isEditingPrayer: true };
    case EDIT_PRAYER.SUCCESS:
      return {
        ...state,
        isEditingPrayer: false,
      };
    case EDIT_PRAYER.FAIL:
      return { ...state, isEditingPrayer: false };

    default:
      return { ...state };
  }
};

export default prayersReducer;
