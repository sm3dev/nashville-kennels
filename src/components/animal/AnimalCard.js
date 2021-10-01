import React from "react";
import "./Animal.css";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => (
  <section className="animal">
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="animal__image" src={`./images/${animal.image}`} alt="My Dog" />
        </picture>
        <h3 className="animal__name">Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <p className="animal__breed">Breed: {animal.breed}</p>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
      </div>
    </div>
  </section>
);
