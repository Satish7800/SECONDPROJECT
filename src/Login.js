import { useState } from "react"
function Login(){

    const [userName,setUserName]=useState("");
    const [userPassword,setUserPassword]=useState("");
    const [userErr,setUserError]=useState(false);
    const [passwordErr,setPasswordError]=useState(false);

    function loginHandle(e){
        
        if(userName.length<3 || userPassword.length<3)
        {
            alert("Type correct values");
        }else{
            alert("All Good");
        }
        
        e.preventDefault();
    }

    function userHandler(e){
        let item=e.target.value;
        if(item.length<3){
            setUserError(true);
        }else{
            setUserError(false); 
        }
    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3){
            setPasswordError(true);
        }else{
            setPasswordError(false); 
        }
    }

    return (
        <div>
        <div class="container mt-5 col-sm-4 m-auto"   >
          <div class="card">
            <div class="card-header">Form</div>
          <div class="card-body">
          <form onSubmit={loginHandle}>
          <input class="form-control mb-3" type='text'  placeholder='User Name' onChange={userHandler} />
          {userErr?<span class="text-danger">User is not vailed</span>:""}
          <input class="form-control mb-3" type='password'  placeholder='Password' onChange={passwordHandler} />{passwordErr?<span class="text-danger">Password is not vailed</span>:""}
          <button class="btn btn-primary form-control" type="submit">Login</button> 
          {/* <button class="btn btn-danger m-1">Clear</button>  */}
          </form>
          </div>
          </div>
    </div>
        </div>
    )
       
}
export default Login;