// STYLES
import "./Register.css";
import { Fragment, useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Store } from "../../../../services";
import axios from "axios";

const $store = new Store();


const Register = () => {
  // const [username, setUsername] = useState("");
  // const [usernameError,setUsernameError] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailError,setEmailError] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordError,setPasswordError] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [confirmPasswordError,setConfirmPasswordError] = useState("");
  // const [checkBox, setCheckBox] = useState(false);
  // const [samePasswordError,setSamePasswordError] = useState("");


  const [firstname, setFirstName] = useState("");
  const [firstnameError,setFirstNameError] = useState("");

  const [lastname, setLastName] = useState("");
  const [lastnameError,setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError,setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError,setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError,setPasswordError] = useState("");


  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError,setConfirmPasswordError] = useState("");


  const [checkBox, setCheckBox] = useState(false);
  const [samePasswordError,setSamePasswordError] = useState("");

  const [success,setSuccess] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
        e.preventDefault()
      ;
        // let usernameValid = false

        if(firstname.length === 0){
            setFirstNameError("First name is required.");
        }else{
            setFirstNameError("")
            // usernameValid = true;
        }

        if(lastname.length === 0){
          setLastNameError("Last name is required.");
      }else{
          setLastNameError("")
          // usernameValid = true;
      }


      if(phone.length === 0){
        setPhoneError("Phone number is required.");
    }else{
        setPhoneError("")
        // usernameValid = true;
    }

           // let usernameValid = false

           if(email.length === 0){
            setEmailError("This email is required.");
        }else{
            setEmailError("")
            // usernameValid = true;
        }

           // let usernameValid = false

           if(password.length === 0){
            setPasswordError("Password is required.");
        }else{
            setPasswordError("")
            // usernameValid = true;
        }

           // let usernameValid = false

        if(confirmPassword.length === 0){
               setConfirmPasswordError("This password is required.");
        }
        else if(password !==  confirmPassword){
          setSamePasswordError("password does not match.");
          console.log("Password Does not match")
        }
        else{
            setConfirmPasswordError("")
            // usernameValid = true;
        }

        // console.log(firstname)
            // navigate("/conf_email")
        setSuccess(true)


        try{
          const res = await axios.post("https://fundhill-api-vd2zk.ondigitalocean.app/accounts/manage/signup/",{
            "email":email,
            "first_name":firstname,
            "last_name":lastname,
            "password":password,
            "phone":phone,
            "type":"ADMIN"
        })
          //  res.data && navigate("/conf_email")
          if(res.ok){
            // setSuccess(true)
            navigate("/conf_email")
          }
         }catch(error){
           console.log(error)
         }
     

    

  }

  // const register = () => {
  //   $store.pushToStore("user", {
  //     name: username,
  //     checkbox: checkBox,
  //     password: password,
  //     email: email,
  //   });
  // };

  // useEffect(() => {
  //   register();
  // }, []);

  return (
    <Fragment>  
      <h5 className="text-muted text-center text-uppercase py-3 font-16">
        Register
      </h5>


      <form action="#" className="mt-2" onSubmit={handleSubmit} >

      <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            parsley-trigger="change" 
            placeholder="John"
            value = {firstname}
            onChange={(e)  => setFirstName(e.target.value)}
          />
          {firstnameError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {firstnameError}
          </div> }
        </div>


        <div className="form-group mb-3">
          <input
          required
            className="form-control"
            type="text"
            parsley-trigger="change" 
            placeholder="Bull"
            value = {lastname}
            onChange={(e)  => setLastName(e.target.value)}
          />
          {lastnameError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {lastnameError}
          </div> }
        </div>


        <div className="form-group mb-3">
          <input
          required
            className="form-control"
            type="text"
            parsley-trigger="change" 
            placeholder="(+234)-555-5555-5555"
            value = {phone}
            onChange={(e)  => setPhone(e.target.value)}
          />
          {phoneError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {phoneError}
          </div> }
        </div>


        <div className="form-group mb-3">
          <input
          required
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
          required
            className="form-control"
            type="password"
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
          required
            className="form-control"
            type="password"
            id="password"
            placeholder="Confirm Password"
            value = {confirmPassword}
            onChange={(e)  => setConfirmPassword(e.target.value)}

          />
            {confirmPasswordError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {confirmPasswordError}

              
          </div> }

          {samePasswordError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {samePasswordError}

              
          </div> }
        </div>

        <div className="form-group mb-3">
          <div className="custom-control custom-checkbox">
            <input
            r
              type="checkbox"
              className="custom-control-input"
              id="checkbox-signin"
              value = {checkBox}
              onChange={(e)  => setCheckBox(e.currentTarget.checked)}

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
           
            {/* Register */}
            {success ?  <i className="mdi mdi-36px mdi-spin mdi-loading" />: "Register" }

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
