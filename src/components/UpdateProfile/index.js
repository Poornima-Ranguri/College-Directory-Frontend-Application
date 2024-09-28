// src/components/UpdateProfile/index.js
import React, { useState, useEffect } from "react";
import "./index.css";

const UpdateProfile = () => {
  const [profile, setProfile] = useState({});
  const [officeHours, setOfficeHours] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("http://localhost:3003/faculty/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setProfile(data);
      setOfficeHours(data.office_hours);
    };

    fetchProfile();
  }, [token]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3003/faculty/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ office_hours: officeHours }),
    });

    if (response.ok) {
      alert("Profile updated successfully!");
    } else {
      alert("Failed to update profile.");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h1>Update Profile</h1>
      <p>Name: {profile.name}</p>
      <label htmlFor="officeHours">Office Hours</label>
      <input
        type="text"
        id="officeHours"
        value={officeHours}
        onChange={(e) => setOfficeHours(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProfile;
