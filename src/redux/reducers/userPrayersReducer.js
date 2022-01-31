import { GET_PRAYERS_USER } from "../types";

const initialState = {
  prayers: [],
  isLoadingPrayers: false,
  error: "",
};

const userPrayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRAYERS_USER.REQUEST:
      return { ...state, isLoadingPrayers: true, error: "" };
    case GET_PRAYERS_USER.SUCCESS:
      return {
        ...state,
        prayers: action.prayers,
        isLoadingPrayers: false,
        error: "",
      };
    case GET_PRAYERS_USER.FAIL:
      return { ...state, isLoadingPrayers: false, error: action.error };


    default:
      return { ...state };
  }
};

export default userPrayersReducer;
