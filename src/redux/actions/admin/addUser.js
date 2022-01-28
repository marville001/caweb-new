// const userSignUp = (user) => async (dispatch) => {
//     dispatch({ type: USER_REGISTER.REQUEST, payload: user });
//     try {
//       const data = await post("auth/register", user);
//       localStorage.setItem("token", data.token);
//       dispatch(loginUser(data.user));
//     } catch (error) {
//       dispatch({
//         type: USER_REGISTER.FAIL,
//         error:
//           error?.response?.data?.message || "An error occurred. Please try again",
//       });
//     }
//   };