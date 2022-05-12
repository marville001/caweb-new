import parseError from "../../utils/parseError";
import {FETCH_EVENTS } from "../types";
import { get } from "./http";

export const fetchEventsAction = (type="user") => async (dispatch) => {
  dispatch({ type: FETCH_EVENTS.REQUEST });
  try {
    const data = await get("events", type);
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
