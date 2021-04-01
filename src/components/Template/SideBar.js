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
        <h2>Huy Vuong</h2>
        <p><a href="mailto:huyvuong0096@gmail.com">huyvuong0096@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Huy Vuong. Software Engineer. Javascript Developer.
        Graduate student at George Mason University in Software Engineering since 2019. Formerly worked at <a href="https://rnd4u.com/">RND4U, Inc</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
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
