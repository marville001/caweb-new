import { ADMIN_LOGIN, LOGOUT_ADMIN,  } from "../../types";

const initialState = {
  admin: {},
  loading: false,
  error: "",
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN.REQUEST:
      return { ...state, loading: true, admin: {}, error: "" };
    case ADMIN_LOGIN.SUCCESS:
      return {
        ...state,
        admin: action.admin,
        loading: false,
        error: "",
      };
    case ADMIN_LOGIN.FAIL:
      return { ...state, loading: false, error: action.error };
    case LOGOUT_ADMIN:
      return { ...state, admin: {} };

    default:
      return { ...state };
  }
};

export default adminReducer;
