import React, { useState } from "react";

const ImageUpload = ({ setUrl }) => {
    const [imageUrl, setImageUrl] = useState("");

    const handleImageChange = (e) => {
        const { files } = e.target;
        if (files.length === 0) return;

        setImageUrl(URL.createObjectURL(files[0]));
        setUrl(URL.createObjectURL(files[0]));
    };

    return (
        <div>
            {imageUrl ? (
                <>
                    <img
                        src={imageUrl}
                        alt=""
                        className="h-48 rounded-md w-full object-cover"
                    />
                    <label
                        htmlFor="image-select"
                        className="border-2 mt-2 inline-block px-4 py-1 cursor-pointer"
                    >
                        Change
                    </label>
                </>
            ) : (
                <div className="mb-5">
                    <label
                        htmlFor="image-select"
                        className="p-4 mt-3 h-[150px] border-2 flex justify-center items-center border-dashed cursor-pointer"
                    >
                        <span className="mx-2 overflow-hidden">
                            Click here to select image
                        </span>
                    </label>
                </div>
            )}
            <input
                onChange={handleImageChange}
                id="image-select"
                className="hidden"
                accept="image/*"
                type="file"
            />
        </div>
    );
};

export default ImageUpload;
