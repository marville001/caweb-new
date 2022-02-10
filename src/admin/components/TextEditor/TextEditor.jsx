import React from "react";
import Editor from "rich-markdown-editor";

const TextEditor = ({ editorValue, setEditorValue }) => {
    return (
        <Editor
            placeholder="Start typing here"
            value={editorValue}
            dir="ltr"
            onChange={(e) => {
                setEditorValue(e());
            }}
        />
    );
};

export default TextEditor;
