import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EmployeeCard } from "./employee/EmployeeCard"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { Locationlist } from "./location/LocationList"

export const ApplicationViews = ({ isAdmin, myUser }) => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home isAdmin={isAdmin} myUser={myUser}/>
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route path="/animals">
        <AnimalList />
      </Route>

      {/* Render the locations list when http://localhost:3000/locations */}
      <Route path="/locations">
        <Locationlist />
      </Route>

      {/* Render the customers list when http://localhost:3000/customers */}
      <Route path="/customers">
        <CustomerList />
      </Route>

      {/* Render the employees list when http://localhost:3000/employees */}
      <Route path="/employees">
        <EmployeeCard />
      </Route>
    </>
  );
};
