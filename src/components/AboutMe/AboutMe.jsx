import { FaGithub, FaLinkedin, FaPhoneFlip } from "react-icons/fa6";
import { Dock, DockIcon } from "../Shared/MagicUi/Dock";
import GradualSpacing from "../Shared/MagicUi/GradualSpacing";
import { IoMdMail } from "react-icons/io";

import aboutImage from '../../assets/images/about.jpg';
import { BorderBeam } from "../Shared/MagicUi/BorderBeam";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AboutMe = ({ phone, mail, linkedInLink, gitHubLink }) => {
  return (
    <section className="px-4 md:px-10 xl:px-16 pt-48 lg:pt-28 bg-black overflow-hidden" id="about">
      <h2 className="text-center">
        <GradualSpacing
          className="hidden lg:block text-center text-5xl font-bold tracking-[-0.1em] text-white"
          text="About Me"
        />
        <span className="lg:hidden text-center text-5xl font-bold text-white">
          About Me
        </span>
      </h2>
      <div className="pt-28 flex flex-col xl:flex-row justify-center items-start gap-20 xl:gap-44 text-white">
        <div className="w-full xl:w-[45%]">
          <div className="bg-white p-7 md:p-10 lg:p-16 relative h-[300px] md:h-[500px] lg:h-[650px] xl:h-[450px]">
            <img src={aboutImage} alt="MD. Ashraf-Ul-Aanam Swapnil" className="border border-black -rotate-3 w-full h-full object-cover object-top" />
            <BorderBeam className="hidden lg:block" size={250} duration={12} delay={9} />
          </div>
        </div>
        <div className="w-full xl:w-3/5">
          <p className="text-lg md:text-2xl xl:text-lg font-semibold text-center xl:text-justify leading-loose md:leading-loose xl:leading-loose mt-7">
            I am MD. Ashraf-Ul-Aanam Swapnil, a graduate in Computer Science And Engineering from Metropolitan University, Bangladesh. I am a Full Stack Developer, having a learning experience over a year. My expertise span over technologies like Next JS, React JS, MongoDB, and Express JS. I also do have a passion for problem solving and competitive programming. I started my programming journey using C++ back in my university days.
          </p>
          <div>
            <Dock>
              <a href={`tel:${phone}`}>
                <DockIcon>
                  <FaPhoneFlip className="h-4 md:h-6 w-4 md:w-6" />
                </DockIcon>
              </a>
              <a href={`mailto:${mail}`}>
                <DockIcon>

                  <IoMdMail className="h-4 md:h-6 w-4 md:w-6" />
                </DockIcon>
              </a>
              <Link to={linkedInLink} target="_blank">
                <DockIcon>
                  <FaLinkedin className="h-4 md:h-6 w-4 md:w-6" />
                </DockIcon>
              </Link>
              <Link to={gitHubLink} target="_blank">
                <DockIcon>
                  <FaGithub className="h-4 md:h-6 w-4 md:w-6" />
                </DockIcon>
              </Link>
            </Dock>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;