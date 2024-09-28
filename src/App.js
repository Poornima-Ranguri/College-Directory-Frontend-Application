// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import StudentProfile from "./components/StudentProfile";
import SearchStudents from "./components/SearchStudents";
import ContactFacultyAdvisors from "./components/ContactFacultyAdvisors";
import ManageClassList from "./components/ManageClassList";
import UpdateProfile from "./components/UpdateProfile";
import ManageRecords from "./components/ManageRecords";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Student Routes */}
          <Route path="/student" element={<StudentProfile />} />
          <Route path="/student/search" element={<SearchStudents />} />
          <Route
            path="/student/advisors"
            element={<ContactFacultyAdvisors />}
          />

          {/* Faculty Member Routes */}
          <Route path="/faculty" element={<ManageClassList />} />
          <Route path="/faculty/update-profile" element={<UpdateProfile />} />

          {/* Administrator Routes */}
          <Route path="/admin" element={<ManageRecords />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
