import { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
// import ImageUploader from "quill-image-uploader";

import "react-quill/dist/quill.snow.css";

// Quill.register("modules/imageUploader", ImageUploader);

const QuillEditor = ({
    value = "",
    placeholder = "",
    handleChange = () => {},
}) => {
    const editorRef = useRef(null);

    const modules = useMemo(
        () => ({
            toolbar: {
                // handlers: {
                //     image: handleUploadImage,
                // },
                container: [
                    [{ header: "1" }, { header: "2" }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [
                        "link",
                        "image",
                        "video",
                    ],
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
                modules={modules}
                formats={QuillEditor.formats}
                bounds={".app"}
                placeholder={placeholder}
                forwardedRef={editorRef}
            />
        </div>
    );
};

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
