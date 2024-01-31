import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState,useEffect } from 'react';

function App() {
  React.useEffect(()=>{
    alert('useEffect');
  });
 
  return (
    <div className="App" >
        console.warn(data);
        <h1>{data}</h1>
        <button class="btn btn-primary sm" onClick={()=>setData("Raj")}>Update</button>

    </div>
  );
}

export default App;
