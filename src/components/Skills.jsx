import React from "react";
import "./Skills.css";

// Frontend Skills
const frontendSkills = [
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "React.js", icon: "devicon-react-original" },
];

// Backend & Tools Skills
const backendSkills = [
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Java (with DSA)", icon: "devicon-java-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
];

const Skills = ({ darkMode }) => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title animated-heading">My Skills</h2>

      {/* Frontend Section */}
      <h3 className="skills-subtitle">🧩 Frontend Skills</h3>
      <div className="skills-container">
        {frontendSkills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${darkMode ? "dark-skill" : ""}`}
          >
            <i className={`skill-icon ${skill.icon}`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Backend & Tools Section */}
      <h3 className="skills-subtitle">🛠️ Backend & Tools</h3>
      <div className="skills-container">
        {backendSkills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${darkMode ? "dark-skill" : ""}`}
          >
            <i className={`skill-icon ${skill.icon}`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
