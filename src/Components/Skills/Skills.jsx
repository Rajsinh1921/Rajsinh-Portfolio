import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
  return (
    <section id="skills">
      <h5>What skills I have </h5>
      <h2>My Experiance</h2>

      <div className="container skills_container ">
        <div className="skills_frontend">
          <h3>Frontend Developer</h3>
          <div className="skills_content">
            <article className="skills_details">
              <h4>HTML</h4>
              <small className="text-light">Experianced</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>CSS</h4>
              <small className="text-light">Skills</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Javascript</h4>
              <small className="text-light">Skills</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Bootstrap</h4>
              <small className="text-light">Skills</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Tailwind</h4>
              <small className="text-light">Skills</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Scss</h4>
              <small className="text-light">Skills</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Scss</h4>
              <small className="text-light">Skills</small>
            </article>
          </div>
        </div>
        <div className="skills_backend">
          <h3>Backend Developer</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Node.js</h4>
              <small className="text-light">ex</small>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <h4>Appwrite</h4>
              <small className="text-light">Skills</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
