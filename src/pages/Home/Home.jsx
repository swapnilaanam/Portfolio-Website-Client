import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import ContactMe from "../../components/ContactMe/ContactMe";
// import { useQuery } from "react-query";
// import axios from "axios";
import { useEffect, useState } from "react";
import personalInfoData from './../../assets/json/personalInfo.json';

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    setPersonalInfo(personalInfoData);
  }, []);

  // const { data: personalInfo = [] } = useQuery({
  //   queryKey: ['personalInfo'],
  //   queryFn: async () => {
  //     try {
  //       const response = await axios.get('https://admin.swapnilaanam.xyz/api/personal-info');

  //       if (response?.status === 200) {
  //         // console.log(response?.data[0]);
  //         return response?.data[0];
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // });

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