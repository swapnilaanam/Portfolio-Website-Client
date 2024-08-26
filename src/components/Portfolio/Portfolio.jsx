import GradualSpacing from "../Shared/MagicUi/GradualSpacing"
import Project from "../Project/Project";
import "./Portfolio.css";
import 'aos/dist/aos.css';
import { useQuery } from "react-query";
import axios from "axios";

const Portfolio = () => {
    const { data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            try {
                const response = await axios.get('https://portfolio-website-admin-n87o.onrender.com/api/projects-with-techs');

                if (response?.status === 200) {
                    return response?.data
                }
            } catch (err) {
                console.log(err);
            }
        }
    });

    return (
        <section className="px-4 md:px-10 xl:px-16 pt-40 bg-black overflow-hidden" id="portfolio">
            <h2 className="text-center">
                <GradualSpacing
                    className="text-center text-5xl font-bold tracking-[-0.01em] text-white"
                    text="Portfolio"
                />
            </h2>
            <div className="pt-28 flex flex-col justify-center items-center space-y-28">
                {
                    projects?.map((project) => {
                        return (
                            <Project
                                key={project?.project_id}
                                image={project?.project_img}
                                name={project?.project_name}
                                desc={project?.project_desc}
                                feature1={project?.project_feature_1}
                                feature2={project?.project_feature_2}
                                feature3={project?.project_feature_3}
                                techs={project?.techs}
                                liveLink={project?.live_link}
                                clientLink={project?.client_link}
                                serverLink={project?.client_link}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;