import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getPrayers } from "../../redux/actions/admin/prayers";
import { _delete } from "../../redux/actions/http";
import parseError from "../../utils/parseError";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";
import AddPrayerModal from "../components/PrayersPageComponents/AddPrayerModal";
import EditPrayerModal from "../components/PrayersPageComponents/EditPrayerModal";
const PrayersPage = () => {
    const { prayers, isLoadingPrayers, error } = useSelector(
        (state) => state.prayersState
    );
    const [addPrayerModalOpen, setAddPrayerModalOpen] = useState(false);
    const [editPrayerModalOpen, setEditPrayerModalOpen] = useState(false);
    const [deletePrayerModalOpen, setDeletePrayerModalOpen] = useState(false);
    const [editPrayer, setEditPrayer] = useState({});
    const [deletePrayer, setDeletePrayer] = useState({});

    const [deletingPrayer, setDeletingPrayer] = useState(false);

    const dispatch = useDispatch();

    const closeAddPrayerModal = () => {
        setAddPrayerModalOpen(false);
    };

    const openAddPrayerModal = () => {
        setAddPrayerModalOpen(true);
    };

    const handleDeletePrayer = async () => {
        try {
            setDeletingPrayer(true);

            await _delete(`prayers/${deletePrayer._id}`, "admin");
            dispatch(getPrayers("admin"));

            setDeletingPrayer(false);
            toast.success("Prayer Deleted successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setDeletePrayer({});
            setDeletePrayerModalOpen(false);
        } catch (error) {
            setDeletingPrayer(false);
            toast.error(parseError(error), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    useEffect(() => {
        dispatch(getPrayers());
    }, [dispatch]);

    return (
        <div className="rounded-md  p-4">
            <div className="flex justify-between">
                <h4 className="text-2xl text-dodge-blue font-bold">Prayers</h4>
                <button
                    onClick={openAddPrayerModal}
                    className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md"
                >
                    Add Prayer
                </button>
            </div>
            {error && (
                <div className="bg-red-100 p-2 flex justify-center">
                    <p className="text-red-500">{error}</p>
                </div>
            )}
            {isLoadingPrayers && (
                <div className="my-5 flex items-center justify-center">
                    <div className="animate-spin">
                        <FaSpinner className="w-8 h-8" />
                    </div>
                </div>
            )}

            <div className="my-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {prayers.map(({ _id, prayer, title }) => (
                    <div
                        key={_id}
                        className="bg-white _shadow py-2 px-6 border-2 rounded-md"
                    >
                        <h2 className="text-md my-2 font-medium">{title}</h2>
                        <p className="text-sm text-justify">
                            {prayer.substring(0, 120)}{" "}
                            {prayer.length > 120 && " ..."}
                        </p>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => {
                                    setEditPrayer({ _id, prayer, title });
                                    setEditPrayerModalOpen(true);
                                }}
                                className="bg-dodge-blue px-2 rounded text-white text-xs py-1"
                            >
                                Edit / View
                            </button>
                            <button
                                onClick={() => {
                                    setDeletePrayer({ _id, prayer, title });
                                    setDeletePrayerModalOpen(true);
                                }}
                                className="cursor-pointer bg-red-500 px-2 rounded text-white text-xs py-1"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <AddPrayerModal
                isOpen={addPrayerModalOpen}
                closeModal={closeAddPrayerModal}
            />
            <EditPrayerModal
                isOpen={editPrayerModalOpen}
                editPrayer={editPrayer}
                setEditPrayer={setEditPrayer}
                closeModal={() => setEditPrayerModalOpen(false)}
            />

            <ConfirmDeleteModal
                isOpen={deletePrayerModalOpen}
                closeModal={() => {
                    setDeletePrayer({});
                    setDeletePrayerModalOpen(false);
                }}
                loading={deletingPrayer}
                message={`Please Confirm Deleting the Prayer {${deletePrayer?.title}}. This will erase all data about the prayer`}
                actionMethod={handleDeletePrayer}
            />
        </div>
    );
};

export default PrayersPage;
