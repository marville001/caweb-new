import { FETCH_EVENTS } from "../types";

const initialState = {
    events: [],
    isLoadingEvents: false,
};

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENTS.REQUEST:
            return { ...state, isLoadingEvents: true, error: "" };
        case FETCH_EVENTS.SUCCESS:
            return {
                ...state,
                events: action.events,
                isLoadingEvents: false,
            };
        case FETCH_EVENTS.FAIL:
            return { ...state, isLoadingEvents: false, error: action.error };

        default:
            return { ...state };
    }
};

export default eventsReducer;
