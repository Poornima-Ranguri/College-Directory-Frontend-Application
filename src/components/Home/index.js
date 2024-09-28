// src/components/Home/index.js
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (!jwtToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="app-container">
      <h1 className="heading">College Directory Application</h1>
    </div>
  );
};

export default Home;
