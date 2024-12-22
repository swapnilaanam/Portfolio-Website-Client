import { useEffect, useState } from "react";

import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import ContactMe from "../../components/ContactMe/ContactMe";

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/personalInfo.json');

        if(response?.status === 200) {
          const personalInfoData = await response.json();
          setPersonalInfo(personalInfoData);
        }
      } catch(err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <HomeBanner viewResumeLink={personalInfo?.viewResumeLink} />
      <AboutMe phone={personalInfo?.phone} mail={personalInfo?.mail} linkedInLink={personalInfo?.linkedInLink} gitHubLink={personalInfo?.gitHubLink} />
      <Skills />
      <Portfolio />
      <ContactMe />
    </main>
  )
}

export default Home;