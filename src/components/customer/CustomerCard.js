import React from "react";
import "./Customer.css";

export const CustomerCard = ({ customer }) => (
  <section className="customer">
    <h3 className="customer__name">Name: {customer.name}</h3>
    <div className="customer__address">Address: {customer.address}</div>
    <div className="customer__pet">Pet: {customer.animal.name}</div>
  </section>
);
