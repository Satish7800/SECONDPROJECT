import React from "react";
function User(prop){
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={prop.data}>Call data function</button>
        </div>
    )
}

export default User;