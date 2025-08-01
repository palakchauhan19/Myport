// Home.js
import React from "react";
import "./Home.css";
import profilePic from "../assets/profile.jpg";
import resumePDF from '../assets/PalakChauhan_resume1.pdf';

function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-text">
          <h1>
            Hi, I'm{" "}
            <span className="highlight animated-name shiver">Palak Chauhan</span>
          </h1>
          <p>
            A passionate Full Stack Web Developer building modern, scalable, and responsive web applications using the MERN stack
          </p>
          <div className="home-buttons">
            <a href={resumePDF} download className="btn shiver">
              Download Resume
            </a>
            <a href="#contact" className="btn secondary shiver">Contact Me</a>
          </div>
        </div>

        <div className="home-image">
          <img src={profilePic} alt="Palak Chauhan" />
          <p className="animated-tagline">
            Turning ideas into real web experiences!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
