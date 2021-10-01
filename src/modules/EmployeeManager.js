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
  return fetch(`${remoteURL}/employees/?_expand=location`).then((res) =>
    res.json()
  );
};

// delete an employee by id
export const deleteEmployee = (id) => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};
