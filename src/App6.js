import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

class App extends React.Component {

  constructor(){
    super();
    this.state={
      name:"Raj"
    };
  }
  componentDidMount(){
    console.warn("componentDidMount");
    
    
  }
 
  render(){
    // console.warn(this.state.name);
    // this.setState({name:"Ramesh"});
    return(
      
      <div>
        <h1>Hello:{this.state.name}</h1>
        { <button class="btn btn-primary" onClick={()=>this.setState({name:"Ramesh"})}>Update Name</button>}
      </div>
      
    )
  }

 }


export default App;
