import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaEdit, FaSpinner } from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSccAction, getSccsAction } from "../../redux/actions/admin/sccs";
import { fetchEventsAction } from "../../redux/actions/events";
import { put, _delete } from "../../redux/actions/http";
import { fetchLeadersAction } from "../../redux/actions/leaders";
import { fetchPositionsAction } from "../../redux/actions/positions";

import parseError from "../../utils/parseError";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";
import NewSccLeaderModal from "../components/scc/NewSccLeaderModal";

const categories = {
    major: "Major Scc",
    minor: "Major Scc",
    "bible-study": "Bible Study Group",
};

const SccPage = () => {
    const { scc, isLoadingScc } = useSelector((state) => state.sccsState);
    const { leaders } = useSelector((state) => state.leadersState);

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false);
    const [addSccLeaderModalOpen, setAddSccLeaderModalOpen] = useState(false);
    const [currentScc, setCurrentScc] = useState("");

    const [deleteSccModalOpen, setDeleteSccModalOpen] = useState(false);
    const [deletingScc, setDeletingScc] = useState(false);

    const { key } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUploadSccgallery = async (e) => {
        const { files } = e.target;

        if (files.length === 0) return;

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("upload_preset", "dekutca-chaplaincy");
            formData.append("cloud_name", "dekutcatholicchaplaincy");

            const { data } = await axios.post(
                "https://api.cloudinary.com/v1_1/dekutcatholicchaplaincy/image/upload",
                formData
            );

            const url = data.url.toString().replace("http:", "https:")

            const res = await put(
                `sccs/gallery/${scc._id}`,
                { image: url },
                "admin"
            );

            setGallery([res.image, ...gallery]);

            setLoading(false);
            toast.success("Image added successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            setLoading(false);
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

    const handleDeleteScc = async () => {
        try {
            setDeletingScc(true);

            await _delete(`sccs/${scc._id}`, "admin");
            setDeletingScc(false);
            setDeleteSccModalOpen(false);
            
            navigate("/admin/sccs")

            toast.success("Scc Deleted successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            setDeletingScc(false);
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
        setGallery(scc?.gallery);
        setCurrentScc(scc?._id);
    }, [scc]);

    useEffect(() => {
        dispatch(getSccAction(key));
        dispatch(getSccsAction());
        dispatch(fetchEventsAction("admin"));
        dispatch(fetchPositionsAction("admin"));
        dispatch(fetchLeadersAction("admin"));
    }, [dispatch, key]);

    if (isLoadingScc) {
        return (
            <div className="my-5 flex items-center justify-center">
                <div className="animate-spin">
                    <FaSpinner className="w-8 h-8" />
                </div>
            </div>
        );
    }

    return (
        <div className="px-2 sm:px-0">
            <Link
                to="/admin/sccs"
                className="my-5 flex items-center text-sm space-x-3 cursor-pointer"
            >
                <FaChevronLeft /> <span>Go Back</span>
            </Link>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            About Group
                        </h2>

                        <Link
                            className="text-dodge-blue flex items-center space-x-2"
                            to={`/admin/sccs/${key}/edit`}
                        >
                            <FaEdit />
                            <span>Edit Scc</span>
                        </Link>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    {scc.key ? (
                        <>
                            <div className="flex justify-lext items-center">
                                <h2 className="text-2xl text-dodge-blue">
                                    {scc.name}
                                </h2>
                                {/* <h3 className="opacity-70">Name</h3> */}
                            </div>

                            <div className="my-4 w-full overflow-hidden rounded-lg flex gap-3">
                                <img
                                    className="w-full rounded-lg h-52 object-cover object-center cursor-pointer"
                                    src={scc.image}
                                    alt=""
                                />
                            </div>
                            <div className="my-5">
                                <div className="w-full h-[1px] bg-gray-500 opacity-25 mb-5" />

                                <h2 className="text-2xl text-dodge-blue mb-5">
                                    {scc.name} Gallery
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-3 my-4 gap-4">
                                    {gallery?.map((image) => (
                                        <div key={image}>
                                            <img
                                                className="w-full h-40"
                                                src={image}
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                    <label
                                        htmlFor="image_select"
                                        className={`border flex h-40 items-center justify-center cursor-pointer border-dashed  border-dodge-blue py-1 px-5 text-sm rounded-md text-dodge-blue ${
                                            loading &&
                                            "cursor-not-allowed bg-gray-100"
                                        }`}
                                    >
                                        {loading ? (
                                            <FaSpinner className="text-xl animate-spin" />
                                        ) : (
                                            "Add Image To Gallery"
                                        )}
                                    </label>
                                </div>

                                <input
                                    type="file"
                                    name=""
                                    id="image_select"
                                    disabled={loading}
                                    className="hidden"
                                    onChange={handleUploadSccgallery}
                                />
                            </div>

                            <div className="w-full h-[1px] bg-gray-500 opacity-25 my-3" />

                            <h3 className="opacity-70">description</h3>
                            <div className="my-4 w-full">
                                <p>{scc.description}</p>
                            </div>

                            <h3 className="opacity-70">Category</h3>
                            <div className="my-4 w-full">
                                <p>{categories[scc.category]}</p>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h4 className="font-mono text-dodge-blue font-bold">
                                Scc not Added yet
                            </h4>
                        </div>
                    )}
                </div>

                <div className="bg-white p-6 mt-3">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            Scc Leadership
                        </h2>

                        <div
                            className="text-dodge-blue cursor-pointer flex items-center space-x-2"
                            onClick={() => setAddSccLeaderModalOpen(true)}
                        >
                            <HiPlusCircle />
                            <span>Add Leader</span>
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
                        {leaders
                            ?.filter(
                                (leader) =>
                                    leader.churchCommittee === false &&
                                    leader.groupId === scc._id &&
                                    leader.scc?._id === scc._id
                            )
                            ?.map((leader) => (
                                <div
                                    key={leader._id}
                                    className="flex flex-col _shadow border-2 items-center py-4 rounded-lg"
                                >
                                    <img
                                        src={leader?.image}
                                        alt=""
                                        className="rounded-full h-[100px] w-[100px] "
                                    />
                                    <h4 className="mt-2 font-bold">
                                        {leader?.name}
                                    </h4>

                                    <h4 className="mb-2 text-lg font-bold opacity-60">
                                        {leader?.title?.title ?? "-"}
                                    </h4>
                                    <blockquote className="text-sm px-5 tracking-wide font-medium text-center italic">
                                        {leader?.description}
                                    </blockquote>

                                    <Link
                                        to={`/admin/leaders/${leader._id}/edit`}
                                        className="bg-transparent px-8 py-1 border-dodge-blue border-2 text-dodge-blue hover:text-white hover:bg-dodge-blue mt-4 rounded-full  items-center justify-center"
                                    >
                                        Update
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="bg-white p-6 mt-3">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            Settings
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                    <button
                        onClick={() => setDeleteSccModalOpen(true)}
                        className="border hover:bg-red-300 hover:text-white rounded-md border-red-300 text-red-900 py-2 px-8 text-sm"
                    >
                        Delete Scc Group
                    </button>
                </div>
            </div>

            <NewSccLeaderModal
                currentScc={currentScc}
                isOpen={addSccLeaderModalOpen}
                closeModal={() => setAddSccLeaderModalOpen(false)}
            />

            <ConfirmDeleteModal
                isOpen={deleteSccModalOpen}
                closeModal={() => {
                    setDeleteSccModalOpen(false);
                }}
                loading={deletingScc}
                message={`Please Confirm Deleting SCC : {${scc.name}}. This will erase all data about the SCC`}
                actionMethod={handleDeleteScc}
            />
        </div>
    );
};

export default SccPage;
