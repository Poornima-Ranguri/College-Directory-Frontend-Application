// src/components/ManageRecords/index.js
import React, { useEffect, useState } from "react";
import "./index.css";

const ManageRecords = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch("http://localhost:3003/admin/records", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUsers(data);
    };

    fetchRecords();
  }, [token]);

  return (
    <div>
      <h1>Manage Student and Faculty Records</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
            {/* Additional CRUD buttons here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRecords;
