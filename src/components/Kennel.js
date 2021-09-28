import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

const isAdmin = true;

// example of object being passed
const myUser = {
    name: "Michael",
    pet: "Bears"
}

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews isAdmin={isAdmin} myUser={myUser}/>
    </>
)
