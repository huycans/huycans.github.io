import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="My logo" />
      </Link>
      <header>
        <h2>Huey Vuong</h2>
        <p><a href="mailto:h.tvuong07@gmail.com">h.tvuong07@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Huey Vuong. Software Engineer. React Developer. </p>
      <p>Experienced Software Developer with 5+ years of experience, mainly on frontend development. Familiar with all aspects of Software Development Life Cycle phases and agile project management.</p>
      <p>Technology stack: HTML5, CSS, JS ES6, React, Redux, React Hooks, React Router, SCSS, Typescript, Babel, Webpack, Jquery, Jest, Enzyme, NodeJS, Express, MongoDB, SQL, Git, Restful services, JSON, Agile Scrum</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Huey Vuong</p>
    </section>
  </section>
);

export default SideBar;
