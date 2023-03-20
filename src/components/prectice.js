import React from "react";
import './traker.css'


const Prectice = () => {

    let data = `Good Morning`
    let style = "Green"

    const date =new Date()
    const time = 20 // date?.getHours()

    if( time >= 12 && time <= 19){
        data = "Good Afternoon"
        style = "Orange"
    }else if(time >= 20 && time <= 24){
        data = "Good Night"
        style = "Black"
    }
    
    return (
        <div className="txt_style">
            <div className="cart_style">
                <h1>Prectice Page <span style={{ color:style }}>{data}</span></h1>
            </div>
        </div>



    )
}

export default Prectice;