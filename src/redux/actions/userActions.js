import {
  USER_LOGIN,
  USER_REGISTER,
  LOGOUT_USER,
} from "../types";
import {post, get} from "./http";

const userSignUp = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER.REQUEST, payload: user });
  try {
    const { data } = await post("/api/users", user);
    localStorage.setItem("token", data.token);
    dispatch(loginUser(data.user));
  } catch (error) {
    dispatch({
      type: USER_REGISTER.FAILED,
      error: error.response.data.message,
    });
  }
};

const userLogin = (user) => async (dispatch) => {
  dispatch({ type: USER_LOGIN.REQUEST, payload: user });
  try {
    const { data } = await post("/api/auth", user);
    localStorage.setItem("token", data.token);
    dispatch(loginUser(data.user));
  } catch (error) {
    dispatch({ type: USER_LOGIN.FAILED, error: error.response.data.message });
  }
};

const getProfileFetch = () => (dispatch) => {
  const token = localStorage.token;
  if (token) {
    const { data } = get("/api/users/me");
    if (data.success) {
      dispatch(loginUser(data.user));
    } else {
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
