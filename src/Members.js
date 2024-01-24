import React from "react";
function Members(prop){
    return(
        <div>
            <h1>Member Component</h1>
            <button onClick={prop.data}>Call data function</button>
        </div>
    )
}

export default Members;