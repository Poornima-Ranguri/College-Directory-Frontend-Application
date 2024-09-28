// src/components/ContactFacultyAdvisors/index.js
import React, { useEffect, useState } from "react";
import "./index.css";

const ContactFacultyAdvisors = () => {
  const [advisors, setAdvisors] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAdvisors = async () => {
      const response = await fetch("http://localhost:3003/student/advisors", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setAdvisors(data);
    };

    fetchAdvisors();
  }, [token]);

  return (
    <div>
      <h1>Your Faculty Advisors</h1>
      <ul>
        {advisors.map((advisor) => (
          <li key={advisor.id}>
            {advisor.name} -{" "}
            <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactFacultyAdvisors;
