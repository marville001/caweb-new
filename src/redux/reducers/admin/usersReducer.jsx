import {
  ADD_USER,
  CREATE_ADMIN,
  GET_ADMINS,
  GET_USERS,
} from "../../types.admin";

const initialState = {
  users: [],
  admins: [],
  isLoadingUsers: false,
  error: "",
  total: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS.REQUEST:
      return { ...state, isLoadingUsers: true, error: "" };
    case GET_USERS.SUCCESS:
      return {
        ...state,
        users: action.users,
        total: action.total,
        isLoadingUsers: false,
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

    case GET_ADMINS.REQUEST:
      return { ...state, isLoadingAdmins: true, loadAdminsError: "" };
    case GET_ADMINS.SUCCESS:
      return {
        ...state,
        admins: action.admins,
        isLoadingAdmins: false,
        loadAdminsError: "",
      };
    case GET_ADMINS.FAIL:
      return {
        ...state,
        isLoadingAdmins: false,
        loadAdminsError: action.error,
      };

    case CREATE_ADMIN.REQUEST:
      return { ...state, isCreatingAdmin: true };
    case CREATE_ADMIN.SUCCESS:
      return {
        ...state,
        isCreatingAdmin: false,
      };
    case CREATE_ADMIN.FAIL:
      return { ...state, isCreatingAdmin: false };
    default:
      return { ...state };
  }
};

export default usersReducer;
