import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

class App extends React.Component {

  constructor(){
    super();
    console.warn("Hello Constructor")
    this.state={
      count:0
    };
  }
  componentDidUpdate(preState,preProps,snapshot){
    console.log("componentDidUpdate",preState.count,this.state.count)
    if(this.state.count<10){
      this.setState({count:this.state.count+1});
    }
    
  }
 
  render(){
    // console.warn(this.state.name);
    // this.setState({name:"Ramesh"});
    return(
      
      <div>
        <h1>Hello:{this.state.count}</h1>
        <button class="btn btn-primary" onClick={()=>this.setState({count:1})}>Update Count</button>
      </div>
      
    )
  }

 }


export default App;
