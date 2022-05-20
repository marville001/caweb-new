import { FETCH_LEADER, FETCH_LEADERS } from "../types";

const initialState = {
    leaders: [],
    leader: {},
    loading: false,
};

const leadersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEADERS.REQUEST:
            return { ...state, loading: true, error: "" };
        case FETCH_LEADERS.SUCCESS:
            return {
                ...state,
                leaders: action.leaders,
                loading: false,
            };
        case FETCH_LEADERS.FAIL:
            return { ...state, loading: false, error: action.error };
        
        case FETCH_LEADER.REQUEST:
            return { ...state, loading: true, error: "" };
        case FETCH_LEADER.SUCCESS:
            return {
                ...state,
                leader: action.leader,
                loading: false,
            };
        case FETCH_LEADER.FAIL:
            return { ...state, loading: false, error: action.error };

        default:
            return { ...state };
    }
};

export default leadersReducer;
