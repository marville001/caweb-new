import { GET_PRAYERS_USER } from "../types";
import { get } from "./http/get";

export const getPrayers = (params) => async (dispatch) => {
    dispatch({ type: GET_PRAYERS_USER.REQUEST });
    try {
      const data = await get("prayers");
      dispatch({
        type: GET_PRAYERS_USER.SUCCESS,
        prayers: data.prayers,
      });
    } catch (error) {
      dispatch({
        type: GET_PRAYERS_USER.FAIL,
        error:
          error?.response?.data?.message || "An error occurred. Please try again",
      });
    }
  };