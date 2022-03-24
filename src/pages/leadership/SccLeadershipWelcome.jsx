import { Link } from "react-router-dom";

const sccs = [
    { title: "St Angelus", key: "stangelus", subtitle: "the dancers" },
    { title: "St Peters", key: "stpeters", subtitle: "the dancers" },
    { title: "St Joseph", key: "stangelus", subtitle: "the dancers" },
    { title: "St Gabriel", key: "stgabriel", subtitle: "the dancers" },
    { title: "St Paul Gents", key: "stpaul", subtitle: "the dancers" },
    { title: "St Catherine Ladies", key: "stcatherine", subtitle: "the dancers" },
];

export default function SccLeadershipWelcome() {
    return (
        <div className="container">
            <div className="w-full px-2 py-16 sm:px-0">
                <h3 className="mt-6 text-center text-dodge-blue text-3xl font-bold uppercase">
                    Our SCC Leaderships
                </h3>
                <p className="font-md text-center mt-4">
                    Please select Scc from list below
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-6 gap-5">
                    {sccs.map(({ key, title, subtitle }) => (
                        <Link
                            to={`/leadership/scc/${key}`}
                            key={key}
                            className="
                          bg-white py-4 shadow-md text-center  hover:-translate-y-1
                            hover:bg-dodge-blue hover:text-white rounded-md sm:py-6 
                            transition-all duration-150 ease-in group
                        "
                        >
                            <h2 className="text-md font-bold text-dodge-blue group-hover:text-white">{title}</h2>
                            <p className="text-sm italic mt-2">{subtitle}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
