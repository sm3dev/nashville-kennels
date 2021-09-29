import React from "react";
import { PropsAndState } from './PropsAndState'
import { DateItem } from "./date/Date";

export const Home = ({isAdmin, myUser}) => (
    <>
    {isAdmin ? <p>You are an admin</p> : <p>You are NOT an admin</p>}
    <DateItem />.
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState myUser={myUser} />
    </>
)
