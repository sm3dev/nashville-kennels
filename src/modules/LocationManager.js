const remoteURL = "http://localhost:5002";

// get Location by Id http://localhost:5002/locations/1
export const getLocationById = (locationId) => {
  return fetch(`${remoteURL}/locations/${locationId}?_embed=employees&_embed=animals`).then((res) =>
    res.json()
  );
};

// get all Locations http://localhost:5002/locations
export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations?_embed=employees&_embed=animals`).then((res) => res.json());
};

// delete an location by id
export const deleteLocation = (id) => {
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};
