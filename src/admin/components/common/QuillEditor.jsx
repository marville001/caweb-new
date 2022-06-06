import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({
    value = "",
    placeholder = "",
    handleChange = () => {},
}) => {
    return (
        <div>
            <ReactQuill
                theme="snow"
                onChange={handleChange}
                value={value}
                modules={QuillEditor.modules}
                formats={QuillEditor.formats}
                bounds={".app"}
                placeholder={placeholder}
            />
        </div>
    );
};

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
QuillEditor.modules = {
    toolbar: [
		[
			{ header: "1" },
			{ header: "2" },
			// { font: [] }
		],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            // { indent: "-1" },
            // { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};
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
