import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState } from 'react';

function App() {
  React.useEffect(()=>{
    alert('useEffect');
  });
 
  return (
    <div className="App" >
       <h1>UseEffect in React </h1>
    </div>
  );
}

export default App;
