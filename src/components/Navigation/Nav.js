import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Navigation() {
  return (
    <nav role="navigation">
      <h1>
        <NavLink to="/" className="header link">
          Project Box
        </NavLink>
      </h1>
      <NavLink to="/home" className="link">Demo</NavLink>
      <NavLink to="/new" className="link">+Project</NavLink>
      <NavLink to="/login" className="link">Log In</NavLink>
    </nav>
  );
}

export default Navigation;