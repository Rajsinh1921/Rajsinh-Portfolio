import React, { useState } from "react";
import "./nav.css";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { RiFoldersFill } from "react-icons/ri";
function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoMdHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#skills"
        onClick={() => {
          setActiveNav("#skills");
        }}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FaTools />
      </a>
      <a
        href="#projects"
        onClick={() => {
          setActiveNav("#projects");
        }}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <RiFoldersFill />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiSolidMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
