import React from "react";

const TextEditorPreview = ({ editorRef }) => {
    return (
        <div>
            {editorRef.current.value()}
        </div>
    );
};

export default TextEditorPreview;
