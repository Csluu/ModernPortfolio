import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

import React from "react";

function Home({
  aboutMeRef,
  projectsRef,
  skillsRef,
  contactRef,
  selectedPage,
  setSelectedPage,
}) {
  return (
    <main>
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
    </main>
  );
}

export default Home;
