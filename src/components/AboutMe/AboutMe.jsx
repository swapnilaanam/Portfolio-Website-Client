import { FaGithub, FaLinkedin, FaPhoneFlip } from "react-icons/fa6";
import { Dock, DockIcon } from "../Shared/MagicUi/Dock";
import GradualSpacing from "../Shared/MagicUi/GradualSpacing";
import { IoMdMail } from "react-icons/io";

import aboutImage from '../../assets/images/about.jpg';
import { BorderBeam } from "../Shared/MagicUi/BorderBeam";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="px-4 lg:px-16 pt-48 lg:pt-28 bg-black overflow-hidden" id="about">
      <h2 className="text-center">
        <GradualSpacing
          className="text-center text-5xl font-bold tracking-[-0.1em] text-white"
          text="About Me"
        />
      </h2>
      <div className="pt-28 flex flex-col lg:flex-row justify-center items-start gap-20 lg:gap-44 text-white">
        <div className="w-full lg:w-[45%]">
          <div className="bg-white p-7 lg:p-16 relative h-[300px] lg:h-[450px]">
            <img src={aboutImage} alt="MD. Ashraf-Ul-Aanam Swapnil" className="border border-black -rotate-3 w-full h-full object-cover object-top" />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <p className="text-lg font-semibold text-center lg:text-justify leading-loose mt-7">
            I am MD. Ashraf-Ul-Aanam Swapnil, a graduate in Computer Science And Engineering from Metropolitan University, Bangladesh. I am a Full Stack Developer, having a learning experience over a year. My expertise span over technologies like Next JS, React JS, MongoDB, and Express JS. I also do have a passion for problem solving and competitive programming. I started my programming journey using C++ back in my university days.
          </p>
          <div>
            <Dock>
              <DockIcon>
                <a href="tel:+8801685016531">
                  <FaPhoneFlip className="h-4 lg:h-6 w-4 lg:w-6" />
                </a>
              </DockIcon>
              <DockIcon>
                <a href="mailto:swapnilaanam211@gmail.com">
                  <IoMdMail className="h-4 lg:h-6 w-4 lg:w-6" />
                </a>
              </DockIcon>
              <DockIcon>
                <Link to="https://www.linkedin.com/in/md-ashraf-ul-aanam-swapnil" target="_blank">
                  <FaLinkedin className="h-4 lg:h-6 w-4 lg:w-6" />
                </Link>
              </DockIcon>
              <DockIcon>
                <Link to="https://github.com/swapnilaanam" target="_blank">
                  <FaGithub className="h-4 lg:h-6 w-4 lg:w-6" />
                </Link>
              </DockIcon>
            </Dock>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe