import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from 'remark-gfm'

const TextEditorPreview = ({ editorRef }) => {
    return (
        <article className="flex flex-col items-center">
            <h1 className="my-4 text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
                A tour of the new features in DEKUT CC
            </h1>
            <div
                className="
                my-10
                prose prose-slate dark:prose-invert 
                prose-headings:text-dodge-blue
                prose-a:text-sea-green
                prose-img:w-full prose-img:rounded-2xl
                prose-img:shadow-md prose-pre:bg-slate-600
                prose-ol:ml-5
                "
            >
                <ReactMarkdown rehypePlugins={[rehypeHighlight, remarkGfm]}>
                    {editorRef.current && editorRef.current.value()}
                </ReactMarkdown>
            </div>
        </article>
    );
};

export default TextEditorPreview;
