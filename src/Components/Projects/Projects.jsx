import React from "react";
import "./Projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "blogging Website",
    github: "https://github.com/Rajsinh1921/React-Blogging-Website",
    demo: "https://golden-truffle-98b871.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "blogging Website",
    github: "https://github.com/Rajsinh1921/React-Blogging-Website",
    demo: "https://golden-truffle-98b871.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "blogging Website",
    github: "https://github.com/Rajsinh1921/React-Blogging-Website",
    demo: "https://golden-truffle-98b871.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "blogging Website",
    github: "https://github.com/Rajsinh1921/React-Blogging-Website",
    demo: "https://golden-truffle-98b871.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container projects_container">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="projects_item">
            <div className="projects_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="project_item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live-Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
