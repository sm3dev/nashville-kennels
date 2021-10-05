import React from "react";
import "./Customer.css";

export const CustomerCard = ({ customer, handleDeleteCustomer }) => (
  <section className="customer">
    <h3 className="customer__name">Name: {customer.name}</h3>
    <div className="customer__address">Address: {customer.address}</div>
    <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Cancel This Customer</button>
  </section>
);
