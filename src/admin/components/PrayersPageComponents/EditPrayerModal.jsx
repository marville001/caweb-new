import React from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../common/Modal";
import {
    editPrayerAction,
    getPrayers,
} from "../../../redux/actions/admin/prayers";
import { toast } from "react-toastify";
import { useEffect } from "react";

const EditPrayerModal = ({ closeModal, isOpen, editPrayer, setEditPrayer }) => {
    const { isEditingPrayer } = useSelector((state) => state.prayersState);

    const [title, setTitle] = useState("");
    const [prayer, setPrayer] = useState("");

    const dispatch = useDispatch();

    const handleCloseModal = () => {
        closeModal();
        setTitle("");
        setPrayer("");
        setEditPrayer({});
    };

    const handleSubmit = async () => {
        const response = await dispatch(
            editPrayerAction({ title, prayer }, editPrayer._id)
        );

        if (response.success) {
            toast.success("Prayer editted successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            handleCloseModal();
            await dispatch(getPrayers());
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

    useEffect(() => {
        if (editPrayer._id) {
            setTitle(editPrayer.title);
            setPrayer(editPrayer.prayer);
        }
    }, [editPrayer]);
    return (
        <Modal isOpen={isOpen}>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
                View or Edit Prayer
            </h3>
            <div className="form-group my-3">
                <label htmlFor="title" className="text-lg block">
                    Title
                </label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter prayer title"
                    className="ring-1 focus:ring-slate-600 w-full p-2 rounded-sm mt-3 outline-none ring-offset-2"
                />
            </div>
            <div className="form-group mt-4">
                <label htmlFor="title" className="text-lg block">
                    Prayer
                </label>
                <textarea
                    value={prayer}
                    onChange={(e) => setPrayer(e.target.value)}
                    type="text"
                    placeholder="Type prayer here..."
                    rows="6"
                    className="focus:ring-slate-600 w-full p-2 rounded-md mt-3 outline-none ring-offset-2"
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
                    disabled={isEditingPrayer}
                    className="bg-dodge-blue px-8 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                    onClick={handleSubmit}
                >
                    {isEditingPrayer && (
                        <FaSpinner className="mr-2 animate-spin" />
                    )}
                    Update
                </button>
            </div>
        </Modal>
    );
};

export default EditPrayerModal;
