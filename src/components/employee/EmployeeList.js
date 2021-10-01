import { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployees } from "../../modules/EmployeeManager";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeList = () => {
  // the initial state is an emtry array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // after getting the DATA from the API, we use the setEmployees function to update state
    return getAllEmployees().then((employeesFromAPI) => {
      setEmployees(employeesFromAPI);
    });
  };

  const handleDeleteEmployee = id => {
    deleteEmployee(id).then(() => getAllEmployees().then(setEmployees));
  }

  // get the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // finally we use .map() to "loop over" the employee array to show a list of employee cards
  return (
    <div className="container">
      {employees.map(employee => 
        <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee} />)}
    </div>
  );
};
