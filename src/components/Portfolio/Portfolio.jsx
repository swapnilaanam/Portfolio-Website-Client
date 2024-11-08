import GradualSpacing from "../Shared/MagicUi/GradualSpacing"
import Project from "../Project/Project";
import "./Portfolio.css";
import 'aos/dist/aos.css';
// import { useQuery } from "react-query";
// import axios from "axios";
import { useEffect, useState } from "react";
import projectsData from "./../../assets/json/projectsData.json";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    // const { data: projects = [] } = useQuery({
    //     queryKey: ['projects'],
    //     queryFn: async () => {
    //         try {
    //             const response = await axios.get('https://admin.swapnilaanam.xyz/api/projects-with-techs');

    //             if (response?.status === 200) {
    //                 console.log(response?.data);
    //                 return response?.data
    //             }
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    // });

    return (
        <section className="px-4 md:px-10 xl:px-16 pt-40 bg-black overflow-hidden" id="portfolio">
            <h2 className="text-center">
                <GradualSpacing
                    className="hidden lg:block text-center text-5xl font-bold tracking-[-0.01em] text-white"
                    text="Portfolio"
                />
                <span className="lg:hidden text-center text-5xl font-bold text-white">
                    Portfolio
                </span>
            </h2>
            <div className="pt-28 flex flex-col justify-center items-center space-y-28">
                {
                    projects?.map((project) => {
                        return (
                            <Project
                                key={project?._id}
                                image={project?.projectImg}
                                name={project?.projectName}
                                desc={project?.projectDesc}
                                feature1={project?.feature1}
                                feature2={project?.feature2}
                                feature3={project?.feature3}
                                techs={project?.techs}
                                liveLink={project?.liveLink}
                                clientLink={project?.clientLink}
                                serverLink={project?.serverLink}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;