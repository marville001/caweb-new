import { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import ImageUploader from "quill-image-uploader";

import "react-quill/dist/quill.snow.css";

// Quill.register("modules/imageUploader", ImageUploader);

const QuillEditor = ({
    value = "",
    placeholder = "",
    handleChange = () => {},
}) => {
    const editorRef = useRef(null);
    const [uploading, setUploading] = useState(false);

    const handleUploadImage = async (file) => {
        // setUploading(true);
        // const formData = new FormData();
        // formData.append("file", file);
        // formData.append("upload_preset", "dekutca-chaplaincy");
        // formData.append("cloud_name", "dyzn9g0lr");
        // try {
        //     const { data } = await axios.post(
        //         "https://api.cloudinary.com/v1_1/dyzn9g0lr/image/upload",
        //         formData
        //     );
        //     setUploading(false);
        //     return data.url;
        // } catch (error) {
        // 	setUploading(false);
        // 	return ""
        // }

        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];

            // file type is only image.
            if (/^image\//.test(file.type)) {
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
                    // return data.url;
                    console.log(data.url);
                    editorRef.current
                        .getEditor()
                        .insertEmbed(null, "image", data.url);
                } catch (error) {
                    setUploading(false);
                }
            } else {
                console.warn("You could only upload images.");
            }
        };
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                handlers: {
                    image: handleUploadImage,
                },
                container: [
                    [{ header: "1" }, { header: "2" }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image", "video"],
                    ["clean"],
                ],
            },
            clipboard: {
                matchVisual: false,
            },
        }),
        []
    );
    return (
        <div className="relative">
            <ReactQuill
                theme="snow"
                onChange={handleChange}
                value={value}
                modules={
                    modules
                    // {
                    //     // imageUploader: {
                    //     //     upload: handleUploadImage,
                    //     // },
                    // }
                }
                formats={QuillEditor.formats}
                bounds={".app"}
                placeholder={placeholder}
                forwardedRef={editorRef}
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
