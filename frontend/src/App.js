import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              aboutMeRef={aboutMeRef}
              projectsRef={projectsRef}
              skillsRef={skillsRef}
              contactRef={contactRef}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          }
          exact
        />
        s
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
