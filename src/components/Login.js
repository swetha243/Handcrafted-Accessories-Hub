import React from "react";

function Login() {
  return (
    <div style={{textAlign:"center", padding:"60px"}}>

      <h1>Login</h1>

      <input 
        type="text" 
        placeholder="Enter Username"
        style={{padding:"8px", margin:"10px"}}
      />
      <br/>

      <input 
        type="password" 
        placeholder="Enter Password"
        style={{padding:"8px", margin:"10px"}}
      />
      <br/>

      <button style={{padding:"20px", marginTop:"10px"}}>
        Login
      </button>

    </div>
  );
}

export default Login;