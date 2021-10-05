import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { DateItem } from "./date/Date"
import "./Kennel.css"
import { useState } from "react"

export const Kennel = () => { 

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
      }
    return (
    <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
        <DateItem />
    </>
)}
