import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiOutlineEye, HiSupport, HiOutlinePencil } from "react-icons/hi";
import TextEditor from "../TextEditor/TextEditor";
import TextEditorPreview from "../TextEditor/TextEditorPreview";

const TextEditorModal = () => {
    const [active, setActive] = useState("editor");
    const [editorValue, setEditorValue] = useState("");
    return (
        <Transition appear show={true} as={Fragment}>
            <Dialog
                as="div"
                className="absolute bg-white  inset-0 z-10 overflow-y-auto"
                onClose={() => {}}
            >
                <div className="min-h-screen text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div
                            className={`
                             inline-block w-full 
                              overflow-hidden text-left align-top 
                              transition-all transform my-5
                              max-w-3xl bg-gray-50
                            `}
                        >
                            <div className="bg-slate-300 p-4 rounded-md flex items-center space-x-8">
                                <div
                                    className={`flex items-center space-x-2 cursor-pointer font-bold ${
                                        active === "editor" &&
                                        "text-dodge-blue"
                                    }`}
                                    onClick={() => setActive("editor")}
                                >
                                    <HiOutlinePencil />
                                    <p>Write</p>
                                </div>
                                <div
                                    className={`flex items-center space-x-2 cursor-pointer font-bold ${
                                        active === "preview" &&
                                        "text-dodge-blue"
                                    }`}
                                    onClick={() => setActive("preview")}
                                >
                                    <HiOutlineEye />
                                    <p>Preview</p>
                                </div>
                                <div
                                    className={`flex items-center space-x-2 cursor-pointer font-bold ${
                                        active === "guide" &&
                                        "text-dodge-blue"
                                    }`}
                                    onClick={() => setActive("guide")}
                                >
                                    <HiSupport />
                                    <p>Guide</p>
                                </div>
                            </div>

                            <div className="p-6 bg-white">
                                {active === "preview" ? (
                                    <TextEditorPreview
                                        editorValue={editorValue}
                                    />
                                ) : active === "guide" ? (
                                    <h4>Guide here</h4>
                                ) : (
                                    <TextEditor
                                        editorValue={editorValue}
                                        setEditorValue={setEditorValue}
                                    />
                                )}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default TextEditorModal;
