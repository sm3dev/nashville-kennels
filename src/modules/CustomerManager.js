const remoteURL = "http://localhost:5002";

export const getCustomerById = (customerId) => {
  //http://localhost:5002/customers/3?_expand=animal
  return fetch(`${remoteURL}/customers/${customerId}?_embed=animals`).then(
    (res) => res.json()
  );
};

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers?_embed=animals`).then((res) =>
    res.json()
  );
};

export const deleteCustomer = (id) => {
  return fetch(`${remoteURL}/customers/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};
