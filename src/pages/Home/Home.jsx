import { useEffect } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Skills from "../../components/Skills/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <HomeBanner />
      <AboutMe />
      <Skills />
    </main>
  )
}

export default Home;