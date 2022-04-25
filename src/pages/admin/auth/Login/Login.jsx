// STYLES
import "./Login.css";

import { Fragment, useState,useEffect, useRef,useContext} from "react";
import { Store } from "../../../../services";
import { Link,useNavigate} from "react-router-dom";

import { Context } from "../../../../context/Context";
import axios from "axios"

const $store = new Store();

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch,isFetching } = useContext(Context)
  const [error,setError] = useState(false)

  const handleSubmit = async(e) => {
        e.preventDefault()      
        dispatch({type: "LOGIN_START"})
        setError(false)
        
              if(email.length === 0){
                setEmailError("Email is required.");
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
   

          try{
            setIsLoading(true);
            const res = await axios.post("https://fundhill-api-vd2zk.ondigitalocean.app/accounts/auth/signin/",{
              email: userRef.current.value,
              password: passwordRef.current.value
            });
            console.log(res.data.data)
            localStorage.setItem("token",res?.data?.data?.token)
            // navigate("/admin/dashboard",{replace: true})
            dispatch({type: "LOGIN_SUCCESS",payload: res.data});
            setIsLoading(false);
          }catch(err){
            dispatch({type: "LOGIN_FAILURE"});
            setError(true)
            setIsLoading(false);
          }
        // console.log(username,password,checkBox);

      
  }


  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">
        Login In
      </h5>
     

      <form action="#" className="mt-2" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Enter your Email"
            ref= {userRef}
          />
              {emailError.length > 0 && <div style= {{margin: "5px",color: "red"}} >
              {emailError}
          </div> }
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Enter your password"
            ref={passwordRef}
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
              onChange={(e)  => setCheckBox(e.currentTarget.checked)}
            />
           
            <label className="custom-control-label" for="checkbox-signin">
              Remember me
            </label>
        
          </div>
        </div>

        <div className="form-group text-center">
        {
          isLoading
            ? <div>Loading</div>
            : (<button
            className="btn btn-success btn-block waves-effect waves-light"
            type="submit"
          >
            {" "}
            Log In{" "}
          </button>)
        }
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
