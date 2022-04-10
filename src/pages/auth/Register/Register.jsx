// STYLES
import "./Register.css";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [usernameError,setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError,setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError,setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError,setConfirmPasswordError] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [checkBoxError,setCheckBoxError] = useState("");


  const handleSubmit = async (e) => {
        e.preventDefault()
      ;
        // let usernameValid = false

        if(username.length === 0){
            setUsernameError("This value is required.");
        }else{
            setUsernameError("")
            // usernameValid = true;
        }

           // let usernameValid = false

           if(email.length === 0){
            setEmailError("This value is required.");
        }else{
            setEmailError("")
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

           if(confirmPassword.length === 0){
            setConfirmPasswordError("This value is required.");
        }else{
            setConfirmPasswordError("")
            // usernameValid = true;
        }

           // let usernameValid = false

           if(checkBox === false){
            setCheckBoxError("This value is required.");
        }else{
            setCheckBoxError("")
            // usernameValid = true;
        }

        console.log(username,email,password,confirmPassword,checkBox);
  }

  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">
        Register
      </h5>
      {/* <input className="form-control" type="text" required placeholder="Enter your username" /> */}
      <form action="#" className="mt-2" onSubmit={handleSubmit} >

      <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            parsley-trigger="change" 
            placeholder="Username"
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
            type="email"
            placeholder="Email"
            value = {email}
            onChange={(e)  => setEmail(e.target.value)}

          />
            {emailError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {emailError}
          </div> }
        </div>
        

        <div className="form-group mb-3">
          <input
            className="form-control"
            type="password"
            required=""
            id="password"
            placeholder="Password"
            value = {password}
            onChange={(e)  => setPassword(e.target.value)}

          />
            {passwordError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {passwordError}
          </div> }
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            type="password"
            required=""
            id="password"
            placeholder="Confirm Password"
            value = {confirmPassword}
            onChange={(e)  => setConfirmPassword(e.target.value)}

          />
            {confirmPasswordError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {confirmPasswordError}
          </div> }
        </div>

        <div className="form-group mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="checkbox-signin"
              value = {checkBox}
              onChange={(e)  => setCheckBox(e.currentTarget.checked)}
            />
          
            <label className="custom-control-label" for="checkbox-signin">
              Remember me
            </label>
            {checkBoxError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {checkBoxError}
          </div> }
          </div>
        </div>

        <div className="form-group text-center">
          <button
            className="btn btn-success btn-block waves-effect waves-light"
            type="submit"

          >
            {" "}
            Register
          </button>
        </div>

        <Link to="#" className="text-muted">
          <i className="mdi mdi-lock mr-1"></i> Forgot your password?
        </Link>
        <div className="form-group">
          <Link to="/auth/login" className="text-muted">
            {" "}
            Have an account? Login
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
