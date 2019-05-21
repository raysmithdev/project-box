import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = e.target
    const { location, history } = this.props
    const destination = (location.state || {})
    .from || '/'
    history.push(destination)
  }

  render() {
    return (
      <div className="form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="form-section">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="knitpearl77"
              required
            />
          </div>
          <div className="form-section">
            <label for="password">Password</label>
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
