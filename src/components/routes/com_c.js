import React from "react";
import { useParams } from "react-router-dom";

const Com_c = () => {

    const { fName } = useParams()
    return(
        <>
      <h1>My C Component Page.</h1>
      <h3>Hii {fName}, Wellcome to Web Page.</h3>
        </>
    )
}

export default Com_c;