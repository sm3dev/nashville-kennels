import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getLocationById, deleteLocation, getAllLocations } from "../../modules/LocationManager";

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: ""});
  // add these to the useState after the top level stuff is working:
  // animalInventory: [], employeesOnStaff: []

  const { locationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    // getLocationById from LocationManager, then hold onto the data;
    // put the data into state
    console.log("useEffect: ", locationId);
    getLocationById(locationId).then(location => {
      console.log(location);
      setLocation({
        name: location.name,
        address: location.address
          });
    });
  }, [locationId]);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Located: {location.address}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="location__animals">
        Animals in Stock: <em>coming soon</em>
      </div>
      <div className="location__staff">
        Employees on Staff: <em>coming soon</em>
      </div>
    </section>
  );
};
