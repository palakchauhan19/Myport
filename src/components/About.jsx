import React from "react";
import "./About.css";

const About = ({ darkMode }) => {
  return (
    <section className="about-section">
      <h2 className="section-title animated-heading">About Me</h2>
      <h3 className="who-am-i">Who Am I?</h3>

      <p className={darkMode ? "dark-text" : "light-text"}>
        Hello, I'm <strong>Palak Chauhan</strong>, a passionate and driven Full Stack Web Developer. I specialize in building dynamic, scalable, and user-friendly applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
        <br />
        From crafting responsive frontends to developing robust backends, I’m dedicated to delivering complete web solutions that solve real-world problems and create meaningful impact.
      </p>
    </section>
  );
};

export default About;
