import React from 'react'
import GradualSpacing from '../Shared/MagicUi/GradualSpacing'
import { SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiMongoose, SiNextdotjs, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaBootstrap, FaCss3Alt, FaElementor, FaGitAlt, FaHtml5, FaNode, FaReact, FaWordpress } from 'react-icons/fa6'
import { RiJavascriptFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import Meteors from '../Shared/MagicUi/Meteors'

const Skills = () => {
    return (
        <section className="px-16 pt-40 bg-black overflow-hidden" id="skills">
            <h2 className="text-center">
                <GradualSpacing
                    className="text-center text-5xl font-bold tracking-[-0.01em] text-white"
                    text="Skills"
                />
            </h2>
            <div className="pt-28 flex justify-center items-center gap-x-10 gap-y-14 flex-wrap relative">
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <SiNextdotjs className="text-5xl font-semibold" />
                    <span className="text-3xl font-semibold">Next JS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <FaReact className="text-5xl text-sky-600 font-semibold" />
                    <span className="text-3xl font-semibold">React JS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <RiJavascriptFill className="text-5xl text-yellow-500 font-semibold" />
                    <span className="text-3xl font-semibold">JavaScript</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <BiLogoTypescript className="text-5xl text-sky-600 font-semibold" />
                    <span className="text-3xl font-semibold">TypeScript</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <FaNode className="text-5xl text-green-600 font-semibold" />
                    <span className="text-3xl font-semibold">Node JS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <SiExpress className="text-5xl font-semibold" />
                    <span className="text-3xl font-semibold">Express JS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <SiMongodb className="text-5xl text-green-600 font-semibold" />
                    <span className="text-3xl font-semibold">MongoDB</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <SiMongoose className="text-5xl text-red-700 font-semibold" />
                    <span className="text-3xl font-semibold">Mongoose</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <SiFirebase className="text-5xl text-yellow-500 font-semibold" />
                    <span className="text-3xl font-semibold">Firebase</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <SiJsonwebtokens className="text-5xl text-sky-500 font-semibold" />
                    <span className="text-3xl font-semibold">JWT</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <SiTailwindcss className="text-5xl text-sky-500 font-semibold" />
                    <span className="text-3xl font-semibold">Tailwind CSS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <FaBootstrap className="text-5xl text-purple-600 font-semibold" />
                    <span className="text-3xl font-semibold">Bootstrap</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <FaGitAlt className="text-5xl text-orange-600 font-semibold" />
                    <span className="text-3xl font-semibold">Git</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <FaHtml5 className="text-5xl text-orange-500 font-semibold" />
                    <span className="text-3xl font-semibold">HTML</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <FaCss3Alt className="text-5xl text-blue-600 font-semibold" />
                    <span className="text-3xl font-semibold">CSS</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <SiStripe className="text-5xl text-green-500 font-semibold" />
                    <span className="text-3xl font-semibold">Stripe API</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <FaWordpress className="text-5xl font-semibold" />
                    <span className="text-3xl font-semibold">Wordpress</span>
                </div>
                <div className="bg-white flex justify-center items-center gap-5 px-12 py-4 rounded-sm relative z-10" data-aos="flip-down" data-aos-easing="ease-in-out">
                    <FaElementor className="text-5xl font-semibold" />
                    <span className="text-3xl font-semibold">Elementor</span>
                </div>
                <Meteors number={50} className="h-full" />
            </div>
        </section>
    )
}

export default Skills