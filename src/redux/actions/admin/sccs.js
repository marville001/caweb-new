import { GET_SCC, GET_SCCS } from "../../types";
import { ADD_SCC } from "../../types";
import { get, post } from "../http";

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

export const getSccsAction = () => async (dispatch) => {
  dispatch({ type: GET_SCCS.REQUEST });
  try {
    const data = await get("sccs");
    dispatch({
      type: GET_SCCS.SUCCESS,
      sccs: data.sccs,
    });
  } catch (error) {
    dispatch({
      type: GET_SCCS.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};

export const getSccAction = (key) => async (dispatch) => {
  dispatch({ type: GET_SCC.REQUEST });
  try {
    const data = await get(`sccs/${key}`);
    dispatch({
      type: GET_SCC.SUCCESS,
      scc: data.scc,
    });
  } catch (error) {
    dispatch({
      type: GET_SCC.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};