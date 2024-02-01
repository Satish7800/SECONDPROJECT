import React, { useEffect, useState } from "react";
function User(prop){
    useEffect(()=>{
        alert('UseEffect '+prop.count);
    },[prop.count]);
    return(
        <div>
           <h1>Count Props:{prop.count}</h1>
           <h1>Data Props:{prop.data}</h1>
        </div>
    )
}

export default User;