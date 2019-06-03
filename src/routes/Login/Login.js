import React, { Component } from "react";
import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";

class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  };

  render() {
    return (
      <div className="form-container">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}
export default Login;
