import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import ContactMe from "../../components/ContactMe/ContactMe";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
    </main>
  )
}

export default Home;