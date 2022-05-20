import parseError from "../../utils/parseError";
import { FETCH_LEADER, FETCH_LEADERS } from "../types";
import { get } from "./http";

export const fetchLeadersAction = (type="user") => async (dispatch) => {
  dispatch({ type: FETCH_LEADERS.REQUEST });
  try {
    const data = await get("leaders", type);
     dispatch({
      type: FETCH_LEADERS.SUCCESS,
      leaders: data.leaders,
    });
  } catch (error) {
    dispatch({
      type: FETCH_LEADERS.FAIL,
      error: parseError(error),
    });
  }
};


export const fetchLeaderAction = (id, type="user") => async (dispatch) => {
  dispatch({ type: FETCH_LEADER.REQUEST });
  try {
    const data = await get("leaders/"+id, type);
     dispatch({
      type: FETCH_LEADER.SUCCESS,
      leader: data.leader,
    });
  } catch (error) {
    dispatch({
      type: FETCH_LEADER.FAIL,
      error: parseError(error),
    });
  }
};
