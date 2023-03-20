import React, { createContext } from "react";
import ComA from './comA'

const firstName = createContext();
const lastName = createContext();


const Main = () => {
    return(
        <>
        <firstName.Provider value={"vishal"}>
            <lastName.Provider value={"thakur"}>
            <ComA/>
            </lastName.Provider>
        </firstName.Provider>
        
        </>
    )
}

export default Main;
export { firstName, lastName };