import { Component } from "react";
import { Link } from "react-router-dom";
//import Cookies from "js-cookie";
import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
    role: "STUDENT",
  };

  onChangeRole = (event) => {
    this.setState({ role: event.target.value });
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password, role } = this.state;
    const userDetails = { username, password, role };
    const url = "http://localhost:3003/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg, role } = this.state;
    //const jwtToken = Cookies.get("jwt_token");
    // if (jwtToken !== undefined) {
    //   return <Navigate to="/" />;
    // }

    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <h1 className="heading">College Directory Application</h1>
        <div className="form-style">
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={this.onChangeRole}
              className="username-input-field-reg drop-down"
            >
              <option value="STUDENT" className="drop-down">
                Student
              </option>
              <option value="FACULTY_MEMBER" className="drop-down">
                Faculty Member
              </option>
              <option value="ADMINISTRATOR" className="drop-down">
                Administrator
              </option>
            </select>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <Link to="/register" className="register-style-text">
            Sign Up
          </Link>
        </div>
      </form>
    );
  }
}

export default LoginForm;
