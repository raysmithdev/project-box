import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

function Navigation() {
  return (
    <nav role="navigation">
      <h1>
        <NavLink to="/" className="header link">
          Project Box
        </NavLink>
      </h1>
      <NavLink to="/login" className="link">Log In</NavLink>
    </nav>
  );
}

export default Navigation;