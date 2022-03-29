import { ADD_SCC } from "../../types.admin";
import { post } from "../http";

export const addScc = (scc) => async (dispatch) => {
    dispatch({ type: ADD_SCC.REQUEST });
    try {
        await post("sccs", scc, "admin");
        dispatch({ type: ADD_SCC.SUCCESS });
        return { success: true, message: "Scc added successfully" };
    } catch (error) {
        dispatch({
            type: ADD_SCC.FAIL,
        });
        return {
            success: false,
            message:
                error?.response?.data?.message || "Failed. Please try again",
        };
    }
};
