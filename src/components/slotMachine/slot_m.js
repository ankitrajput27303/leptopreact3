import React from "react";
import Filter from "./filter";
import './slot_m.css'

const Slot_m = () => {
    return(
        <>
        <h1 className="cart_header" >🎰 WELLCOME TO <span style={{fontWeight:"bold", backgroundColor: "lightGrey"  }} >  SLOT MACHINE GAME  </span> 🎰</h1>
        <div className="slot_cart" >
            <Filter/>
        </div>
        </>
    )
}

export default Slot_m;