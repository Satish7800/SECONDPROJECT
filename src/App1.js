import logo from './logo.svg';
import './App.css';
// import React from 'react';
import { useState } from 'react';
 
//get data from input box by input and by click on button
function App() {

const [data,setData]=useState(null)
const [print,setPrint]=useState(false)
    function getData(val){
      console.warn(val.target.value);
      setData(val.target.value);
      setPrint(false);
    }
  return (
    <div className="App">
        {
          print?
          <h1>{data}</h1>
          :null
        }
        
        <input type="text" onChange={getData}/>
        <button onClick={()=>setPrint(true)} >Print</button>
    </div>
  );
}

export default App;
