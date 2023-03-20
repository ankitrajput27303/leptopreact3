import axios from "axios";
import react, { useEffect, useState } from "react";
import './covid.css'

const Covid = (props) => {

    const Array = ['1','1','1','1','1','1'];

    const [ data, setData ] = useState({})

   

    const getData = async () => {
        axios.get(`https://data.covid19india.org/data.json`)
        .then((resp) => {
            setData(resp?.data?.statewise[0]);
            console.log("data",data )
        }).catch((err)=>{ console.log("err>>>", err)})
    }

    useEffect(()=>{
        // getData();
    },[])

  

    return (
        <>
            <section className="head_cart">
                <div className ="hover_style" >
                <span>🔴 LIVE</span>
                <h1> COVID-19 LIVE Tracker </h1>
                </div>
               
                <div className="menu_cart"  >
                    
                            <div className=" main_cart">
                                <div className="text_style">
                                    <h1><span className="font_style">our </span>COUNTRY</h1>
                                    <h1>INDIA </h1>
                                </div>
                            </div>

                            <div className=" main_cart">
                                <div className="text_style">
                                    <h1><span className="font_style">TOTAL </span>RECOVERED</h1>
                                    <h1> {data.recovered}</h1>
                                </div>
                            </div>
                            <div className=" main_cart">
                                <div className="text_style">
                                    <h1><span className="font_style">TOTAL </span>CONFIRMED</h1>
                                    <h1> {data.deltaconfirmed}</h1>
                                </div>
                            </div>
                            <div className=" main_cart">
                                <div className="text_style">
                                    <h1><span className="font_style">TOTAL </span>DEATH</h1>
                                    <h1> {data.deaths}</h1>
                                </div>
                            </div>
                            <div className=" main_cart">
                                <div className="text_style">
                                    <h1><span className="font_style">TOTAL </span>ACTIVE</h1>
                                    <h1> {data.active}</h1>
                                </div>
                            </div>
                            <div className=" main_cart">
                                <div className="text_style">
                                    <h1><span className="font_style">TOTAL </span>UPDATED</h1>
                                    <h1> {data.lastupdatedtime}</h1>
                                </div>
                            </div>
                     


                </div>

            </section>

        </>
    )

}

export default Covid;

{/* <div className="main_cart">
<div>
    <span>🔴 LIVE</span>
    <h1> COVID-19 LIVE Tracker </h1>
</div>
<div className="show_cart"  >
    <div className="kuchhBhi">

        <div className=" middleCart">
            <h1><span className="font_style">our </span>Country</h1>
            <h1>INDIA</h1>
        </div>
        <div className=" middleCart ">
            <h1><span className="font_style">our </span>Country</h1>
            <h1>INDIA</h1>
        </div>
        <div className=" middleCart ">
            <h1><span className="font_style">our </span>Country</h1>
            <h1>INDIA</h1>
        </div><div className=" middleCart ">
            <h1><span className="font_style">our </span>Country</h1>
            <h1>INDIA</h1>
        </div><div className=" middleCart ">
            <h1><span className="font_style">our </span>Country</h1>
            <h1>INDIA</h1>
        </div><div className=" middleCart ">
            <h1><span className="font_style">our </span>Country</h1>
            <h1>INDIA</h1>
        </div><div className=" middleCart ">
            <h1><span className="font_style">our </span>Country</h1>
            <h1>INDIA</h1>
        </div>
    </div>
</div>

</div> */}