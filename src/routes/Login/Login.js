import React, { Component } from "react";
import "./Login.css";
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
class Login extends Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { username, password } = e.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
        console.log('here')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }



  render() {
    const {error} = this.state
    return (
      <div className="form-container">
        <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">
        {error && <p className='error'>{error}</p>}
        </div>
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
      </div>
    );

  }
}
export default Login;
