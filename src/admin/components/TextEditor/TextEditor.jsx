import React from "react";
import Editor from "rich-markdown-editor";

const TextEditor = ({ editorRef }) => {
    return (
        <Editor
            placeholder="Start typing here"
            dir="ltr"
            value={(editorRef.current && editorRef.current.value()) || ""}
            ref={editorRef}
            onSave={() => {
                console.log(editorRef.current.value());
            }}
            onImageUploadStart={() => {}}
            uploadImage={async (file) => {
                return "https://upload.wikimedia.org/wikipedia/commons/0/06/Davide-ragusa-gcDwzUGuUoI-unsplash.jpg";
            }}
        />
    );
};

export default TextEditor;
