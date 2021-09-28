import React, { useState } from "react";

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0); //0 zero is our default value AND it's an integer
  let [saveNow, setSaveNow] = useState(false);

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = 5 + countClicks;
    setCountClicks(newCountClicks);
  };

  const handleChange = (event) => {
    console.log("what is event:", event.target.value);
    let newSaveNow = saveNow;
    newSaveNow = true;
    setSaveNow(newSaveNow);
  };

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={handleClick}>Click Me</button>

      <hr />
      <hr />
      <div>
        <textarea
          style={{ width: "80%" }}
          type="text"
          name="notes"
          id=""
          placeholder="Notes"
          onChange={handleChange}
        ></textarea>
        <button
          id="save"
          style={{ width: "80%" }}
          disabled={saveNow ? false : true}
        >
          Save Note
        </button>
      </div>
    </>
  );
};
