import { Formik, Form, Field } from "formik";
import { object as yupObject, string as yupString } from 'yup';
import { Fragment, useState } from "react";
import { api } from "../../../../services";
import { ErrorMsg } from "../../../../layouts/components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";

function EmailConfirm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);


  const handleClick = async(e) => {
        e.preventDefault()
        const email = localStorage.getItem("email")
        // console.log(typeof(user));
        // console.log(email)
        // console.log(user.email)

        const values = {"email": email};


        setIsLoading(true);
        console.log(values)
        const response = await api
              .service()
              .push("/accounts/manage/resend-activation-email/",values,true)

        if(api.isSuccessful(response)){
          setTimeout(() => {
            toast.success('Resend email successfully!');
            navigate("/conf_email",{replace: true})
          }, 0);
        }
        setIsLoading(false);
  }

    return (
        <Fragment>
<div className="my-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
      <div className="">  
        <div className="text-center">
             <div className="my-3">
                  <Link to="#">
                            <span><img src="/assets/images/fundhill-img.jpg" alt="" height="200" width="200" />  </span>
                          </Link>
                    </div>
                </div>
        </div>
        {/*end diamond*/}
        <div className="text-center col-sm-12" style={{backgroudColor: "#d3d3d3"}}>
          <h3 className="text-danger">Confirm your Email</h3>
          {/* <p className="text-muted">Thanks for signing up!Please check your inbox for a confirmation email. Click the link in the email to confirm your email address.</p> */}
          <p className="text-muted">Please check your inbox for a confirmation email. Click the link in the email to confirm your email address</p>
          <p className="text-muted">After you confirm click Continue</p>
          <div style={{margin: "10px"}}>
          <Link onClick={handleClick} to="/resend_email" style={{fontSize: "20px"}}> Re-send confirmation email</Link>
          </div>
          <div className="button-list" style={{gap: "15px"}}>
          <Link className="btn btn-success waves-effect waves-light" to="/auth/login"> Continue</Link>
          <Link className="btn btn-primary waves-effect waves-light" to="/auth/register"> Back to Sign in</Link>
          </div>
          

        </div>

      </div>
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</div>
{/* end page */}

         
         
    
        </Fragment>
      )
}

export default EmailConfirm