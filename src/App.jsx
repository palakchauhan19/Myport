import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About darkMode={darkMode} />
      </section>

      <section id="skills">
        <Skills darkMode={darkMode} />
      </section>

      <section id="projects">
        <Projects darkMode={darkMode} />
      </section>

      <section id="education">
        <Education darkMode={darkMode} />
      </section>

      <section id="contact">
        <Contact darkMode={darkMode} />
      </section>
    </div>
  );
}

export default App;
