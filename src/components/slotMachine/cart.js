import React from "react";

const Cart = (props) => {

    const  x = props.x;
    const  y = props.y;
    const  z = props.z;


    if ((x === y) && (y === z)) {
        return (
            <>
                <div className="inner_cart">
                    <h3>
                        {x}    {y}    {z}<br />
                        This is Matching.
                    </h3>
                    <hr />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="inner_cart">
                    <h3>
                        {x}    {y}    {z}<br />
                        This is Not Matching.
                    </h3>
                    <hr />
                </div>
            </>
        )
    }



}

export default Cart;