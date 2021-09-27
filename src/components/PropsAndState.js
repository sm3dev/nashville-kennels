import React, { useState } from "react";

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0); //0 zero is our default value AND it's an integer

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks;
    setCountClicks(newCountClicks);
  };

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};
