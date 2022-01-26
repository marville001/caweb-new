import { USER_LOGIN, USER_REGISTER, LOGOUT_USER } from "../types";
import { post, get } from "./http";

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

export { userLogin, userSignUp, getProfileFetch, logoutUser };
