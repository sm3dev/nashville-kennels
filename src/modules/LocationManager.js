const remoteURL = "http://localhost:5002";

// get Location by Id http://localhost:5002/locations/1
export const getLocationById = (locationId) => {
  return fetch(`${remoteURL}/locations/${locationId}`).then((res) =>
    res.json()
  );
};

// get all Locations http://localhost:5002/locations
export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`).then((res) => res.json());
};
