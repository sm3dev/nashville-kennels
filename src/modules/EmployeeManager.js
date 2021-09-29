const remoteURL = "http://localhost:5002";

// get employee by ID with location and animal
// http://localhost:5002/employees/1?_expand=location&_expand=animal
export const getEmployeeById = (employeeId) => {
  return fetch(
    `${remoteURL}/employees/${employeeId}?_expand=location&_expand=animal`
  ).then((res) => res.json());
};

//for all employees http://localhost:5002/employees
export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`).then((res) => res.json());
};
