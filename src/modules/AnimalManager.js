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
  return fetch(`${remoteURL}/animals/?_expand=location&_expand=customer`).then(
    (res) => res.json()
  );
};

// delete an animal by Id
export const deleteAnimal = (id) => {
  return fetch(`${remoteURL}/animals/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

// add new animal
export const addAnimal = (newAnimal) => {
  return fetch(`${remoteURL}/animals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnimal),
  }).then((response) => response.json());
};

export const update = (editedAnimal) => {
  return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedAnimal)
  }).then(data => data.json());
}

// Add this method to the AnimalManager
export const getRandomId = () => {
  return fetch(`${remoteURL}/animals?_expand=location&_expand=customer`)
    .then(result => result.json())
    .then(animals => {
      const randomIndex = Math.floor(Math.random() * animals.length);
      const randomAnimal = animals[randomIndex];
      return randomAnimal.id;
  });
}
