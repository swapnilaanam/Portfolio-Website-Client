import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import ContactMe from "../../components/ContactMe/ContactMe";
import { useQuery } from "react-query";
import axios from "axios";

const Home = () => {
  const { data: personalInfo = [] } = useQuery({
    queryKey: ['personalInfo'],
    queryFn: async () => {
      try {
        const response = await axios.get('https://portfolio-website-admin-n87o.onrender.com/api/personal-info');

        if (response?.status === 200) {
          // console.log(response?.data[0]);
          return response?.data[0];
        }
      } catch (err) {
        console.log(err);
      }
    }
  });
  
  return (
    <main>
      <HomeBanner viewResumeLink={personalInfo?.view_resume_link} />
      <AboutMe phone={personalInfo?.phone} mail={personalInfo?.mail} linkedInLink={personalInfo?.linkedin_link} gitHubLink={personalInfo?.github_link} />
      <Skills />
      <Portfolio />
      <ContactMe />
    </main>
  )
}

export default Home;