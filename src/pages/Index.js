import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Huy Vuong's personal website. Professional software developer with 5+ years of experience."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About this site</Link>
          </h2>
          <p>Huy Vuong&apos;s personal website.</p>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. Please feel free to read more{" "}
        <Link to="/about">about me</Link>, or you can check out my{" "}
        <Link to="/resume">resume</Link>, or <Link to="/contact">contact</Link>{" "}
        me.
      </p>
    </article>
  </Main>
);

export default Index;
