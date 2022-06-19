import { USER_LOGIN, LOGOUT_USER, USER_REGISTER, UPDATE_IMAGE } from "../types";

const initialState = {
    user: {},
    updateUser: {},
    users: [],
    loginLoading: false,
    loginError: "",
};

const accountUserReducer = (state = initialState, action) => {
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
            return { ...state, loginLoading: false, loginError: action.error };
        case LOGOUT_USER:
            return { ...state, user: {} };

        case USER_REGISTER.REQUEST:
            return {
                ...state,
                registerLoading: true,
                user: {},
                registerError: "",
            };
        case USER_REGISTER.SUCCESS:
            return {
                ...state,
                user: action.user,
                registerLoading: false,
                registerError: "",
            };
        case USER_REGISTER.FAIL:
            return {
                ...state,
                registerLoading: false,
                registerError: action.error,
            };

        case UPDATE_IMAGE.REQUEST:
            return { ...state, isUpdatingImage: true };
        case UPDATE_IMAGE.SUCCESS:
            return {
                ...state,
                user: action.user,
                isUpdatingImage: false,
            };
        case UPDATE_IMAGE.FAIL:
            return { ...state, isUpdatingImage: false };

        // eslint-disable-next-line no-duplicate-case
        case LOGOUT_USER:
            return { ...state, user: {}, loginLoading: false };

        default:
            return { ...state };
    }
};

export default accountUserReducer;
