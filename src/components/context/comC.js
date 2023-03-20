import React, { useContext } from "react";
import ComB from "./comB";
import { firstName, lastName } from './main'



const ComC = () => {

    const fName = useContext(firstName);
    const lName = useContext(lastName);

    return (
        <>
            <h1>My Name is {fName} {lName}. </h1>
        </>
    )
}

export default ComC;