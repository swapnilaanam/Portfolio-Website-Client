/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ShineBorder from "../Shared/MagicUi/ShineBorder";
import { useEffect } from "react";
import Aos from "aos";

const Project = ({ image, name, desc, feature1, feature2, feature3, techs, liveLink, clientLink, serverLink }) => {

    useEffect(() => {
        Aos.init();
    });
    return (
        <div className="w-full lg:w-[900px] bg-gray-200 border border-white p-2 lg:p-5 rounded-sm shadow-xl shadow-gray-300" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="800">
            <div className={`mx-auto w-full lg:w-[800px] h-[341px] border project relative shadow-lg rounded-sm`} style={{ backgroundImage: `url(${image})` }}>
                {/* <BorderBeam size={700} duration={20} delay={9} /> */}
            </div>
            <div className="px-2 mt-12 text-black">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-7 lg:gap-0">
                    <h2 className="text-3xl font-semibold">
                        {name}
                    </h2>
                    <div className="mt-0.5 flex flex-col md:flex-row justify-center items-center gap-1 lg:gap-5">
                        <Link to={liveLink} target="_blank">
                            <ShineBorder
                                className="hidden lg:block text-white text-center text-sm font-semibold capitalize bg-green-600 px-7 py-2"
                                color={["white", "#22C55E"]}
                            >
                                Live Website
                            </ShineBorder>
                            <button
                                className="lg:hidden text-white text-center text-sm font-semibold capitalize bg-green-600 px-7 py-2"
                            >
                                Live Website
                            </button>
                        </Link>
                        <Link to={clientLink} target="_blank">
                            <ShineBorder
                                className="hidden lg:block text-black text-center text-sm font-semibold capitalize bg-yellow-400 px-7 py-2"
                                color={["white", "#FCD34D"]}
                            >
                                Client Side Code
                            </ShineBorder>
                            <button
                                className="lg:hidden text-black text-center text-sm font-semibold capitalize bg-yellow-400 px-7 py-2"
                            >
                                Client Side Code
                            </button>
                        </Link>
                        <Link to={serverLink} target="_blank">
                            <ShineBorder
                                className="hidden lg:block text-white text-center text-sm font-semibold capitalize bg-red-600 px-7 py-2"
                                color={["white", "#DC2626"]}
                            >
                                Server Side Code
                            </ShineBorder>
                            <button
                                className="lg:hidden text-white text-center text-sm font-semibold capitalize bg-red-600 px-7 py-2"
                            >
                                Server Side Code
                            </button>
                        </Link>
                    </div>
                </div>
                <p className="px-2 lg:px-1 mt-10 text-justify text-lg font-medium leading-6">
                    {desc}
                </p>
                <ul className="px-10 lg:px-12 mt-7 text-justify text-lg font-medium list-disc space-y-4">
                    <li>
                        {feature1}
                    </li>
                    <li>
                        {feature2}
                    </li>
                    <li>
                        {feature3}
                    </li>
                </ul>
            </div>
            <div className="mt-12 mb-3 flex flex-wrap justify-center items-center gap-4 lg:gap-3">
                {
                    techs?.map((tech, index) => {
                        return (
                            <div key={index + 1} className="w-fit bg-black text-center text-white text-base px-7 py-2 rounded">
                                {tech}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Project;