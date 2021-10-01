import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

export const LocationCard = ({location, handleDeleteLocation}) => (
  <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <div className="location__address">Address: {location.address}</div>
    <button type="button" onClick={() => handleDeleteLocation(location.id)}>Delete Location</button>
    <Link to={`/locations/${location.id}`}>
        <button>Details</button>
        </Link>
  </section>
);
