import React from "react";

const TextEditorPreview = ({ editorValue }) => {
    return (
        <div>
            <h4>Preview</h4>
            {editorValue}
        </div>
    );
};

export default TextEditorPreview;
