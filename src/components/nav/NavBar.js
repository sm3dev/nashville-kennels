import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <NavLink exact to="/" className="navbar__link" activeClassName="active">
        NSS Kennels
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" to="/locations" activeClassName="active">
          Locations
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" to="/animals" activeClassName="active">
          Animals
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" to="/customers" activeClassName="active">
          Customers
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" to="/employees" activeClassName="active">
          Employees
        </NavLink>
      </li>
    </ul>
  );
};
