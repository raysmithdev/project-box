import React, { Component } from "react";
import "./Login.css";
import ProjectContext from "../../Context/ProjectContext";

class Login extends Component {

  static contextType = ProjectContext

  render() {
    return (
      <div className="form-container">
        <form className="login-form" onSubmit={e => this.context.handleLogin(e)}>
          <div className="form-section">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="knitpearl77"
              onChange={this.context.handleUsernameChange}
              required
            />
          </div>
          <div className="form-section">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="form-section">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );

  }
}
export default Login;
