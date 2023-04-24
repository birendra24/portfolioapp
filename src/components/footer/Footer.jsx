import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        BIRENDRA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/birendra.kshetri.1">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; BIRENDRA KSHETRI. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
