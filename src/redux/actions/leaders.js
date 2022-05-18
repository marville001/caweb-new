import parseError from "../../utils/parseError";
import { FETCH_LEADERS } from "../types";
import { get } from "./http";

export const fetchLeadersAction = (type="user") => async (dispatch) => {
  dispatch({ type: FETCH_LEADERS.REQUEST });
  try {
    const data = await get("leaders", type);
     dispatch({
      type: FETCH_LEADERS.SUCCESS,
      events: data.leaders,
    });
  } catch (error) {
    dispatch({
      type: FETCH_LEADERS.FAIL,
      error: parseError(error),
    });
  }
};
