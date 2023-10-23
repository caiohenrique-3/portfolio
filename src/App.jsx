import { useState } from "react";

// components
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ReturnToTopArrow from "./components/ReturnToTopArrow";

// css
import "./styles/index.css";
import "./styles/fonts.css";

// data
import projectsData from "./data/projectsData";

function App() {
  const [language, setLanguage] = useState("en");
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const projects = projectsData.map((project) => {
    return (
      <Projects
        key={project.id}
        project={project}
        language={language}
      />
    );
  });

  return (
    <>
      <Header language={language} changeLanguage={changeLanguage} />
      <Introduction language={language} />
      <About language={language} />

      <section id="projects">
        <h2>Projects</h2>
        {projects}
      </section>

      <Skills language={language} />
      <Contact language={language} />
      <ReturnToTopArrow />
    </>
  );
}

export default App;
