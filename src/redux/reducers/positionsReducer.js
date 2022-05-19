import { FETCH_POSITIONS } from "../types";

const initialState = {
    positions: [],
    loading: false,
};

const positionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSITIONS.REQUEST:
            return { ...state, loading: true, error: "" };
        case FETCH_POSITIONS.SUCCESS:
            return {
                ...state,
                positions: action.positions,
                loading: false,
            };
        case FETCH_POSITIONS.FAIL:
            return { ...state, loading: false, error: action.error };

        default:
            return { ...state };
    }
};

export default positionsReducer;
