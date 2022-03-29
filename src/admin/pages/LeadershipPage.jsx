import React from "react";
import { Tab } from "@headlessui/react";

const LeadershipPage = () => {
    return (
        <div className="px-2 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex flex-wrap">
                    {[
                      "Church Leadership",
                      "St Angelus",
                      "St Joseph",
                      "St Peters",
                      "St Johns",
                      "St Paul",
                      "St Catherine",
                      "St Gabriel",
                      "St Vitus",
                    ].map((title, i) => (
                        <Tab
                        key={i}
                            className={({ selected }) =>
                                `${
                                    selected
                                        ? "border-b-2 border-b-slate-900 bg-slate-900 text-white"
                                        : ""
                                } py-2 px-4`
                            }
                        >
                            <div className="font-medium">{title}</div>
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel>
                        <h4>Hey</h4>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default LeadershipPage;
