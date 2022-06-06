import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

Quill.register("modules/imageUploader", ImageUploader);

const QuillEditor = ({
    value = "",
    placeholder = "",
    handleChange = () => {},
}) => {
    const [uploading, setUploading] = useState(false);

    const handleUploadImage = async (file) => {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "dekutca-chaplaincy");
        formData.append("cloud_name", "dyzn9g0lr");
        try {
            const { data } = await axios.post(
                "https://api.cloudinary.com/v1_1/dyzn9g0lr/image/upload",
                formData
            );
            setUploading(false);
            return data.url;
        } catch (error) {
            setUploading(false);
        }
    };
    return (
        <div className="relative">
            <ReactQuill
                theme="snow"
                onChange={handleChange}
                value={value}
                modules={{
                    toolbar: [
                        [{ header: "1" }, { header: "2" }],
                        [{ size: [] }],
                        ["bold", "italic", "underline", "strike", "blockquote"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link", "image", "video"],
                        ["clean"],
                    ],
                    clipboard: {
                        matchVisual: false,
                    },
                    imageUploader: {
                        upload: handleUploadImage,
                    },
                }}
                formats={QuillEditor.formats}
                bounds={".app"}
                placeholder={placeholder}
            />

            {uploading && (
                <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed">
                    <FaSpinner className="animate-spin mr-4 opacity-80" />
                    uploading
                </div>
            )}
        </div>
    );
};

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
QuillEditor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
];

export default QuillEditor;
