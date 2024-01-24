import logo from './logo.svg';
import './App.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState } from 'react';
 

function App() {

  const [name,setName]=useState("");
  const [tnc,setTnc]=useState(false);
  const [intrest,setIntrest]=useState("");

  function getFormData(e){
    console.warn(name,tnc,intrest);
    e.preventDefault();
  }
  return (
    <div className="App" class="container mt-5 col-md-4 m-auto"   >
          <div class="card">
            <div class="card-header">Form</div>
          <div class="card-body">
          <form onSubmit={getFormData}>
          <input class="form-control mb-3" type='text' value={name} placeholder='Enter the name' onChange={(e)=>setName(e.target.value)} />
          <select class="form-control mb-3 "  onChange={(e)=>setIntrest(e.target.value)}>
              <option value="MCA">MCA</option>
              <option value="Btech">B Tech</option>
              <option value="BCA">BCA</option>
              <option value="PGDCA">PGDCA</option>
          </select>
          <input class="mb-3" type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/> <span>Term and condtions.</span><br></br>
          <button class="btn btn-primary" type="submit">Submit</button> 
          <button class="btn btn-danger m-1">Clear</button> 
          </form>
          </div>
          </div>
    </div>
  );
}

export default App;
