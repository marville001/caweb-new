import axios from "axios";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import parseError from "../../../utils/parseError"

const ImageUpload = ({ setUrl, imageUrl }) => {
    const [loading, setLoading] = useState(false);

    const handleImageChange = async (e) => {
        const { files } = e.target;
        if (files.length === 0) return;

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("upload_preset", "dekutca-chaplaincy");
            formData.append("cloud_name", "dekutcatholicchaplaincy");

            const { data } = await axios.post(
                "https://api.cloudinary.com/v1_1/dekutcatholicchaplaincy/image/upload",
                formData
            );

            const url = data.url.toString().replace("http:", "https:")
            setUrl(url);
            setLoading(false);

            toast.success("Uploaded successfully ", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        } catch (error) {
            setUrl("")
            setLoading(false)
            toast.error(parseError(error), {
                position: "bottom-right",
                autoClose: 10000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        }
    };

    return (
        <div className="relative min-h-[150px]">
            {!loading && (
                <div className={`"mb-5" ${loading && "hidden"}`}>
                    <label
                        htmlFor="image-select"
                        className="p-4 mt-3 h-[150px] border-2 text-lg font-bold opacity-50 flex justify-center items-center border-dashed cursor-pointer"
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

            {loading && (
                <div className="absolute inset-0 p-5 bg-slate-900 bg-opacity-10 flex items-center justify-center">
                    <FaSpinner className="animate-spin text-4xl opacity-50" />{" "}
                    Uploading....
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
