import React, { useState } from "react"

export const PropsAndState = ({ myUser }) => {
  let [countClicks, setCountClicks] = useState(0);

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>      
      <h3>Welcome, {myUser.name} and {myUser.pet}</h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}
