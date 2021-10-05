import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useHistory } from "react-router";

export const NavBar = ({ clearUser, isAuthenticated }) => {

  const history = useHistory();

  const handleLogout = () => {
    clearUser();
    history.push('/');
}

  return (
    <ul className="navbar">
      <li className="navbar__item">
        <NavLink exact to="/" className="navbar__link" activeClassName="active">
        NSS Kennels
        </NavLink>
      </li>
      {isAuthenticated
                && <li className="navbar__item">
        <NavLink className="navbar__link" to="/locations" activeClassName="active">
          Locations
        </NavLink>
      </li>}
      {isAuthenticated
                && <li className="navbar__item">
        <NavLink className="navbar__link" to="/animals" activeClassName="active">
          Animals
        </NavLink>
      </li>}
      {isAuthenticated
                && <li className="navbar__item">
        <NavLink className="navbar__link" to="/customers" activeClassName="active">
          Customers
        </NavLink>
      </li>}
      {isAuthenticated
        && <li className="navbar__item">
        <NavLink className="navbar__link" to="/employees" activeClassName="active">
          Employees
        </NavLink>
      </li>}
      {isAuthenticated ? <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li>}
    </ul>
  );
};
