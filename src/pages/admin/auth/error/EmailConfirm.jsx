import { Fragment } from 'react'
import { Link } from "react-router-dom";

function EmailConfirm() {


  const handleClick = (e) => {
        e.preventDefault()
        const user = localStorage.getItem("user")
        console.log(typeof(user));
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
                            <span><img src="/assets/images/logo-sm.jpg" alt="" height={28} />  </span>
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