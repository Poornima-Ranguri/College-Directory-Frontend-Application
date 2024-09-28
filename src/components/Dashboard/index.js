// src/components/Dashboard/index.js
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "./index.css";

const Dashboard = () => {
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3003/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;
