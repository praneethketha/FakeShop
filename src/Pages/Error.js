import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main>
      <div className="section_center errorPage">
        <h1>404</h1>
        <h2>Oops! it's a dead end</h2>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </main>
  );
};

export default Error;
