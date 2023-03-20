import React, { useState } from "react";
import './todo.css'

const Todo = (props) => {

    const [item, setItem] = useState("")
    const [data, setData] = useState([])

    const addItem = () => {
        setData([...data, item]);
        setItem("");
    }

    const deleteItem = (index) => {
        data.splice(index, 1);
        setData([...data]);
    }

    return (
        <div className="main_div">
            <div className="inner_div">
                <h1>ToDo List</h1>
                <div className="content_div">
                    <input type="text" placeholder="Add a Items" value={item} onChange={(e) => setItem(e.target.value)} />
                    <button onClick={addItem}> + </button>
                </div>
                {
                    data.map((val, index) =>

                        <div key={index} className="show_div">
                            <button onClick={()=> deleteItem(index)}> X </button>
                            <span>{val}</span>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Todo;