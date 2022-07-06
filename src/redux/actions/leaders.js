import parseError from "../../utils/parseError";
import { FETCH_LEADER, FETCH_LEADERS, UPDATE_LEADER } from "../types";
import { get, put } from "./http";

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

export const updateLeaderAction = (details,id,  type="user") => async (dispatch) => {
  dispatch({ type: UPDATE_LEADER.REQUEST });
  try {
    const data = await put("leaders/"+id,details, type);
     dispatch({
      type: UPDATE_LEADER.SUCCESS,
      leader: data.leader,
     });
    
    return {success: true}
  } catch (error) {
    dispatch({
      type: UPDATE_LEADER.FAIL,
      error: parseError(error),
    });
    return {success: false, message: parseError(error)}
  }
};
