import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

class App extends React.Component
 {
  constructor(){
    super();
   this.state={
    data:"Satish"
   }
    
  }
  render(){

    return(
      <div class="btn btn-primary ">Hello : {this.state.data}</div>
    )
  }

 }

// function App() {

 
//   return (
//     <div className="App" >
        
//     </div>
//   );
// }

export default App;
