import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState,useEffect } from 'react';

function App() {
  const [count,setCount]=useState(0);
  React.useEffect(()=>{
    console.log('useEffect');
  });
 
  return (
    <div className="App" >
        <h1>React useEffect function {count}</h1>
        <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Update</button>
    </div>
  );
}

export default App;
