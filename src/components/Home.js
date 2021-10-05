import React from "react";
import { PropsAndState } from './PropsAndState'
import { DateItem } from "./date/Date";
import { QuoteItem } from "./quote/Quote";
import { getRandomId } from "../modules/AnimalManager";
import { useState, useEffect } from "react";
import { AnimalSpotlight } from "./animal/AnimalSpotlight";

export const Home = ({isAdmin, myUser}) => {
    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAnimal = () => {
        getRandomId().then(setSpotlightId);
      };
    
      useEffect(() => {
        refreshSpotlightAnimal();
      }, []);

    return (
    <>
    {isAdmin ? <p>You are an admin</p> : <p>You are NOT an admin</p>}
    <QuoteItem />
    <DateItem />
    <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
        <PropsAndState myUser={myUser} />
    </>
)}
