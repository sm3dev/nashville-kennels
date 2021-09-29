const remoteURL = "http://localhost:5002";

export const getCustomerById = (customerId) => {
  //http://localhost:5002/customers/3?_expand=animal
  return fetch(`${remoteURL}/customers/${customerId}?_expand=animal`).then((res) =>
    res.json()
  );
};

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`).then((res) => res.json());
};
