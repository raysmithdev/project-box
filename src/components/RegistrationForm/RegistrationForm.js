import AuthApiService from "../../services/auth-api-service";
import React, { Component } from "react";
import("./RegistrationForm.css");

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleRegistrationFormSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target;
    console.log(username.value, password.value)
    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
      .then(user => {
        username.value = "";
        password.value = "";
        this.props.onRegistrationSuccess(user);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <form
        className="signup-form"
        onSubmit={this.handleRegistrationFormSubmit}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            placeholder="knitpearl77"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
