import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education-section">
      <h1 className="page-heading">My Education</h1>

      <h2 className="education-heading">Education</h2>

      {/* Row 1: B.Tech & 12th */}
      <div className="education-row multi-row">
        <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <div className="edu-content">
            <h3>B.Tech in Computer Science</h3>
            <p>Quantum University, Roorkee</p>
            <p>Year: 3rd</p>
            <p>CGPA: 7.7</p>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-icon">🏫</div>
          <div className="edu-content">
            <h3>12th Grade</h3>
            <p>G.T.B.I.C, Haridwar</p>
            <p>Percentage: 85%</p>
            <p>Year: 2022</p>
          </div>
        </div>
      </div>

      {/* Row 2: 10th */}
      <div className="education-row center-single">
        <div className="edu-card">
          <div className="edu-icon">🏫</div>
          <div className="edu-content">
            <h3>10th Grade</h3>
            <p>G.T.B.I.C, Haridwar</p>
            <p>Percentage: 82%</p>
            <p>Year: 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
