import React, { useState } from "react";
import TextEditorModal from "../components/common/TextEditorModal";

const EventsPage = () => {
    const [editorOpen, setEditorOpen] = useState(false);
    return (
        <div>
            <h4 onClick={() => setEditorOpen(true)}>Events Page</h4>
            <TextEditorModal
                isOpen={editorOpen}
                closeEditor={() => setEditorOpen(false)}
            />
        </div>
    );
};

export default EventsPage;
