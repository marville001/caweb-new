import parseError from "../../utils/parseError";
import {FETCH_POSITIONS } from "../types";
import { get } from "./http";

export const fetchPositionsAction = (type="user") => async (dispatch) => {
  dispatch({ type: FETCH_POSITIONS.REQUEST });
  try {
    const data = await get("positions", type);
     dispatch({
      type: FETCH_POSITIONS.SUCCESS,
      positions: data.positions,
    });
  } catch (error) {
    dispatch({
      type: FETCH_POSITIONS.FAIL,
      error: parseError(error),
    });
  }
};
