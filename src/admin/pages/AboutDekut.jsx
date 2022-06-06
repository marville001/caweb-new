import { useState } from "react";
import QuillEditor from "../components/common/QuillEditor";

const AboutDekut = () => {
    const [state, setState] = useState({
        story: "",
        mission: "",
    });

    // console.log(state.story);

    return (
        <div className="px-2 sm:px-0">
            <div className="max-w-2xl mx-auto _shadow rounded-md border-2">
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
                            rows="3"
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
                            className="border-2 bg-dodge-blue text-white rounded-md mt-2 inline-block px-4 py-1 cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDekut;
