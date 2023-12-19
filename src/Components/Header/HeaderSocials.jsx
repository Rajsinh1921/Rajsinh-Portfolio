import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/rajsinhchauhan/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Rajsinh1921" target="_blank">
        <FaGithub />
      </a>
      <a href="mailto:rajsinh.chauhan15@gmail.com" target="_blank">
        <SiGmail />
      </a>
    </div>
  );
}

export default HeaderSocials;
