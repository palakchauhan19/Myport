import React from "react";
import "./Projects.css";

const Projects = ({ darkMode }) => {
  return (
    <section className={`projects-section ${darkMode ? "dark" : ""}`}>
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-container">

        <div className="project-box">
          <h3 className="project-title">1. Educational Website</h3>
          <p className="project-desc">Built with HTML, CSS, JavaScript, and React.</p>
          <div className="project-links">
            <a href="https://educationbypalak.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/palakchauhan19/Edusity" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-box">
          <h3 className="project-title">2. LinkedIn Clone</h3>
          <p className="project-desc">Built with HTML, CSS, and JavaScript.</p>
          <div className="project-links">
            <a href="https://palaklinked19.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/palakchauhan19/E-commerce" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
