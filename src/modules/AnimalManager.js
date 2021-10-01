const remoteURL = "http://localhost:5002";

// Get animal by Id with expanded Location and Customer information
export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(
    `${remoteURL}/animals/${animalId}/?_expand=location&_expand=customer`
  ).then((res) => res.json());
};

// get all Animals
export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals/?_expand=location&_expand=customer`).then((res) => res.json());
};

// delete an animal by Id
export const deleteAnimal = (id) => {
  return fetch(`${remoteURL}/animals/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}
