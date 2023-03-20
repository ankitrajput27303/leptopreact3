import logo from './logo.svg';
import Covid from './components/covid';
import Tracker from './components/traker';
import Prectice from './components/prectice'
import Slot_m from './components/slotMachine/slot_m'
import Input from './components/input/input'
import Todo from './components/todo_list/todo'
import Question from './components/Accordion/question';
import Main from './components/context/main';
import Table from './components/table/table';
import Main_ from './components/routes/main_.js';
import { useState } from 'react';
// import MainAPP from './redux/mainApp.js'
// import store from './redux/store.js'
// import { Provider } from 'react-redux';

// import './components/covid.css'
// import './App.css';
import UploadImage from './components/image/upload';


function App() {

  const [data, setData] = useState(null)

  console.log("Data", data)
  return (
    <>
      {/* <Question/> */}
      {/* <input type="file" placeholder='insert your File' multiple onChange={(e) => setData(e.target.value)} /> */}
      {/* <UploadImage /> */}
      {/* <Main_/> */}
      {/* <Todo/> */}
      {/* <Main_/> */}
      {/* <Input/> */}
      {/* <Slot_m/> */}
      {/* <Table/> */}
      {/* <Covid/> */}
      {/* <Prectice/> */}
      <Tracker/>
    </>
  );
}

export default App;
