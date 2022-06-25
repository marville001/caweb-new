import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSccAction, getSccsAction } from "../redux/actions/admin/sccs";
import { fetchEventsAction } from "../redux/actions/events";

const ViewScc = () => {
    const { scc, isLoadingScc } = useSelector((state) => state.sccsState);

    const [gallery, setGallery] = useState([]);

    const { key } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        setGallery(scc?.gallery);
    }, [scc?.gallery]);

    useEffect(() => {
        dispatch(getSccAction(key));
        dispatch(getSccsAction());
        dispatch(fetchEventsAction({page: 1, pageSize: 10},));
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
        <div className="px-2 my-10 sm:px-0">
            <div className="max-w-4xl mx-auto">
                {scc.key ? (
                    <>
                        <div className="bg-white p-2 sm:p-6">
                            <h2 className="text-2xl text-center text-dodge-blue">
                                {scc.name}
                            </h2>

                            <div className="my-4 w-full overflow-hidden rounded-lg flex gap-3">
                                <img
                                    className="w-full rounded-lg h-44 sm:h-56 md:h-auto md:max-h-[400px] object-cover object-center cursor-pointer"
                                    src={scc.image}
                                    alt=""
                                />
                            </div>

                            <div className="w-full h-[1px] bg-gray-500 opacity-25 my-3" />

                            <h3 className="opacity-70">description</h3>
                            <div className="my-4 w-full text-sm">
                                <p>{scc.description}</p>
                            </div>
                        </div>

                        <div className="bg-white p-2 sm:p-6 mt-3">
                            <div className="flex items-center justify-between">
                                <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                                    Our Gallery
                                </h2>
                            </div>
                            <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4 gap-4">
                                {gallery?.map((image) => (
                                    <div key={image}>
                                        <img
                                            className="w-full h-40 sm:h-48 rounded-md"
                                            src={image}
                                            alt=""
                                        />
                                    </div>
                                ))}

                                {gallery?.length === 0 && (
                                    <div>
                                        <h4 className="opacity-50">
                                            No Image{" "}
                                        </h4>
                                    </div>
                                )}
                            </div>
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
        </div>
    );
};

export default ViewScc;
