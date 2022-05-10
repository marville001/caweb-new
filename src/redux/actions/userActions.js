import { USER_LOGIN, USER_REGISTER, LOGOUT_USER, UPDATE_IMAGE } from "../types";
import { post, get, put } from "./http";

const userSignUp = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER.REQUEST, payload: user });
  try {
    const data = await post("auth/register", user);
    localStorage.setItem("token", data.token);
    dispatch(loginUser(data.user));
  } catch (error) {
    dispatch({
      type: USER_REGISTER.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};

const userLogin = (user) => async (dispatch) => {
  dispatch({ type: USER_LOGIN.REQUEST, payload: user });
  try {
    const data = await post("auth/login", user);
    localStorage.setItem("token", data.token);
    dispatch(loginUser(data.user));
  } catch (error) {
    dispatch({
      type: USER_LOGIN.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};

const getProfileFetch = () => async (dispatch) => {
  const token = localStorage.token;
  if (token) {
    try {
      const data = await get("auth/me");
      dispatch(loginUser(data.user));
    } catch (error) {
      localStorage.removeItem("token");
    }
  }
};

const loginUser = (user) => ({
  type: USER_LOGIN.SUCCESS,
  user,
});

const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER,
  });
};

const updateImage = (details, id) => async (dispatch) => {
  dispatch({ type: UPDATE_IMAGE.REQUEST });
  try {
    const data = await put(`users/upload-avatar/${id}`, details);
    dispatch({
      type: UPDATE_IMAGE.SUCCESS,
      user: data.user
    })

    return {success: true}
  } catch (error) {
    dispatch({
      type: UPDATE_IMAGE.FAIL,
      error:
      error?.response?.data?.message || "An error occurred. Please try again",
    });
    return {success: false, message: error?.response?.data?.message || "An error occurred. Please try again",}
  }
};



export { userLogin, userSignUp, getProfileFetch, logoutUser, updateImage };
