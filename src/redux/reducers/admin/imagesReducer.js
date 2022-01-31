import { GET_IMAGES, UPLOAD_IMAGE } from "../../types.admin";

const initialState = {
  images: [],
  isLoadingImages: false,
  isUploadingImage: false,
  error: "",
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES.REQUEST:
      return { ...state, isLoadingImages: true, error: "" };
    case GET_IMAGES.SUCCESS:
      return {
        ...state,
        images: action.images,
        isLoadingImages: false,
        error: "",
      };
    case GET_IMAGES.FAIL:
      return { ...state, isLoadingImages: false, error: action.error };

    case UPLOAD_IMAGE.REQUEST:
      return { ...state, isUploadingImage: true };
    case UPLOAD_IMAGE.SUCCESS:
      return {
        ...state,
        isUploadingImage: false,
      };
    case UPLOAD_IMAGE.FAIL:
      return { ...state, isUploadingImage: false };

    default:
      return { ...state };
  }
};

export default imagesReducer;
