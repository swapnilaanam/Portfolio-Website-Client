import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <AboutMe />
      <Skills />
      <Portfolio />
    </main>
  )
}

export default Home;