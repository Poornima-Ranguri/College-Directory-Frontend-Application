// src/components/StudentProfile/index.js
import React, { useEffect, useState } from "react";
import "./index.css";

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("http://localhost:3003/student/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setProfile(data);
    };

    fetchProfile();
  }, [token]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Your Profile</h1>
      <img src={profile.photo} alt="Profile" />
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Department: {profile.department.name}</p>
      <p>Year: {profile.year}</p>
      {/* Additional academic info */}
    </div>
  );
};

export default StudentProfile;
