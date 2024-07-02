import GradualSpacing from '../Shared/MagicUi/GradualSpacing';
import { SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiMongoose, SiNextdotjs, SiStripe, SiTailwindcss } from 'react-icons/si';
import { FaBootstrap, FaCss3Alt, FaElementor, FaGitAlt, FaHtml5, FaNode, FaReact, FaWordpress } from 'react-icons/fa6';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import Meteors from '../Shared/MagicUi/Meteors';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    useEffect(() => {
        Aos.init({ easing: "linear" });
    })

    return (
        <section className="px-16 pt-40 bg-black overflow-hidden" id="skills">
            <h2 className="text-center">
                <GradualSpacing
                    className="text-center text-5xl font-bold tracking-[-0.01em] text-white"
                    text="Skills"
                />
            </h2>
            <div className="pt-28 flex justify-center items-center gap-10 flex-wrap relative">
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <SiNextdotjs className="text-5xl" />
                    <span className="text-3xl font-semibold">Next JS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <FaReact className="text-5xl text-sky-600" />
                    <span className="text-3xl font-semibold">React JS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <RiJavascriptFill className="text-5xl text-yellow-500" />
                    <span className="text-3xl font-semibold">JavaScript</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <BiLogoTypescript className="text-5xl text-sky-600" />
                    <span className="text-3xl font-semibold">TypeScript</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <FaNode className="text-5xl text-green-600" />
                    <span className="text-3xl font-semibold">Node JS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <SiExpress className="text-5xl" />
                    <span className="text-3xl font-semibold">Express JS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <SiMongodb className="text-5xl text-green-600" />
                    <span className="text-3xl font-semibold">MongoDB</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <SiMongoose className="text-5xl text-red-700" />
                    <span className="text-3xl font-semibold">Mongoose</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <SiFirebase className="text-5xl text-yellow-500" />
                    <span className="text-3xl font-semibold">Firebase</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <SiJsonwebtokens className="text-5xl text-sky-500" />
                    <span className="text-3xl font-semibold">JWT</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <SiTailwindcss className="text-5xl text-sky-500" />
                    <span className="text-3xl font-semibold">Tailwind CSS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <FaBootstrap className="text-5xl text-purple-600" />
                    <span className="text-3xl font-semibold">Bootstrap</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <FaGitAlt className="text-5xl text-orange-600" />
                    <span className="text-3xl font-semibold">Git</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <SiStripe className="text-5xl text-green-500" />
                    <span className="text-3xl font-semibold">Stripe API</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <FaWordpress className="text-5xl" />
                    <span className="text-3xl font-semibold">Wordpress</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down">
                    <FaElementor className="text-5xl" />
                    <span className="text-3xl font-semibold">Elementor</span>
                </div>
                <Meteors number={50} className="h-full" />
            </div>
        </section>
    )
}

export default Skills;