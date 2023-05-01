import React from "react";
import "./portfolio.css";

import todoimg from "../../assets/todoimg.jpg";
import weatherimg from "../../assets/weatherimg.jpg";
import portfolioimg from "../../assets/portfolioimg.jpg";
import gymimg from "../../assets/gymimg.jpg";
import restaurantimg from "../../assets/restaurantimg.jpg";

const data = [
  {
    id: 1,
    image: todoimg,
    title: "Todo App",
    github: "https://github.com/birendra24/todo-app",
    demo: "https://todo-birendra.netlify.app",
  },

  {
    id: 2,
    image: weatherimg,
    title: "Weather App",
    github: "https://github.com/birendra24/weather-app",
    demo: "https://weather-birendra.netlify.app",
  },

  {
    id: 3,
    image: portfolioimg,
    title: "Portfolio App",
    github: "https://github.com/birendra24/portfolioapp",
    demo: "https://birendra-portfolio.netlify.app",
  },

  {
    id: 4,
    image: gymimg,
    title: "Gym App",
    github: "https://github.com/birendra24/Birendra-Gym-App.git",
    demo: "https://birendra24.github.io/Birendra-Gym-App/",
  },

  {
    id: 5,
    image: restaurantimg,
    title: "Restaurant App",
    github: "https://github.com/birendra24/Restaurant-Website.git",
    demo: "https://restaurant-app-birendra.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="services">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
