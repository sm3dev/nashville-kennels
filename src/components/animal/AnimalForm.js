import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addAnimal } from '../../modules/AnimalManager';
import './AnimalForm.css'
import { getAllLocations } from '../../modules/LocationManager';
import { getAllCustomers } from '../../modules/CustomerManager';

export const AnimalForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [animal, setAnimal] = useState({
		name: "",
		breed: "",
		locationId: 0,
		customerId: 0,
        image: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [locations, setLocations] = useState([]);
	const [customers, setCustomers] = useState([]);
	const history = useHistory();


    const getLocations = () => {
        // after the data comes back to the API, run setLocations on it to update the state
        return getAllLocations().then((locationsFromAPI) => {
          setLocations(locationsFromAPI);
        });
      }

      const getCustomers = () => {
        // after the date comes back from the API, we use the setCustomers function TO UPDATE THE STATE
        return getAllCustomers().then((customersFromAPI) => {
          setCustomers(customersFromAPI);
        });
      };

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newAnimal = { ...animal }
		let selectedVal = event.target.value

		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}

		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newAnimal[event.target.id] = selectedVal
		// update state
		setAnimal(newAnimal)
	}

    useEffect(() => {
		//load location data and setState
        getLocations();
	}, []);

     useEffect(() => {
		//load customer data and setState
        getCustomers();
	}, []);


	const handleClickSaveAnimal = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const locationId = animal.locationId
		const customerId = animal.customerId

		if (locationId === 0 || customerId === 0) {
			window.alert("Please select a location and a customer")
		} else {
			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
			addAnimal(animal)
				.then(() => history.push("/animals"))
		}
	}

	return (
		<form className="animalForm">
			<h2 className="animalForm__title">New Animal</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Animal name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="image">Animal photo:</label>
					<input type="file" id="image" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal image" value={animal.image} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="breed">Animal breed:</label>
					<input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveAnimal}>
				Save Animal
          </button>
		</form>
	)
};

