import React, { useRef } from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../common/Modal";
import { addScc, getSccsAction } from "../../../redux/actions/admin/sccs";
import { toast } from "react-toastify";

const AddSccModal = ({ closeModal, isOpen }) => {
    const { isCreatingScc } = useSelector((state) => state.sccsState);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        closeModal();
        setName("");
        setDescription("");
        setImage("");
        setCategory("");
    };

    const imageRef = useRef();

    const handleSubmit = async () => {
        if (!image || !name || !description) {
            alert("All fields are required!");
            return;
        }
        const formData = new FormData();
        formData.append("image", image[0]);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);

        const response = await dispatch(addScc(formData));

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

            <div>
                <input
                    onChange={(e) => setImage(e.target.files)}
                    ref={imageRef}
                    id="profile-image"
                    className="hidden"
                    // value={image}
                    accept="image/*"
                    type="file"
                />
            </div>
            <div
                onClick={() => imageRef.current.click()}
                className="p-4 mb-8 mt-4 border-2 flex justify-center border-dashed cursor-pointer"
            >
                <span className="mx-2 overflow-hidden">
                    {image?.length >= 1
                        ? image[0].name
                        : "Click here to select image"}
                </span>
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
