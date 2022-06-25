import parseError from "../../utils/parseError";
import {FETCH_EVENTS } from "../types";
import { get } from "./http";

export const fetchEventsAction = (params, type="user") => async (dispatch) => {
  dispatch({ type: FETCH_EVENTS.REQUEST });
  try {
    const data = await get(`events?pagesize=${params?.pageSize || 10}&page=${params?.page || 1}`, type);
     dispatch({
      type: FETCH_EVENTS.SUCCESS,
      events: data.events,
    });
  } catch (error) {
    dispatch({
      type: FETCH_EVENTS.FAIL,
      error: parseError(error),
    });
  }
};
