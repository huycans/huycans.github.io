import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="My logo" />
      </Link>
      <header>
        <h2>Huy Vuong</h2>
        <p>
          <a href="mailto:th.vuong02@gmail.com">th.vuong02@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Huy Vuong. Software Engineer. React Developer. </p>
      <p>
        Software Engineer with 3 years of experience with a specialization in
        frontend development. Familiar with all aspects of Software Development
        Life Cycle and agile developement.
      </p>
      <p>
        Technology stack: HTML5, CSS, JS ES6, React, Redux, React Hooks, React
        Router, SCSS, Typescript, Babel, Webpack, Jquery, Jest, Enzyme, NodeJS,
        Express, MongoDB, SQL, Git, Restful services, JSON, Agile Scrum
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Huy Vuong</p>
    </section>
  </section>
);

export default SideBar;
