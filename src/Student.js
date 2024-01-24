import React from "react";

class Student extends React.Component {
  
    componentWillUnmount()
    {
        alert("Hello Will Unmount");
    }
    render (){
        return(
            <div>
                <h1>Student Component</h1>
            </div>
        )
    }
   
}

export default Student;