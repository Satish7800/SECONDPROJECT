import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import User from './User';

function App() {
  const [count,setCount]=useState(100);
  const [data,setData]=useState(10);
 
  
  return (
    <div className="App" >
        <User count={count} data={data}/>
        <Button  onClick={()=>setCount(count+1)}>Update</Button><br></br>
        <Button className="btn btn-primary" onClick={()=>setData(data+1)}>Data</Button>
    </div>
  );
}

export default App;
