import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { GrDribbble } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://linkedin.com/in/birendra-kshetri-2982a4189"
        target="_blank"
      >
        <ImLinkedin />
      </a>
      <a href="https://github.com/birendra24" target="_blank">
        <FiGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <GrDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
