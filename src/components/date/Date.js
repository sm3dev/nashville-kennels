import React from "react";

let dateRightNowString = new Date(Date.now());

export const DateItem = () => {
    
    let newDateFormat = dateRightNowString.toDateString();

    return (
        <h4>The day is {newDateFormat}. <small><em>No, seriously. It's almost October, my guy.</em></small></h4>
        )

}

// export const nextMonth = () => {

//     let monthNow = new Intl.DateTimeFormat('en-US', options)

// }