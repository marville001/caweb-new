import {
    FETCH_ABOUT,
    FETCH_LEADER,
    FETCH_LEADERS,
    SAVE_ABOUT,
    UPDATE_LEADER,
} from "../types";

const initialState = {
    about: {},
    loading: false,
};

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ABOUT.REQUEST:
            return { ...state, loading: true, error: "" };
        case FETCH_ABOUT.SUCCESS:
            return {
                ...state,
                about: action.about,
                loading: false,
            };
        case FETCH_ABOUT.FAIL:
            return { ...state, loading: false, error: action.error };

        case SAVE_ABOUT.REQUEST:
            return { ...state, loading: true };
        case SAVE_ABOUT.SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case SAVE_ABOUT.FAIL:
            return { ...state, error: action.error, loading: false };

        default:
            return { ...state };
    }
};

export default aboutReducer;
