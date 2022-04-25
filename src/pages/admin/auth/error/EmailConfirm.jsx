import { Fragment } from 'react'
import { Link } from "react-router-dom";

function EmailConfirm() {

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
        <div className="text-center">
          <h3 className="text-danger">Confirm your Email</h3>
          <p className="text-muted">Thanks for signing up!Please check your inbox for a confirmation email. Click the link in the email to confirm your email address.</p>
          <div className="button-list">
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