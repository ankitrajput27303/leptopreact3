import React, { useState } from "react";
import MyQuestion from "./myQuestion";
import './question.css'
import { data } from "./api";

const Question = (props) => {

    const [reactData, setreactData] = useState(data)

    return (
        <div className="main_class">
            <div className="cart_class">
                <h2>React Interview Question</h2>
                {
                    reactData.map((val) =>
                        <MyQuestion key={val.id} {...val} />

                    )
                }
            </div>


        </div>
    )
}

export default Question;