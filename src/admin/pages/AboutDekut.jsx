import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createAboutAction, fetchAboutAction } from "../../redux/actions/about";
import QuillEditor from "../components/common/QuillEditor";

import ReactHtmlParser from "react-html-parser";
import { FaSpinner } from "react-icons/fa";

const AboutDekut = () => {
    const { about } = useSelector((state) => state.aboutState);

    const [state, setState] = useState({
        story: "",
        mission: "",
    });
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSaveAbout = async (data) => {
        setLoading(true);
        const res = await dispatch(createAboutAction(state, about?._id));

        if (!res.success) {
            toast.error(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        setLoading(false)

        toast.success("About Updated successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    useEffect(() => {
        if (about?._id) {
            setState({
                mission: about?.mission,
                story: ReactHtmlParser(about?.story).toString(),
            });
        }
    }, [about]);

    useEffect(() => {
        dispatch(fetchAboutAction());
    }, [dispatch]);

    return (
        <div className="px-2 sm:px-0">
            <div className="max-w-3xl mx-auto _shadow rounded-md border-2">
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-3xl font-bold uppercase opacity-50 tracking-widest font-mono">
                            About Dekut
                        </h2>
                    </div>
                    <div className="w-full h-[2px] bg-gray-500 opacity-25 my-3" />

                    <div className="my-5">
                        <h2>Our Mission</h2>

                        <textarea
                            value={state.mission}
                            onChange={(e) =>
                                setState((prev) => ({
                                    ...prev,
                                    mission: e.target.value,
                                }))
                            }
                            rows="4"
                            className="mt-2 w-full"
                        ></textarea>
                    </div>

                    <div className="my-5">
                        <h2 className="mb-2">Our Story</h2>
                        <QuillEditor
                            value={state.story}
                            handleChange={(value) =>
                                setState((prev) => ({
                                    ...prev,
                                    story: value,
                                }))
                            }
                            placeholder="Start typing dekutcc story here"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleSaveAbout}
                            disabled={loading}
                            className="disabled:opacity-70 disabled:cursor-not-allowed border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                "Save"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDekut;
