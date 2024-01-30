import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState } from 'react';

function App() {
  const [data,setData]=useState("Satish");
  return (
    <div className="App" >
        console.warn(data);
        <h1>{data}</h1>
        <button class="btn btn-primary sm" onClick={()=>setData("Raj")}>Update</button>

    </div>
  );
}

export default App;
