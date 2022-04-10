// STYLES
import "./Login.css";

import { Fragment, useState, useEffect } from "react";
import { Store } from "../../../services";
import { Link } from "react-router-dom";
const $store = new Store();

const Login = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const handleSubmit = (e) => {
        e.preventDefault()      
              // let usernameValid = false

              if(username.length === 0){
                setUsernameError("This value is required.");
            }else{
                setUsernameError("")
                // usernameValid = true;
            }
    
  
               // let usernameValid = false
    
               if(password.length === 0){
                setPasswordError("This value is required.");
            }else{
                setPasswordError("")
                // usernameValid = true;
            }

               // let usernameValid = false

        //    if(checkBox === false){
        //     setCheckBoxError("This value is required.");
        // }else{
        //     setCheckBoxError("")
        //     // usernameValid = true;
        // }

        console.log(username,password,checkBox);
  }
  const login = () => {
    $store.pushToStore("user", {
      name: "text",
      checkbox: "text",
      password: "text",
    });
  };

  useEffect(() => {
    login();
  }, []);
  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">
        Login In
      </h5>
      {/* <input className="form-control" type="text" required placeholder="Enter your username" />
      <input class="form-control" type="password" required="" id="password" placeholder="Enter your password"/> */}

      <form action="#" className="mt-2" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter your username"
            value = {username}
            onChange={(e)  => setUsername(e.target.value)}         
          />
              {usernameError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {usernameError}
          </div> }
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Enter your password"
            value = {password}
            onChange={(e)  => setPassword(e.target.value)}
          />
              {passwordError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {passwordError}
          </div> }
        </div>

        <div className="form-group mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="checkbox-signin"
              value = {checkBox}
              onChange={(e)  => setCheckBox(e.currentTarget.value)}
            />
           
            <label className="custom-control-label" for="checkbox-signin">
              Remember me
            </label>
        
          </div>
        </div>

        <div className="form-group text-center">
          <button
            className="btn btn-success btn-block waves-effect waves-light"
            type="submit"
          >
            {" "}
            Log In{" "}
          </button>
        </div>

        <Link to="#" className="text-muted">
          <i className="mdi mdi-lock mr-1"></i> Forgot your password?
        </Link>

        <div className="form-group">
          <Link to="/auth/register" className="text-muted">
            {" "}
            Don't have an account Yet?Register
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
