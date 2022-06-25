import React, { useState } from "react";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getPrayers } from "../../redux/actions/admin/prayers";
import { getSccsAction } from "../../redux/actions/admin/sccs";
import { getAdmins, getUsers } from "../../redux/actions/admin/users";
import { fetchEventsAction } from "../../redux/actions/events";
import { _delete } from "../../redux/actions/http";
import parseError from "../../utils/parseError";
import AddAdminModal from "../components/AdminHomeComponents/AddAdminModal";
import CountCards from "../components/AdminHomeComponents/CountCards";
import Piechart from "../components/charts/Pie";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

const AdminHome = () => {
    const { isLoadingAdmins, admins } = useSelector(
        (state) => state.usersState
    );
    const { sccs } = useSelector((state) => state.sccsState);

    let [addAdminModalOpen, setAddAdminModalOpen] = useState(false);
    const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [sccsData, setSccsData] = useState([
        { name: "ST AGELUS", value: 0 },
        { name: "ST JOSEPH", value: 0 },
        { name: "ST PETERS", value: 0 },
    ]);

    const dispatch = useDispatch();

    const closeAddAdminModal = () => {
        setAddAdminModalOpen(false);
    };

    const openAddAdminModal = () => {
        setAddAdminModalOpen(true);
    };

    const openDeleteUserModal = (user) => {
        setSelectedUser(user);
        setConfirmDeleteModalOpen(true);
    };

    const handleClose = () => {
        setLoading(false);
        setSelectedUser({});
        setConfirmDeleteModalOpen(false);
    };

    const handleDeleteUser = async () => {
        setLoading(true);
        try {
            const data = await _delete(
                `users/admin/${selectedUser._id}`,
                "admin"
            );

            toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            handleClose();
            dispatch(getAdmins());
        } catch (error) {
            toast.error(parseError(error), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            handleClose();
        }
    };

    useEffect(() => {
        dispatch(getAdmins());
        dispatch(getSccsAction());
        dispatch(getUsers());
        dispatch(fetchEventsAction({page: 1, pageSize: 10}, "admin"));
        dispatch(getPrayers());
    }, [dispatch]);

    useEffect(() => {
        const majorSccs = sccs
            ?.filter((scc) => scc.category === "major")
            .map((scc) => ({ name: scc.name, value: scc.members.length }));
        setSccsData(majorSccs);
    }, [sccs]);

    const colors = ["#0088FE", "#00C49F", "#FF8042"];

    return (
        <div className="">
            <CountCards />
            <div className="grid grid-cols-1 lg:grid-cols-2 my-12 gap-5">
                <div className="w-full h-[320px] rounded-md bg-white shadow-md">
                    <h3 className="text-2xl text-center p-3">
                        Scc Members Chart
                    </h3>

                    <div className="flex items-center justify-center space-x-4">
                        {sccsData?.map((data, i) => (
                            <h2
                                key={i}
                                className="flex items-center font-light text-sm"
                            >
                                <div
                                    className={`w-4 h-4 bg-[${colors[i]}] mr-1`}
                                ></div>
                                {data?.name}
                            </h2>
                        ))}
                    </div>
                    <div className="w-50 h-60">
                        <Piechart
                            data={sccsData}
                            COLORS={["#0088FE", "#00C49F", "#FF8042"]}
                        />
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="pr-6 flex items-center justify-between">
                        <h3 className="text-2xl p-3">Admin Users</h3>
                        <button
                            onClick={openAddAdminModal}
                            className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md"
                        >
                            Add
                        </button>
                    </div>
                    <div className="h-64 px-4 py-4 overflow-y-auto w-full divide-y-[1px] divide-gray-100">
                        {isLoadingAdmins && (
                            <div className="flex py-3 justify-center">
                                <FaSpinner className="mr-2 w-8 h-8 animate-spin" />
                            </div>
                        )}
                        {admins?.map((admin) => (
                            <div
                                key={admin._id}
                                className="flex items-center py-4"
                            >
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`}
                                    alt=""
                                />
                                <div className="flex flex-col ml-4">
                                    <h2 className="font-bold">
                                        {admin.firstname + " " + admin.lastname}
                                    </h2>
                                    <p className="text-sm">{admin.email}</p>
                                </div>
                                <div className="ml-auto mr-6 flex space-x-2">
                                    {/* <HiPencilAlt className="font-bold text-dodge-blue text-2xl cursor-pointer" /> */}
                                    <HiTrash
                                        onClick={() =>
                                            openDeleteUserModal(admin)
                                        }
                                        className="font-bold text-red-400 text-2xl cursor-pointer"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add admin modal */}
            <AddAdminModal
                isOpen={addAdminModalOpen}
                closeModal={closeAddAdminModal}
            />

            {/* Remove Admin*/}
            <ConfirmDeleteModal
                isOpen={confirmDeleteModalOpen}
                closeModal={() => {
                    setConfirmDeleteModalOpen(false);
                    setSelectedUser({});
                }}
                loading={loading}
                message="Are you sure you want to remove the admin?"
                actionMethod={handleDeleteUser}
            />
        </div>
    );
};

export default AdminHome;
