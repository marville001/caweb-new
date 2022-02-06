import { GET_GALLERY_IMAGES, } from "../types";

const initialState = {
  images: [],
  total: 0,
  isLoadingImages: false,
  error: "",
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GALLERY_IMAGES.REQUEST:
      return { ...state, isLoadingImages: true, error: "" };
    case GET_GALLERY_IMAGES.SUCCESS:
      return {
        ...state,
        images: action.images,
        total: action.total,
        isLoadingImages: false,
        error: "",
      };
    case GET_GALLERY_IMAGES.FAIL:
      return { ...state, isLoadingImages: false, error: action.error };


    default:
      return { ...state };
  }
};

export default galleryReducer;
