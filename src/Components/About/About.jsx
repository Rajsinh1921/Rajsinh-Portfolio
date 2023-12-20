import React from "react";
import "./about.css";
import ME from "../../assets/me.jpeg";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <p>
            👋 "Hey, I'm Rajsinh Chauhan, a self-taught Frontend Developer
            currently learning Backend Development. I specialize in HTML, CSS,
            and JavaScript, enhancing designs with Bootstrap, Tailwind, and
            SCSS. On the backend, I manage data with MySQL and build robust
            applications using Express. Notable projects include a React
            Blogging Website with Appwrite integration and a simplified React
            Myntra clone e-commerce platform. From HTML/CSS E-commerce clones to
            Todo apps using Context API, I'm passionate about crafting impactful
            digital experiences. Let's build something extraordinary together!"
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
