import Lottie from 'lottie-react';
import DevAnimation from '../../assets/animation/developer.json';
import MouseAnimation from '../../assets/animation/mouse.json';
import Particles from "../Shared/MagicUi/Particles";
import WordRotate from '../Shared/MagicUi/WordRotate';
import { Link } from 'react-router-dom';
import ShineBorder from '../Shared/MagicUi/ShineBorder';
import myResume from '../../assets/pdf/Resume Of MD. Ashraf-Ul-Aanam Swapnil.pdf'

const HomeBanner = () => {
    return (
        <section className="pt-24 bg-black w-full min-h-[750px]">
            <div className="relative z-10 px-4 xl:px-16 flex flex-col xl:flex-row justify-between items-center gap-16 lg:gap-24">
                <div className="h-full w-full xl:w-1/2">
                    <div className="pt-7 lg:pt-0 text-white flex flex-col lg:flex-row items-center gap-2 lg:gap-0 tracking-wider">
                        <h2 className="text-2xl lg:text-3xl font-bold mr-4">Hey, I am </h2>
                        <WordRotate
                            className="text-[23px] lg:text-3xl font-bold text-green-500 tracking-wider"
                            words={["MD. Ashraf-Ul-Aanam Swapnil", "A Full Stack Web Developer", "A React Developer", "A MERN Stack Developer"]}
                        />
                    </div>
                    <p className="mt-7 text-white text-center lg:text-justify font-medium leading-loose tracking-wider">
                        I Create Modern Web Application Using MERN Stack. Crafting Beautiful, Scalable And Responsive Websites Using React For Me Is As Natural As Shooting Spider Web For Spider-Man Is! I Guess, Playing With Web Is Favorite For Both Us!
                    </p>
                    <div className="mt-14 flex flex-col xl:flex-row items-center gap-12">
                        <Link target="_blank" to="https://drive.google.com/file/d/11_JIt90f3mM1_XKE4lUtSCXhearU1lbR/view?usp=drive_link" className="cursor-pointer">
                            <ShineBorder
                                className="text-white text-center font-bold capitalize bg-green-600 px-12 py-4"
                                color={["white", "#22C55E"]}
                            >
                                View Resume
                            </ShineBorder>
                        </Link>
                        <a target="_blank" href={myResume} download className="cursor-pointer">
                            <ShineBorder
                                className="text-white text-center font-bold capitalize bg-red-700 px-12 py-4"
                                color={["white", "#DC2626"]}
                            >
                                Download Resume
                            </ShineBorder>
                        </a>
                    </div>
                </div>
                <div className="h-full w-full xl:w-1/2 mt-6">
                    <Lottie animationData={DevAnimation} className="h-full" />
                </div>
            </div>
            <div className="w-full relative -bottom-8 lg:bottom-10 flex justify-center text-center">
                <Lottie animationData={MouseAnimation} className="h-full" />
            </div>
            <Particles
                className="absolute inset-0 h-[1200px] lg:h-full"
                quantity={400}
                ease={80}
                color="#ffffff"
                refresh
            />
        </section >
    )
}

export default HomeBanner;