/* eslint-disable react/prop-types */
import Lottie from 'lottie-react';
import DevAnimation from '../../assets/animation/developer.json';
import MouseAnimation from '../../assets/animation/mouse.json';
import Particles from "../Shared/MagicUi/Particles";
import { Link } from 'react-router-dom';
import ShineBorder from '../Shared/MagicUi/ShineBorder';
import myResume from '../../assets/pdf/Resume Of MD. Ashraf-Ul-Aanam Swapnil V2.pdf'
import { Typewriter } from 'react-simple-typewriter';

const HomeBanner = ({ viewResumeLink }) => {
    
    return (
        <section className="pt-24 bg-black w-full min-h-[750px]">
            <div className="relative z-10 px-4 md:px-8 xl:px-16 flex flex-col xl:flex-row justify-between items-center gap-16 lg:gap-24">
                <div className="h-full w-full xl:w-[55%]">
                    <div className="pt-7 xl:pt-0 flex flex-col xl:flex-row items-center gap-2 md:gap-4 xl:gap-0 text-[23px] md:text-4xl xl:text-[26px] desktop_sm:text-3xl font-bold text-green-500 tracking-wider h-36 md:h-44 xl:h-9">
                        <h2 className="text-2xl text-white md:text-4xl xl:text-[26px] desktop_sm:text-3xl font-bold mr-4">Hey, I am </h2>
                        <Typewriter
                            words={["MD. Ashraf-Ul-Aanam Swapnil", "A Full Stack Web Developer", "A React Developer", "A MERN Stack Developer"]}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    <p className="mt-7 mr-7 text-white md:text-xl xl:text-base text-center xl:text-justify font-medium leading-loose md:leading-loose xl:leading-loose tracking-wider">
                        I Create Modern Web Application Using MERN Stack. Crafting Beautiful, Scalable And Responsive Websites Using React For Me Is As Natural As Shooting Spider Web For Spider-Man Is! I Guess, Playing With Web Is Favorite For Both Us!
                    </p>
                    <div className="mt-14 flex flex-col md:flex-row justify-center xl:justify-normal items-center gap-12">
                        <Link target="_blank" to={viewResumeLink} className="cursor-pointer">
                            <ShineBorder
                                className="text-white text-center text-base md:text-xl xl:text-base font-bold capitalize bg-green-600 px-12 py-4"
                                color={["white", "#22C55E"]}
                            >
                                View Resume
                            </ShineBorder>
                            {/* <button
                                className="lg:hidden text-white text-center text-base md:text-xl xl:text-base font-bold capitalize bg-green-600 px-12 py-4"
                                
                            >
                                View Resume
                            </button> */}
                        </Link>
                        <a target="_blank" href={myResume} download className="cursor-pointer">
                            <ShineBorder
                                className="text-white text-center text-base md:text-xl xl:text-base font-bold capitalize bg-red-700 px-12 py-4"
                                color={["white", "#DC2626"]}
                            >
                                Download Resume
                            </ShineBorder>
                            {/* <button
                                className="lg:hidden text-white text-center text-base md:text-xl xl:text-base font-bold capitalize bg-red-700 px-12 py-4"
                            >
                                Download Resume
                            </button> */}
                        </a>
                    </div>
                </div>
                <div className="h-full w-full xl:w-1/2 mt-6">
                    <Lottie animationData={DevAnimation} className="h-full" />
                </div>
            </div>
            <div className="w-full relative -bottom-12 xl:bottom-10 flex justify-center text-center">
                <Lottie animationData={MouseAnimation} className="h-full" />
            </div>
            <Particles
                className="absolute inset-0 h-[1200px] md:h-[1400px] lg:h-[1600px] xl:h-full"
                quantity={400}
                ease={80}
                color="#ffffff"
                refresh
            />
        </section >
    )
}

export default HomeBanner;