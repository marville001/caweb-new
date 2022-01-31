import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../redux/actions/admin/images";
import GalleryImage from "../components/GalleryPageComponents/GalleryImage";
import UploadImageModal from "../components/GalleryPageComponents/UploadImageModal";

const GalleryPage = () => {
  const { images, isLoadingImages, error } = useSelector(
    (state) => state.imagesState
  );
  let [uploadImageModalOpen, setUploadImageModalOpen] = useState(false);
  let [pageSize, setPageSize] = useState(10);
  let [page, setPage] = useState(1);

  const closeUploadImageModal = () => {
    setUploadImageModalOpen(false);
  };

  const openUploadImageModal = () => {
    setUploadImageModalOpen(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  return (
    <div className="">
      {/* Header */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl text-dodge-blue font-bold uppercase">
            Our Gallery
          </h1>
          <button
            onClick={openUploadImageModal}
            className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md"
          >
            Upload Image
          </button>
        </div>
      </div>
      {/* Header End */}
      {error && (
        <div className="bg-red-100 p-2 flex justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      {isLoadingImages && (
        <div className="py-4 flex items-center justify-center">
          <div className="animate-spin">
            <FaSpinner className="w-8 h-8" />
          </div>
        </div>
      )}

      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-10">
        {images?.map((image, i) => (
          <GalleryImage key={i} image={image} />
        ))}
      </div>
      {/* Gallery grid end */}

      {/* Upload image modal */}
      <UploadImageModal
        isOpen={uploadImageModalOpen}
        closeModal={closeUploadImageModal}
      />

      {/* Upload image modal end */}
    </div>
  );
};

export default GalleryPage;
