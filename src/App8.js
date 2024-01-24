import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState,use } from 'react';

const [data,setData]=useState("Satish");

function App() {
  
  return (
    <div className="App" >
        
        <h1>{data}</h1>

    </div>
  );
}

export default App;
