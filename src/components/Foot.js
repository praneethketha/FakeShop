import React from "react";
import "./Foot.css";
import { Link } from "react-router-dom";
const Foot = () => {
  return (
    <footer className="footer_container">
      <h5>
        &copy; 2021 <Link to="/">FakeShop</Link>
      </h5>
      <h5>All rights reserved.</h5>
    </footer>
  );
};

export default Foot;
