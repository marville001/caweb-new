import { GET_SCCS } from "../types";
import { ADD_SCC } from "../types.admin";

const initialState = {
    sccs: [],
    isCreatingScc: false,
    isLoadingSccs: false,
};

const sccsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SCCS.REQUEST:
            return { ...state, isLoadingSccs: true, error: "" };
        case GET_SCCS.SUCCESS:
            return {
                ...state,
                sccs: action.sccs,
                isLoadingSccs: false,
                error: "",
            };
        case GET_SCCS.FAIL:
            return { ...state, isLoadingSccs: false, error: action.error };
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
