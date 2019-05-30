import React, { Component, Fragment } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import ProjectContext from "../../Context/ProjectContext";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static ContextType = ProjectContext;

  state = { error: null };

  handleCurrentUser(username) {
    console.log(username);
    console.log(this.context);
    this.context.setCurrentUser(username);
    console.log(this.context.currentUser);
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        this.handleCurrentUser(username.value);
      })
      .then(res => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <Fragment>
        <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <div className="form-section">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="knitpearl77"
              // onChange={this.context.handleUsernameChange}
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
      </Fragment>
    );
  }
}
export default LoginForm;
