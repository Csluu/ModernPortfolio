import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const [selectedPage, setSelectedPage] = useState("About");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [aboutMeRef, aboutMeInView] = useInView({
    threshold: 0.5,
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.5,
  });
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.5,
  });
  const [contactRef, contactInView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (aboutMeInView) {
      setSelectedPage("About");
    } else if (projectsInView) {
      setSelectedPage("Projects");
    } else if (skillsInView) {
      setSelectedPage("Skills");
    } else if (contactInView) {
      setSelectedPage("Contact");
    }
  }, [aboutMeInView, projectsInView, skillsInView, contactInView]);

  return (
    <div className="App">
      <div className="fixed top-0 z-[-1] w-full h-full bg-linux saturate-50"></div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
