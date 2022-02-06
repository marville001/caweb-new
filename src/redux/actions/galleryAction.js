import { GET_GALLERY_IMAGES } from "../types";
import { get } from "./http/get";

export const getGalleryImages = (params) => async (dispatch) => {
  dispatch({ type: GET_GALLERY_IMAGES.REQUEST });
  try {
    const data = await get(
      `images?pagesize=${params?.pageSize || 10}&page=${params?.page || 1}`
    );
    dispatch({
      type: GET_GALLERY_IMAGES.SUCCESS,
      images: data.images,
      total: data.total,
    });
  } catch (error) {
    dispatch({
      type: GET_GALLERY_IMAGES.FAIL,
      error:
        error?.response?.data?.message || "An error occurred. Please try again",
    });
  }
};
