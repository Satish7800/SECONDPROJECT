import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState,useEffect } from 'react';

function App() {
  const [count,setCount]=useState(100);
  const [data,setData]=useState(10);
 
  React.useEffect(()=>{
    console.log('Data');
  },[data]);
  React.useEffect(()=>{
    alert('Count '+count);
  },[count]);
 
  return (
    <div className="App" >
        <h1>Count useEffect: {count}</h1>
        <h1>Data useEffect: {data}</h1>
        <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Update</button><br></br>
        <button className="btn btn-primary" onClick={()=>setData(data+1)}>Data</button>
    </div>
  );
}

export default App;
