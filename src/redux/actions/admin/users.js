import { ADD_USER, GET_USERS } from "../../types.admin";
import { get, post } from "../http";

export const addUser = (user) => async (dispatch) => {
  dispatch({ type: ADD_USER.REQUEST, payload: user });
  try {
    const data = await post("auth/register", user, "admin");
    dispatch({ type: ADD_USER.SUCCESS, user: data.user });
    return { success: true, message: "User added successfully" };
  } catch (error) {
    dispatch({
      type: ADD_USER.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
    return {
      success: false,
      message: error?.response?.data?.message || "Failed. Please try again",
    };
  }
};

export const getUsers = (user) => async (dispatch) => {
  dispatch({ type: GET_USERS.REQUEST, payload: user });
  try {
    const data = await get("users", "admin");
    dispatch({ type: GET_USERS.SUCCESS, users: data.users });
  } catch (error) {
    dispatch({
      type: GET_USERS.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};
