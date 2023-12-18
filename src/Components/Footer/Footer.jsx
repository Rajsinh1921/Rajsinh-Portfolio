import React from "react";
import "./footer.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="" className="footer_logo">
        EGATOp
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/rajsinhchauhan/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rajsinh1921">
          <FaGithub />
        </a>
        <a href="mailto:rajsinh.chauhan15@gmail.com">
          <MdEmail />{" "}
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; RajsinhChauhan. All rights reserved. </small>
      </div>
    </footer>
  );
}

export default Footer;
