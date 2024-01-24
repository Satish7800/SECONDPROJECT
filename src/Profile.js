import { useState } from "react"
function Profile(){

    const [loggedin,setLoggedin]=useState(1);

    return (
        <div>
        {
        loggedin==1?<h1>Welcome User 1</h1>
        :loggedin==2?<h1>Welcome user 2</h1>
        :<h1>Welcome user 3</h1>
       }
        </div>
    )
       
}
export default Profile;