import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './Student';
import 'bootstrap/dist/css/bootstrap.min.css';  

class App extends React.Component {

  constructor(){
    super();
    console.warn("Hello Constructor")
    this.state={
      show:true
    };
  }
  
  render(){
   
    return(
      
      <div className='App'>
          {
            this.state.show ? <Student/> : <h1>Child Component Removed</h1>
          }
          <button onClick={()=>this.setState({show:!this.state.show})}>Update</button>
      </div>
      
    )
  }

 }


export default App;
