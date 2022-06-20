import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { HiOutlineDotsHorizontal, HiPencil, HiTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getImages } from "../../../redux/actions/admin/images";
import { _delete } from "../../../redux/actions/http";
import parseError from "../../../utils/parseError";

import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

const GalleryImage = ({ image, page, pageSize }) => {
    const [deleteImageModalOpen, setDeleteImageModalOpen] = useState(false);

    const [deleting, setDeleting] = useState(false);

    const dispatch = useDispatch();

    const handleDeleteImage = async () => {
        try {
            setDeleting(true)
            const data = await _delete(`images/${image._id}`, "admin");
            setDeleting(false)

            toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch(getImages({ page, pageSize }));
        } catch (error) {
            setDeleting(false)
            toast.error(parseError(error), {
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
        <div className="w-full bg-white rounded p-2 _shadow border-2">
            <img
                className="w-full h-52 object-cover"
                src={image.image}
                alt=""
            />
            <h3 className="mt-3 font-medium text-dodge-blue">{image.title}</h3>
            <div className="flex justify-between my-1 items-center">
                <p>{new Date(image.date).toDateString()}</p>
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button>
                        <HiOutlineDotsHorizontal className="text-4xl font-bold cursor-pointer text-slate-500" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-24 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg drop-shadow-sm focus:outline-none py-2 px-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={
                                            "flex items-center space-x-2"
                                        }
                                    >
                                        <HiPencil
                                            className={"text-gray-500"}
                                            aria-hidden="true"
                                        />
                                        <span>Edit</span>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={
                                            "flex items-center space-x-2"
                                        }
                                        onClick={() => setDeleteImageModalOpen(true)}
                                    >
                                        <HiTrash
                                            className={"text-gray-500 my-1"}
                                            aria-hidden="true"
                                        />
                                        <span>Delete</span>
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <ConfirmDeleteModal
                isOpen={deleteImageModalOpen}
                closeModal={() => {
                    setDeleteImageModalOpen(false);
                }}
                loading={deleting}
                message={`Please Confirm Deleting the Event {${image?.title}}. This will erase all data about the image`}
                actionMethod={handleDeleteImage}
            />
        </div>
    );
};

export default GalleryImage;
