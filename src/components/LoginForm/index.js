// src/components/LoginForm/index.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, password, role };
    const url = "http://localhost:3003/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);


    const data = await response.json();
    console.log(data);
    if (response.ok) {
      Cookies.set("jwt_token", data.jwt_token, { expires: 1 });
      navigate("/");
    } else {
      setShowSubmitError(true);
      setErrorMsg(data.error_msg);
    }
  };

  return (
    <form className="form-container" onSubmit={submitForm}>
      <h1 className="heading">College Directory Application</h1>
      <div className="form-style">
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="input-container">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="username-input-field-reg drop-down"
          >
            <option value="STUDENT">Student</option>
            <option value="FACULTY_MEMBER">Faculty Member</option>
            <option value="ADMINISTRATOR">Administrator</option>
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
};

export default LoginForm;
