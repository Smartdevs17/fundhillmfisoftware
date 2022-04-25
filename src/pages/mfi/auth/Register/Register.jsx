// STYLES
import "./Register.css";
import { Fragment, useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Store } from "../../../../services";
import axios from "axios";

const $store = new Store();


const Register = () => {

  const [name, setName] = useState("");
  const [nameError,setNameError] = useState("");

  const [logo, setLogo] = useState("");
  const [logoError,setLogoError] = useState("");

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


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
        e.preventDefault()
      ;
        // let usernameValid = false

    //     if(name.length === 0){
    //         setNameError("First name is required.");
    //     }else{
    //         setNameError("")
    //         // usernameValid = true;
    //     }

    //     if(lastname.length === 0){
    //       setLastNameError("Last name is required.");
    //   }else{
    //       setLastNameError("")
    //       // usernameValid = true;
    //   }


    //   if(phone.length === 0){
    //     setPhoneError("Phone number is required.");
    // }else{
    //     setPhoneError("")
    //     // usernameValid = true;
    // }

    //   if(logo.length === 0){
    //     setLogoError("Phone number is required.");
    // }else{
    //     setLogoError("")
    //     // usernameValid = true;
    // }
    //        // let usernameValid = false

    //        if(email.length === 0){
    //         setEmailError("This email is required.");
    //     }else{
    //         setEmailError("")
    //         // usernameValid = true;
    //     }

    //        // let usernameValid = false

    //        if(password.length === 0){
    //         setPasswordError("Password is required.");
    //     }else{
    //         setPasswordError("")
    //         // usernameValid = true;
    //     }

    //        // let usernameValid = false

    //     if(confirmPassword.length === 0){
    //            setConfirmPasswordError("This password is required.");
    //     }
    //     else if(password !==  confirmPassword){
    //       setSamePasswordError("password does not match.");
    //       console.log("Password Does not match")
    //     }
    //     else{
    //         setConfirmPasswordError("")
    //         // usernameValid = true;
    //     }


        // try{
        //   const res = await axios.post("https://fundhill-api-vd2zk.ondigitalocean.app/accounts/manage/signup/",{
        //     "email":email,
        //     "first_name":firstname,
        //     "last_name":lastname,
        //     "password":password,
        //     "phone":phone,
        //     "type":"ADMIN"
        // })
        //    res.data && navigate("/auth/login")
        //  }catch(error){
        //    console.log(error)
        //  }
       //   navigate('/mainpage')
     

    

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
      {/* <input className="form-control" type="text" required placeholder="Enter your username" /> */}
      <form action="#" className="mt-2" onSubmit={handleSubmit} >

                <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      parsley-trigger="change" 
                      placeholder="Company Name"
                      value = {name}
                      onChange={(e)  => setName(e.target.value)}
                    />
                    {nameError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
                        {companynameError}
                    </div> }
                  </div>


                  <div className="form-group mb-3">
                    <input
                    required
                      className="form-control"
                      type="text"
                      parsley-trigger="change" 
                      placeholder="Company Line"
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
                      placeholder="Company Email"
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
                    required
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

                    {samePasswordError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
                        {samePasswordError}

                        
                    </div> }
                  </div>


                 <div className="form-group row">
                      <label
                        htmlFor="example-url-input"
                        className="col-lg-2 col-form-label"
                        value = {address}
                        onChange={(e)  => setAddress(e.target.value)}
                      >
                        Business Address
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Hwolshe"
                          id="example-url-input"
                        />
                      </div>
                    </div>


                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                        value = {logo}
                        onChange={(e)  => setLogo(e.target.value)}
                      >
                        Company Logo
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="file"
                          className="dropify"
                          value = {logo}
                            onChange={(e)  => setLogo(e.target.value)}                        />
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
