import React, { useState } from "react";
import Modal from "../components/common/Modal";
import GalleryImage from "../components/GalleryPageComponents/GalleryImage";

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
      <div className="flex flex-wrap gap-3 my-10">
        {[10, 20, 30, 40, 50, 60, 70, 80, 90, 12, 15, 25, 35, 45, 55].map((image, i) => (
          <GalleryImage key={i} image={image} />
        ))}
      </div>
      {/* Gallery grid end */}

      {/* Upload image modal */}
      <Modal isOpen={uploadImageModalOpen} closeModal={closeUploadImageModal}>
        <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-top transition-all transform bg-white shadow-xl rounded-2xl">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Upload Image
          </h3>
          <p className="text-xs my-4">
            Ensure you have added the user before trying to make him an admin
          </p>
          <div className="form-group my-4 flex-1">
            <input
              type="email"
              className="p-2 py-1 block border-slate-200 border-2 w-full rounded mt-2 outline-none"
              placeholder="Enter users email "
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="block bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md"
              onClick={uploadImageModalOpen}
            >
              Upload
            </button>
          </div>
        </div>
      </Modal>

      {/* Upload image modal end */}
    </div>
  );
};

export default GalleryPage;
