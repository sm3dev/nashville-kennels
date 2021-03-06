import { useEffect, useState } from "react";
import { deleteLocation, getAllLocations } from "../../modules/LocationManager";
import { LocationCard } from "./LocationCard";

export const Locationlist = () => {
  // the initial state is an EMPTY ARRAY
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // after the data comes back to the API, run setLocations on it to update the state
    return getAllLocations().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };

  const handleDeleteLocation = id => {
    deleteLocation(id).then(() => getAllLocations().then(setLocations))
  }

  //get the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally, we use .map() to loop over the locations array to show a list of location cards
  return (
    <div className="container-cards locations">
      {locations.map(location => <LocationCard key={location.id} location={location} handleDeleteLocation={handleDeleteLocation} />)}
    </div>
  );
};
