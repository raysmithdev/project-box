import React, { Component, Fragment } from "react";
import TokenService from "../../services/token-service";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import ProjectContext from "../../Context/ProjectContext";

class Navigation extends Component {
  static contextType = ProjectContext;
  handleLogoutClick = () => {
    this.context.setCurrentUser("");
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <Fragment>
        <NavLink to="/new" className="link">
          +Project
        </NavLink>
        <NavLink className="link" onClick={this.handleLogoutClick} to="/login">
          Logout
        </NavLink>
      </Fragment>
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
        <NavLink to="/dashboard" className="link">
          Home
        </NavLink>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default Navigation;
