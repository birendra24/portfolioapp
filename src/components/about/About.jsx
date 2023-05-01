import React from "react";
import "./about.css";
import aboutimg from "../../assets/aboutimg.jpg";
import { FaAward } from "react-icons/fa";
//import { CiUser } from "react-icons/ci";
import { BsFolder } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={aboutimg} alt="About-image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 Years Working</small>
            </article>

            <article className="about_card">
              <BsFolder className="about_icon" />
              <h5>Projects</h5>
              <small>5 Projects Completed</small>
            </article>
          </div>

          <p>
            My name is Birendra Kshetri. I would like to work as frontend
            develper using react. My carrier objective is to become a full stack
            developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
