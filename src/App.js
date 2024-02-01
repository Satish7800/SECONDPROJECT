import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState,useEffect } from 'react';
import User from './User';

function App() {
  const [count,setCount]=useState(100);
  const [data,setData]=useState(10);
 
  return (
    <div className="App" >
        <User count={count} data={data}/>
        <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Update</button><br></br>
        <button className="btn btn-primary" onClick={()=>setData(data+1)}>Data</button>
    </div>
  );
}

export default App;
