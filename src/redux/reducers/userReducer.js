import {
  USER_LOGIN,
  LOGOUT_USER,
} from "../types";

const initialState = {
  user: {},
  updateUser: {},
  users: [],
  loginLoading: false,
  loginError: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN.REQUEST:
      return { ...state, loginLoading: true, user: {}, loginError: "" };
    case USER_LOGIN.SUCCESS:
      return {
        ...state,
        user: action.user,
        loginLoading: false,
        loginError: "",
      };
    case USER_LOGIN.FAIL:
      return { ...state, loginLoading: false, loginError: action.loginError };
    case LOGOUT_USER:
      return { ...state, user: {} };

    default:
      return { ...state };
  }
};

export default userReducer;
