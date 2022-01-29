import React, { useState } from "react";
import GalleryImage from "../components/GalleryPageComponents/GalleryImage";
import UploadImageModal from "../components/GalleryPageComponents/UploadImageModal";

const GalleryPage = () => {
  let [uploadImageModalOpen, setUploadImageModalOpen] = useState(false);

  const closeUploadImageModal = () => {
    setUploadImageModalOpen(false);
  };

  const openUploadImageModal = () => {
    setUploadImageModalOpen(true);
  };
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

      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-10">
        {[10, 20, 30, 40, 50, 60, 70, 80, 90, 12, 15, 25, 35, 45, 55].map(
          (image, i) => (
            <GalleryImage key={i} image={image} />
          )
        )}
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
