import React from "react";
import "./Projects.css";
import IMG1 from "../../assets/portfolio1.jpeg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/protfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "React Blogging Website",
    github: "https://github.com/Rajsinh1921/React-Blogging-Website",
    demo: "https://react-blogging-website.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React Myntra",
    github: "https://github.com/Rajsinh1921/React-Myntra-Front-end",
    demo: "https://harmonious-zuccutto-51645c.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "E commerce HTML",
    github: "https://github.com/Rajsinh1921/E-commerce-HTML",
    demo: "https://snazzy-naiad-27e269.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Todo With ContextAPI",
    github: "https://github.com/Rajsinh1921/Todo-With-ContextAPI",
    demo: "https://stellular-pony-4ab87e.netlify.app",
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

            <div className="project_item-cta">
              <h3>{title}</h3>
              <a href={github} className="btn projectbtn" target="_blank">
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
