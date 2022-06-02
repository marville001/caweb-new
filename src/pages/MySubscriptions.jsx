import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { updateImage } from "../redux/actions/userActions";
import { put } from "../redux/actions/http";
import axios from "axios";
import { toast } from "react-toastify";

const sccs = {
    stangelus: "St Angelus",
    stpeters: "St Peters",
    stjoseph: "St Joseph",
};

const MySubscriptions = () => {
    const { user, isUpdatingImage } = useSelector(
        (state) => state.accountUsers
    );

    const [profileImage, setProfileImage] = useState("");
    const [old_password, setOldPassword] = useState("");
    const [new_password, setNewPassword] = useState("");
    const [confirm_new_password, setConfirmNewPassword] = useState("");

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const imageRef = useRef();

    const handleImageChange = async (e) => {
        const { files } = e.target;

        if (files.length === 0) return;

        setIsUploadingImage(true);
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "dekutca-chaplaincy");
        formData.append("cloud_name", "dyzn9g0lr");

        const { data } = await axios.post(
            "https://api.cloudinary.com/v1_1/dyzn9g0lr/image/upload",
            formData
        );

        setIsUploadingImage(false);
        setImage(data.url);
    };

    const handleUpdateImage = async () => {
        const result = await dispatch(updateImage({ avatar: image }, user._id));

        if (!result.success) {
            alert(result.message);
        }

        toast.success("Avatar updated successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const resetForm = () => {
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    };

    const resetError = () => {
        setTimeout(() => {
            setError("");
        }, 5000);
    };

    const handleUpdatePassword = async () => {
        setError("");
        if (
            old_password === "" ||
            new_password === "" ||
            confirm_new_password === ""
        ) {
            setError("All fields are required!");
            resetError();
            return;
        }

        if (confirm_new_password !== new_password) {
            setError("Password do not match");
            resetError();
            return;
        }

        setIsUpdatingPassword(true);

        try {
            const res = await put("auth/password-update", {
                id: user?._id,
                old_password,
                new_password,
            });

            setSuccess(res.message);
            setIsUpdatingPassword(false);
            resetForm();
            setTimeout(() => {
                setSuccess("");
            }, 5000);
        } catch (error) {
            setError(error.response.data.message);
            setIsUpdatingPassword(false);
            resetError();
        }
    };

    useEffect(() => {
        if (!localStorage.token) {
            navigate("/login");
        }
    }, [user, navigate]);

    useEffect(() => {
        if (user._id) {
            setImage(user?.avatar);
        }
    }, [user]);

    return (
        <div className="max-w-4xl mx-auto bg-white my-16 p-2 sm:p-6 pb-28 min-h-[700px]">
            <h2 className="text-3xl text-dodge-blue font-bold">
                Manage Account
            </h2>
            <hr className="my-4" />
            <div className="flex flex-col lg:flex-row lg:divide-x-2">
                <div className="px-2 sm:px-5 py-4 pb-10 min-w-[200px] h-full">
                    <ul className="flex flex-wrap flex-row lg:flex-col items-center md:space-x-2 lg:space-x-0 lg:space-y-3  gap-4 lg:gap-0">
                        <li>
                            <Link
                                to="/my-account"
                                className="text-lg tracking-wider font-light"
                            >
                                Account Details
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/my-account/subscriptions"
                                className="text-lg tracking-wider font-light"
                            >
                                My Subscription
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="px-2 sm:px-5  flex-1 min-h-[550px]">
                    <h4 className="my-4 text-center font-bold uppercase opacity-50 text-xl">
                        No Subscription Yet
                    </h4>

                    <hr className="mt-8" />
                </div>
            </div>
        </div>
    );
};

export default MySubscriptions;
