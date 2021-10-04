import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerList } from "./customer/CustomerList";
import { Locationlist } from "./location/LocationList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { useState } from "react";
import { Redirect } from "react-router";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const ApplicationViews = ({ isAdmin, myUser }) => {

const [isAuthenticated, setIsAuthenticated] = useState(
  sessionStorage.getItem("kennel_customer") !== null
);

const setAuthUser = (user) => {
  sessionStorage.setItem("kennel_customer", JSON.stringify(user));
  setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null);
};

  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home isAdmin={isAdmin} myUser={myUser} />
      </Route>
      
      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
      </Route>

      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

      <Route path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>
      {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/animals/1

          It will not handle the following URL because the `(\d+)`
          matches only numbers after the final slash in the URL
          http://localhost:3000/animals/jack
        */}
      // Our shiny new route.
      <Route path="/animals/create">
        <AnimalForm />
      </Route>
      {/* Render the locations list when http://localhost:3000/locations */}
      <Route exact path="/locations">
      {isAuthenticated ? <Locationlist /> : <Redirect to="/login" />}
      </Route>
      <Route path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>
      {/* Render the customers list when http://localhost:3000/customers */}
      <Route path="/customers">
      {isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
      </Route>
      {/* Render the employees list when http://localhost:3000/employees */}
      <Route path="/employees">
      {isAuthenticated ? <EmployeeList /> : <Redirect to="/login" />}
      </Route>
    </>
  );
};
