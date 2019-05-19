import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="form-container">
      <form className="login-form">
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
export default Login;
