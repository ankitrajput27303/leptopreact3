import React, { useState } from "react";
import './input.css'


const Input = () => {
    const [data, setData] = useState({
        fName: "",
        lName: "",
        email: "",
        subject: ""
    })

    // console.log('data',data)

    const InputEvent = (event) => {

        const {name, value} = event.target;
        setData((priviousValue) =>{
            return{
                ...priviousValue,
                [name]:value
            }
        })

    }

    return (
        <>
            <div className="header">
                <h1 > Input From</h1>
                <span>Hello, {data.fName} {data.lName} </span>
                <p>{data.email}</p>
                <p>{data.subject}</p>

            </div>
            <div className="input_cart"  >
                <input type="text" name="fName" className="input_name" placeholder="Enter Your First Name" onChange={InputEvent} />
                <input type="text" name="lName" className="input_name" placeholder="Enter Your Last Name" onChange={InputEvent} />
                <input type="text" name="email" className="input_name" placeholder="Enter Your Email" onChange={InputEvent} />
                <input type="text" name="subject" className="input_name" placeholder="Enter Your Qualification" onChange={InputEvent} />
                <div >
                    <button className="button_style" onClick={ () => alert("Your file is being uploaded!")} >Submit</button>
                </div>
            </div>
        </>
    )
}

export default Input;