import { CREATE_PRAYER, GET_PRAYERS } from "../../types.admin";
import { get, post } from "../http";

export const addPrayer = (prayer) => async (dispatch) => {
  dispatch({ type: CREATE_PRAYER.REQUEST });
  try {
    await post("prayers", prayer, "admin");
    dispatch({ type: CREATE_PRAYER.SUCCESS });
    return { success: true, message: "Prayer added successfully" };
  } catch (error) {
    dispatch({
      type: CREATE_PRAYER.FAIL,
    });
    return {
      success: false,
      message: error?.response?.data?.message || "Failed. Please try again",
    };
  }
};

export const getPrayers = (params) => async (dispatch) => {
  dispatch({ type: GET_PRAYERS.REQUEST });
  try {
    const data = await get("prayers", "admin");
    dispatch({
      type: GET_PRAYERS.SUCCESS,
      prayers: data.prayers,
    });
  } catch (error) {
    dispatch({
      type: GET_PRAYERS.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};
