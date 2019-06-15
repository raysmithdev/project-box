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

 

  render() {
    return (
      <div className="form-container">
        <LoginForm />
      </div>
    );
  }
}
export default Login;
