import React, { useEffect, useState } from "react";
import { deleteAnimal, getAllAnimals } from "../../modules/AnimalManager";
import { AnimalCard } from "./AnimalCard";

export const AnimalList = () => {
    // The initial state is an empty array
    const [animals, setAnimals] = useState([]);
  
    const getAnimals = () => {
      // After the data comes back from the API, we
      //  use the setAnimals function to update state
      return getAllAnimals().then(animalsFromAPI => {
        setAnimals(animalsFromAPI)
      });
    };
  
    // get the animals from the API on the component's first render
    useEffect(() => {
      getAnimals();
    }, []);

    const handleDeleteAnimal = id => {
      deleteAnimal(id).then(() => getAllAnimals().then(setAnimals));
  };
  
  
    // Finally we use .map() to "loop over" the animals array to show a list of animal cards
    return (
      <div className="container-cards">
        {animals.map(animal => <AnimalCard key={animal.id} animal={animal} handleDeleteAnimal={handleDeleteAnimal} />)}
      </div>
    );
  };
