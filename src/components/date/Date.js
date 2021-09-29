import React from "react";

let dateRightNowString = new Date(Date.now());

export const DateItem = () => {
    
    let newDateFormat = dateRightNowString.toDateString();


    return (newDateFormat)

}

// export const nextMonth = () => {

//     let monthNow = new Intl.DateTimeFormat('en-US', options)

// }