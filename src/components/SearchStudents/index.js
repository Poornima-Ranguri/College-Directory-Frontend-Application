// src/components/SearchStudents/index.js
import React, { useState } from "react";
import "./index.css";

const SearchStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `http://localhost:3003/students?query=${searchTerm}`
    );
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <h1>Search for Other Students</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name, department, or year"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((student) => (
          <li key={student.id}>
            {student.name} - {student.department.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStudents;
