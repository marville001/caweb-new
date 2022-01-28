import { ADD_USER, GET_USERS } from "../../types.admin";

const initialState = {
  users: [],
  isLoadingUsers: false,
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS.REQUEST:
      return { ...state, isLoadingUsers: true, error: "" };
    case GET_USERS.SUCCESS:
      return {
        ...state,
        users: action.users,
        isLoadingUsers: true,
        error: "",
      };
    case GET_USERS.FAIL:
      return { ...state, isLoadingUsers: false, error: action.error };

    case ADD_USER.REQUEST:
      return { ...state, loading: true };
    case ADD_USER.SUCCESS:
      return {
        ...state,
        users: [...state.users, action.user],
        loading: false,
      };
    case ADD_USER.FAIL:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default usersReducer;
