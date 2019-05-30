import React, { Component } from "react";
import TokenService from "../../services/token-service";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Navigation extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <NavLink className="link" onClick={this.handleLogoutClick} to="/login">
        Logout
      </NavLink>
    );
  }

  renderLoginLink() {
    return (
      <NavLink to="/login" className="link">
        Log In
      </NavLink>
    );
  }
  render() {
    return (
      <nav role="navigation">
        <h1>
          <NavLink to="/" className="header link">
            Project Box
          </NavLink>
        </h1>
        <NavLink to="/home" className="link">
          Demo
        </NavLink>
        <NavLink to="/new" className="link">
          +Project
        </NavLink>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default Navigation;
