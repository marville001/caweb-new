import parseError from "../../utils/parseError";
import {CREATE_ABOUT, FETCH_ABOUT, UPDATE_ABOUT } from "../types";
import { get, post, put } from "./http";


export const createAboutAction = (about) => async (dispatch) => {
  dispatch({ type: CREATE_ABOUT.REQUEST });
  try {
    await post("about", about, "admin");
    dispatch({ type: CREATE_ABOUT.SUCCESS });
    return { success: true, message: "About saved successfully" };
  } catch (error) {
    dispatch({
      type: CREATE_ABOUT.FAIL,
    });
    return {
      success: false,
      message: parseError(error),
    };
  }
};

export const fetchAboutAction = (type="user") => async (dispatch) => {
  dispatch({ type: FETCH_ABOUT.REQUEST });
  try {
    const data = await get("about", type);
     dispatch({
      type: FETCH_ABOUT.SUCCESS,
      events: data.about,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ABOUT.FAIL,
      error: parseError(error),
    });
  }
};

export const updateAboutAction = (details,id,  type="user") => async (dispatch) => {
  dispatch({ type: UPDATE_ABOUT.REQUEST });
  try {
    const data = await put("about/"+id,details, type);
     dispatch({
      type: UPDATE_ABOUT.SUCCESS,
      leader: data.about,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ABOUT.FAIL,
      error: parseError(error),
    });
  }
};
