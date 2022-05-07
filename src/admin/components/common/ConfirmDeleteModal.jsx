import React from "react";
import { FaSpinner } from "react-icons/fa";
import Modal from "./Modal";

const ConfirmDeleteModal = ({
    isOpen,
    actionMethod = () => {},
    message = "",
    closeModal = () => {},
    loading,
}) => {
    return (
        <Modal size="xl" isOpen={isOpen} closeModal={() => {}}>
            <div className="bg-white _shadow rounded-md">
                <h4 className="text-center text-2xl text-slate-900 mb-6">
                    Please Confirm Delete
                </h4>

                <div className="my-5">
                    <p>{message}</p>
                </div>

                <div className="flex justify-between items-center mt-8">
                    <button
                        type="button"
                        className="block bg-red-500 px-8 py-2 text-sm font-medium text-white rounded-md"
                        onClick={closeModal}
                    >
                        No
                    </button>
                    <button
                        onClick={actionMethod}
                        className="disabled:opacity-50 disabled:cursor-not-allowed uppercase px-16
						 tracking-wider py-2 text-white text-lg rounded-md flex items-center
						 bg-dodge-blue
                     "
                    >
                        {loading ? (
                            <FaSpinner className="animate-spin mr-4" />
                        ) : (
                            "Yes"
                        )}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmDeleteModal;
