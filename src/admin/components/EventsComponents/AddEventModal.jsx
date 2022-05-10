import React from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Modal from "../common/Modal";
const AddEventModal = ({ closeModal, isOpen }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleCloseModal = () => {
        closeModal();
        setTitle("");
        setDate("");
        setImage("");
        setDescription("");
    };

    const handleSubmit = async () => {
    };

    return (
        <Modal isOpen={isOpen}>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
                Create Event
            </h3>
            <div className="sm:flex sm:space-x-2 items-center">
                <div className="form-group my-3 flex-[2]">
                    <label htmlFor="title" className="text-sm block">
                        Title
                    </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Enter prayer title"
                        className="ring-1 focus:ring-slate-600 w-full p-2 py-1 rounded-sm mt-3 outline-none ring-offset-2"
                    />
                </div>
                <div className="form-group my-3 flex-1">
                    <label htmlFor="title" className="text-sm block">
                        Date
                    </label>
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        placeholder="Enter prayer title"
                        className="text-sm ring-1 focus:ring-slate-600 w-full p-2 py-1 rounded-sm mt-3 outline-none ring-offset-2"
                    />
                </div>
            </div>

            <div>
                <p className="text-sm block">Event Image</p>
                <label
                    htmlFor="image-select"
                    className="p-4 mt-3 mb-8 border-2 flex justify-center border-dashed cursor-pointer"
                >
                    <p></p>
                    <input
                        onChange={(e) => setImage(e.target.files)}
                        id="image-select"
                        className="hidden"
                        accept="image/*"
                        type="file"
                    />
                    <span className="mx-2 overflow-hidden">
                        {image?.length >= 1
                            ? image[0].name
                            : "Click here to select image"}
                    </span>
                </label>
            </div>
            <div className="form-group mt-4">
                <label htmlFor="title" className="text-sm block">
                    Description
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Type description here..."
                    rows="6"
                    className="ring-1 focus:ring-slate-600 w-full p-2 py-1 rounded-sm mt-3 outline-none ring-offset-2"
                ></textarea>
            </div>
            <div className="flex mt-4 justify-between">
                <button
                    type="button"
                    className="block bg-red-500 px-8 py-2 text-sm font-medium text-white rounded-md"
                    onClick={handleCloseModal}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    disabled={true}
                    className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                    onClick={handleSubmit}
                >
                    {true && <FaSpinner className="mr-2 animate-spin" />}
                    Submit
                </button>
            </div>
        </Modal>
    );
};

export default AddEventModal;
