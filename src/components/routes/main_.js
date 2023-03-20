import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Com_a from "./com_a";
import Com_b from "./com_b";
import Com_c from "./com_c";
import './main_.css'

const Main_ = () => {
    return (<>
        <div className=" navStyle ">
            <Link className="linkStyle" to="/Com_a" >Com_A</Link>
            <Link className="linkStyle" to="/Com_b" >Com_B</Link>
            <Link className="linkStyle" to="/Com_c" >Com_C</Link>
        </div>
      
            <Routes>
                <Route  path="/Com_a" element={<Com_a />} />
                <Route path="/Com_b" element={<Com_b />} />
                <Route path="/Com_c/:fName" element={<Com_c />} />
            </Routes>

    </>)
}

export default Main_;