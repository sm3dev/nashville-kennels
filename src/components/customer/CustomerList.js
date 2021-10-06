import { useEffect, useState } from "react";
import { deleteCustomer, getAllCustomers } from "../../modules/CustomerManager";
import { CustomerCard } from "./CustomerCard";

export const CustomerList = () => {
  // the initial state is an EMPTY ARRAY
  const [customers, setCustomers] = useState([]);
  const [customerAnimals, setCustomerAnimals] = useState([]);

  const getCustomers = () => {
    // after the date comes back from the API, we use the setCustomers function TO UPDATE THE STATE
    return getAllCustomers().then((customersFromAPI) => {
      setCustomers(customersFromAPI);
      setCustomerAnimals(customersFromAPI.animals);
    });
  };

  const handleDeleteCustomer = id => {
    deleteCustomer(id).then(() => getAllCustomers().then(setCustomers))
  }

  // get the customers from the API on the component's first render then stop: by using an empty array object as the second argument in useEffect()
  useEffect(() => {
    getCustomers();
  }, []);

  // Finally, we use .map() to loop over the customers array to show a list of customer cards
  return (
    <div className="container-cards">
      {customers.map(customer => <CustomerCard key={customer.id} customer={customer} handleDeleteCustomer={handleDeleteCustomer} />)}
    </div>
  );
};
