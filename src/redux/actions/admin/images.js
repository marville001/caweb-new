import { GET_IMAGES, UPLOAD_IMAGE } from "../../types.admin";
import { get, post } from "../http";

export const uploadImage = (details) => async (dispatch) => {
  dispatch({ type: UPLOAD_IMAGE.REQUEST });
  try {
    await post("images", details, "admin");
    dispatch({ type: UPLOAD_IMAGE.SUCCESS });
    return { success: true, message: "Image uploaded successfully" };
  } catch (error) {
    dispatch({
      type: UPLOAD_IMAGE.FAIL,
    });
    return {
      success: false,
      message: error?.response?.data?.message || "Failed. Please try again",
    };
  }
};

export const getImages = (params) => async (dispatch) => {
  dispatch({ type: GET_IMAGES.REQUEST });
  try {
    const data = await get(
      `images?pagesize=${params?.pageSize || 10}&page=${params?.page || 1}`,
      "admin"
    );
    dispatch({
      type: GET_IMAGES.SUCCESS,
      images: data.images,
      total: data.total,
    });
  } catch (error) {
    dispatch({
      type: GET_IMAGES.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};
