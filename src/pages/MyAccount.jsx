import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { updateImage } from "../redux/actions/userActions";
import { put } from "../redux/actions/http";

const sccs = {
    stangelus: "St Angelus",
    stpeters: "St Peters",
    stjoseph: "St Joseph",
};

const MyAccount = () => {
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

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const imageRef = useRef();

    const handleUpdateImage = async () => {
        const formData = new FormData();
        console.log({ user });

        formData.append("avatar", profileImage[0]);

        const result = await dispatch(updateImage(formData, user._id));

        if (!result.success) {
            alert(result.message);
        }
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
    return (
        <div className="max-w-4xl mx-auto bg-white my-16 p-6 pb-28">
            <h2 className="text-3xl text-dodge-blue font-bold">
                Manage Account
            </h2>
            <hr className="my-4" />
            <div className="flex flex-col lg:flex-row lg:divide-x-2">
                <div className="px-5 py-4 pb-10 min-w-[200px]">
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
                                to="/my-account"
                                className="text-lg tracking-wider font-light"
                            >
                                My Subscription
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="px-5  flex-1">
                    {/* Profile Image */}
                    <div className="flex flex-col sm:flex-row relative gap-6">
                        <div className="cursor-pointer rounded-md overflow-hidden ring-0">
                            <img
                                className="rounded-md w-64 sm:w-48 h-48 object-cover"
                                src={`${
                                    user?.avatar.startsWith("https")
                                        ? "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
                                        : user?.avatar
                                        ? process.env.REACT_APP_UPLOADS_URL +
                                          user?.avatar
                                        : "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
                                }`}
                                alt="Avatar"
                            />
                            {console.log(user)}
                        </div>
                        <div className="flex flex-col items-start my-2">
                            <input
                                onChange={(e) =>
                                    setProfileImage(e.target.files)
                                }
                                ref={imageRef}
                                id="profile-image"
                                className="hidden"
                                // value={profileImage}
                                accept="image/*"
                                type="file"
                            />
                            <div
                                onClick={() => imageRef.current.click()}
                                className="min-w-[250px] cursor-pointer border p-2 pr-10 rounded-lg"
                            >
                                {profileImage?.length >= 1
                                    ? profileImage[0].name
                                    : "Select Image"}
                            </div>
                            <button
                                type="button"
                                disabled={isUpdatingImage}
                                className="bg-sea-green px-8 my-2 py-2 text-sm font-medium text-white rounded-md disabled:bg-slate-700 disabled:cursor-not-allowed flex disabled:text-gray-400 items-center justify-center"
                                onClick={handleUpdateImage}
                            >
                                {isUpdatingImage && (
                                    <FaSpinner className="mr-2 animate-spin" />
                                )}
                                Update
                            </button>
                        </div>
                    </div>

                    <hr className="mt-8" />

                    {/* Other Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className=" w-full">
                            <p className="text-md mb-2 font-light">Firstname</p>
                            <input
                                type="text"
                                readOnly
                                value={user.firstname}
                                className="p-2 text-slate-700 rounded-md outline-none border w-full"
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-md mb-2 font-light">Lastname</p>
                            <input
                                type="text"
                                readOnly
                                value={user.lastname}
                                className="p-2 text-slate-700 rounded-md outline-none border w-full"
                            />
                        </div>
                        <div className=" w-full">
                            <p className="text-md mb-2 font-light">Username</p>
                            <input
                                type="text"
                                readOnly
                                value={user.username}
                                className="p-2 text-slate-700 rounded-md outline-none border w-full"
                            />
                        </div>
                        <div className=" w-full">
                            <p className="text-md mb-2 font-light">Email</p>
                            <input
                                type="text"
                                readOnly
                                value={user.email}
                                className="p-2 rounded-md outline-none border w-full  text-slate-700"
                            />
                        </div>
                        <div className=" w-full">
                            <p className="text-md mb-2 font-light">SCC Group</p>
                            <input
                                type="text"
                                readOnly
                                value={sccs[user.scc]}
                                className="p-2 rounded-md outline-none border w-full text-slate-700"
                            />
                        </div>
                    </div>

                    {/* <button className="bg-sea-green px-10 py-1 my-2 rounded-md text-white uppercase block">
                        Update
                    </button> */}

                    <hr className="my-8" />
                    <h5 className="text-slate-500 text-lg">Update password</h5>
                    {success && (
                        <div className="p-2 rounded-md my-2 bg-green-200 text-green-800 text-center">
                            {success}
                        </div>
                    )}
                    {error && (
                        <div className="p-2 rounded-md my-2 bg-red-200 text-red-800 text-center">
                            {error}
                        </div>
                    )}
                    <input
                        type="password"
                        value={old_password}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="Enter old password"
                        className="p-2 mt-4 rounded-md outline-none border text-slate-700 w-full md:w-auto"
                    />
                    <input
                        type="password"
                        value={new_password}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="p-2 my-4 rounded-md outline-none border md:mx-4 text-slate-700  w-full md:w-auto"
                    />
                    <input
                        type="password"
                        value={confirm_new_password}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="p-2 rounded-md outline-none border  text-slate-700  w-full md:w-auto"
                    />

                    <button
                        disabled={isUpdatingPassword}
                        onClick={handleUpdatePassword}
                        className="disabled:opacity-70 bg-sea-green px-10 py-2 my-6 rounded-md text-white uppercase block"
                    >
                        {isUpdatingPassword ? (
                            <div className="flex items-center space-x-2">
                                <FaSpinner className="mr-2 animate-spin" />{" "}
                                <span className="capitalize">Loading...</span>
                            </div>
                        ) : (
                            <span>Change Pasword</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
