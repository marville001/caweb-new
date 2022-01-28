import { ADMIN_LOGIN } from "../../types.admin";
import { get, post } from "../http";

const adminLogin = (user) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN.REQUEST, payload: user });
  try {
    const data = await post("auth/admin/login", user, "admin");
    localStorage.setItem("adminToken", data.token);
    dispatch({
      type: ADMIN_LOGIN.SUCCESS,
      admin: data.admin,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};

export const getLoggedInAdmin = () => async (dispatch) => {
  const token = localStorage.adminToken;

  console.log({ token });
  if (token) {
    try {
      const data = await get("auth/admin/me", "admin");
      dispatch({
        type: ADMIN_LOGIN.SUCCESS,
        admin: data.user,
      });
    } catch (error) {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin/login";
    }
  }
};

export default adminLogin;
