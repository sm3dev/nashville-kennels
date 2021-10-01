import React, { useState, useEffect } from 'react';
import { getAnimalById } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", location: "", customer: "" });

  const {animalId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
          console.log(animal);
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          location: animal.location.name,
          customer: animal.customer.name
        });
      });
  }, [animalId]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location}</div>
      <div className="animal__owner">Customer: {animal.customer}</div>
    </section>
  );
}


