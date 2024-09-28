// src/components/ManageClassList/index.js
import React, { useEffect, useState } from "react";
import "./index.css";

const ManageClassList = () => {
  const [students, setStudents] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchClassList = async () => {
      const response = await fetch("http://localhost:3003/faculty/classlist", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setStudents(data);
    };

    fetchClassList();
  }, [token]);

  return (
    <div>
      <h1>Class List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageClassList;
