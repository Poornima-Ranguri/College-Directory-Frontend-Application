import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "Student",
    name: "",
    email: "",
    phone: "",
  });

  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [role, setRole] = useState("Student"); // Default role

  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      navigate("/login");
    }
  }, [isSubmitted, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const url = "http://localhost:3003/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    console.log(JSON.stringify(formData));
    const response = await fetch(url, options);

    const data = await response.text();

    if (response.ok) {
      onSubmitSuccess();
      setFormData({
        username: "",
        password: "",
        name: "",
        email: "",
        phone: "",
      });
      setErrorMsg("");
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  const renderInputField = (label, name, type = "text", placeholder) => (
    <>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="username-input-field-reg"
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );

  //  const jwtToken = Cookies.get("jwt_token");
  //   if (jwtToken !== undefined) {
  //     return <Navigate to="/" />;
  //   }

  return (
    <div className="login-form-container">
      <form className="form-container-reg" onSubmit={submitForm}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          <p style={{ fontSize: "18px" }}>Create your</p>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.4lRAXpFHOEeCMX2stzEcxgHaEK&pid=Api&P=0&h=180"
            alt="website login"
            style={{
              height: "25px",
              width: "25px",
              marginLeft: "5px",
              borderRadius: "6px",
              marginRight: "5px",
            }}
          />
          <p style={{ fontSize: "18px" }}>Account</p>
        </div>

        <div className="input-container">
          {renderInputField("Username", "username", "text", "Username")}
        </div>
        <div className="input-container">
          {renderInputField("Name", "name", "text", "Enter your name")}
        </div>
        <div className="input-container">
          {renderInputField("Email", "email", "email", "Enter your email")}
        </div>
        <div className="input-container">
          {renderInputField("Phone", "phone", "text", "Enter your phone No")}
        </div>
        <div className="input-container">
          {renderInputField(
            "Create a Password",
            "password",
            "password",
            "Password"
          )}
        </div>
        <div className="input-container">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
          Register Now
        </button>
        <Link to="/login" className="register-style-text">
          Already have an account
        </Link>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
