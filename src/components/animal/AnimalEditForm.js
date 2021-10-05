import React, { useState, useEffect } from "react"
import { update, getAnimalById } from "../../modules/AnimalManager"
import { useHistory, useParams } from "react-router"
import "./AnimalForm.css"

export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "", locationId: 1, customerId: 1, image: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {animalId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      customerId: animal.customerid,
      locationId: animal.locationid,
      image: animal.image
    };

  update(editedAnimal)
    .then(() => history.push("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            
            <input
              type="hidden"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="customer"
              value={animal.customerId}
            />
            <label htmlFor="customer">Customer</label>

            <input
              type="hidden"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={animal.locationId}
            />
            <label htmlFor="location">Location</label>

          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"><i class="far fa-save"></i> Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

