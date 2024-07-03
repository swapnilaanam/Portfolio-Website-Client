/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import ShineBorder from "../Shared/MagicUi/ShineBorder"
import { BorderBeam } from "../Shared/MagicUi/BorderBeam"
import { useEffect } from "react"
import Aos from "aos"

const Project = ({ imageNumber, name, desc, features, tech, liveLink, clientLink, serverLink }) => {

    useEffect(() => {
        Aos.init();
    });
    return (
        <div className="w-[900px] bg-gray-200 border border-white p-5 rounded-sm shadow-xl shadow-gray-300" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="800">
            <div className={`mx-auto w-[800px] h-[341px] border project project-${imageNumber} relative shadow-lg rounded-sm`}>
                <BorderBeam size={700} duration={20} delay={9} />
            </div>
            <div className="px-2 mt-12 text-black">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold">
                        {name}
                    </h2>
                    <div className="mt-0.5 flex justify-center items-center gap-5">
                        <Link to={liveLink} target="_blank">
                            <ShineBorder
                                className="text-white text-center text-sm font-semibold capitalize bg-green-600 px-7 py-2"
                                color={["white", "#22C55E"]}
                            >
                                Live Website
                            </ShineBorder>
                        </Link>
                        <Link to={clientLink} target="_blank">
                            <ShineBorder
                                className="text-black text-center font-bold capitalize bg-yellow-400 px-7 py-2"
                                color={["white", "#FCD34D"]}
                            >
                                Client Side Code
                            </ShineBorder>
                        </Link>
                        <Link to={serverLink} target="_blank">
                            <ShineBorder
                                className="text-white text-center font-bold capitalize bg-red-600 px-7 py-2"
                                color={["white", "#DC2626"]}
                            >
                                Server Side Code
                            </ShineBorder>
                        </Link>
                    </div>
                </div>
                <p className="px-1 mt-10 text-justify text-lg font-medium leading-6">
                    {desc}
                </p>
                <ul className="px-12 mt-7 text-justify text-lg font-medium list-disc space-y-4">
                    {
                        features?.map((feature, index) => {
                            return (
                                <li key={index + 1}>
                                    {feature}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="mt-12 mb-3 flex flex-wrap justify-center items-center gap-3">
                {
                    tech?.map((name, index) => {
                        return (
                            <div key={index + 1} className="w-fit bg-black text-center text-white text-base px-7 py-2 rounded">
                                {name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Project;