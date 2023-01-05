import React from "react";
import "../styles/SalaryBox.css";

const SalaryBox = () => {
  return (
    <div className="salary_box">
      <div className="salary_titleblock">
        <h2 className="salary_title"> Salaire minimum</h2>
      </div>
      <div className="salary_body">
        <label htmlFor="salary"> Annuel </label>
        <input type="range" id="salary" name="salary" min="0" max="100 000" />
      </div>
    </div>
  );
};

export default SalaryBox;
