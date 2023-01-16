import React, { useState } from "react";
import "../styles/SalaryBox.css";

const SalaryBox = () => {
  const [salary, setSalary] = useState(0);
  return (
    <div className="salary_box">
      <div className="salary_titleblock">
        <h2 className="salary_title"> Salaire minimum</h2>
      </div>
      <div className="salary_body">
        <label htmlFor="salary"> </label>
        <input
          type="range"
          min="0"
          max="100000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />{" "}
        <h3>
          {" "}
          <span className="minimal_salary">Salaire minimal: </span>
          <span className="amount_salary">{salary} € </span>
        </h3>
      </div>
    </div>
  );
};

export default SalaryBox;
