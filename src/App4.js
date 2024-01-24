import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState } from 'react';
import Login from './Login';
import User from './User';
import Members from './Members';
 

function App() {

  function getData(){
    alert("Hello From App");
  }
  return (
    <div className="App" >
          <User data={getData}/>
          <Members data={getData}/>

    </div>
  );
}

export default App;
