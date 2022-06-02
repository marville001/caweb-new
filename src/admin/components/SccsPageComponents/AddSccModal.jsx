import React from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../common/Modal";
import { addScc, getSccsAction } from "../../../redux/actions/admin/sccs";
import { toast } from "react-toastify";
import ImageUpload from "../common/ImageUpload";

const AddSccModal = ({ closeModal, isOpen }) => {
    const { isCreatingScc } = useSelector((state) => state.sccsState);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const [imageUrl, setImageUrl] = useState("");

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        closeModal();
        setName("");
        setDescription("");
        setImageUrl("");
        setCategory("");
    };

    const handleSubmit = async () => {
        if (!imageUrl || !name || !description) {
            alert("All fields are required!");
            return;
        }

        const data = {
            image: imageUrl,
            name,
            key: name.replaceAll(" ","").toLowerCase(),
            category,
            description,
        };

        const response = await dispatch(addScc(data));

        if (response.success) {
            toast.success("Scc added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            handleCloseModal();
            await dispatch(getSccsAction());
        } else {
            toast.error(response.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <Modal isOpen={isOpen}>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add Scc
            </h3>
            <div className="form-group my-3">
                <label htmlFor="title" className="text-lg block">
                    Name
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter scc name"
                    className="ring-1 focus:ring-slate-600 w-full p-2 rounded-sm mt-3 outline-none ring-offset-2"
                />
            </div>

            <div className="form-group my-3">
                <label htmlFor="title" className="text-lg block">
                    Category
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    className="focus:ring-slate-600 w-full p-2 mt-3 outline-none rounded-md"
                >
                    <option value=""></option>
                    <option value="major">Major Scc</option>
                    <option value="minor">Minor Scc</option>
                </select>
            </div>

            <div className="form-group mt-4">
                <label htmlFor="title" className="text-lg block">
                    Description
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Type sccd escription here..."
                    rows="6"
                    className=" focus:ring-slate-600 w-full p-2 rounded-md mt-3 outline-none ring-offset-2"
                ></textarea>
            </div>

            <div className="flex flex-col gap-2">
                {imageUrl ? (
                    <div>
                        <img
                            src={imageUrl}
                            alt=""
                            className="h-48 rounded-md w-full object-cover"
                        />
                        <div className="flex justify-between">
                            <label
                                onClick={() => setImageUrl("")}
                                htmlFor="profile-image"
                                className="border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                            >
                                Change
                            </label>
                        </div>
                    </div>
                ) : (
                    <ImageUpload imageUrl={imageUrl} setUrl={setImageUrl} />
                )}
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
                    disabled={isCreatingScc}
                    className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                    onClick={handleSubmit}
                >
                    {isCreatingScc && (
                        <FaSpinner className="mr-2 animate-spin" />
                    )}
                    Submit
                </button>
            </div>
        </Modal>
    );
};

export default AddSccModal;
