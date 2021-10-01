import React from "react";
import "./Employee.css";

export const EmployeeCard = ({employee, handleDeleteEmployee}) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__location">{employee.location.name}</div>
    <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate My Delightful Employment</button>

  </section>
);
