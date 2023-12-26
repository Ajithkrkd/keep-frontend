import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../LoginFolder/Login.css'
function Login() {
  return (
    <div className="mainDiv row d-flex">
           <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <form className="col-6 ">
        <h4 className="">Login</h4>
        <div class="form-group my-2">
          <input
            type="email"
            class="form-control"
        
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100 my-3">
          Login
        </button>
        
        <button type="submit" class="btn btn-dark w-100">
        <i className="bx bxl-google mx-2" style={{color:'#fff'}}/>  GOOGLE
        </button>
      </form>
    </div>
  );
}

export default Login;
