import React, { useState, useEffect } from "react";
import axios from "axios";
import './table.css'

const Table = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        axios.get(`https://data.covid19india.org/data.json`)
            .then((resp) => {
                setData(resp?.data?.statewise);
            }).catch((err) => { console.log("err>>>", err) })
            console.log("data", data);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="main_content" >
            <h1><span style={{ fontWeight: "bold" }} >INDIA </span>COVID-19 Dashboard </h1>
            <div className="table_style">
                <table>
                    <thead>
                        <tr>
                            <th>STATE</th>
                            <th>CONFIRMED</th>
                            <th>RECOVERED</th>
                            <th>DEATHS</th>
                            <th>ACTIVE</th>
                            <th>UPDATED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((dat, index) => 
                                
                                <tr key={index}>
                                    <td>{dat.state}</td>
                                    <td>{dat.confirmed}</td>
                                    <td>{dat.recovered}</td>
                                    <td>{dat.deaths}</td>
                                    <td>{dat.active}</td>
                                    <td>{dat.lastupdatedtime}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Table;