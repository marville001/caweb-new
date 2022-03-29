import { ADD_SCC } from "../types.admin";

const initialState = {
    sccs: [],
    isCreatingScc: false,
};

const sccsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SCC.REQUEST:
            return { ...state, isCreatingScc: true };
        case ADD_SCC.SUCCESS:
            return {
                ...state,
                isCreatingScc: false,
            };
        case ADD_SCC.FAIL:
            return { ...state, isCreatingScc: false };

        default:
            return { ...state };
    }
};

export default sccsReducer;
