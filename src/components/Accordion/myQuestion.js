import React, { useState } from "react";

const MyQuestion = ({ question, answer }) => {

    const [togle, setTogle] = useState(true);
    // const  = props.val;

    return (
        <>
            <div className="center_cart">
                <h3><span className="que_style" onClick={() => setTogle(!togle)} >{togle ? "➕" : "➖"}</span>{question}</h3>
            </div>
            {
                !togle && <p className="answer_cart">{answer}</p>
            }
        </>
    )
}

export default MyQuestion;