import {Fragment} from 'react'
import {Link} from "react-router-dom"


function EsusuWReciept() {

    const handlePrint = () => {
        window.print()
    }
    return (
        <Fragment>
          <div className="content-page">
            <div className="content">
              {/* Start Content*/}
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box">
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <Link to="#">FundHill</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="#">Admin</Link>
                          </li>
                          <li className="breadcrumb-item active">Recipt</li>
                        </ol>
                      </div>
                      <h4 className="page-title">Esusu Withdrawal Recipts</h4>
                    </div>
                  </div>
                </div>
                {/* end page title */}
  
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    
                  <div className="card">
                        <img className="card-img-top img-fluid" src="/assets/images/small/img-2.jpg" alt="Card image cap" />
                        <div className="card-body">
                        <div className="col-sm-6">
                        <div className="text-left mt-4">
                           
                           <h4>Transaction ID: </h4>
                           <h4>Account No: </h4>
                           <h4>Account Name: </h4>
                           <h4>Transaction type: </h4>
                           <h4>Amount Withdrawn: </h4>
                           <h4>Date: </h4>
                            <hr />
                            <h3> Balance: $ 2930.00 USD</h3>
                        </div>
                        </div>


                        </div>
                      
                        <div className="card-body">
                        <div className="d-print-none">
                        <div className="float-right">
                            <Link onClick={handlePrint} to="#" className="btn btn-dark waves-effect waves-light"><i className="fa fa-print" /></Link>
                            <Link to="#" className="btn btn-primary waves-effect waves-light">Submit</Link>
                        </div>
                        <div className="clearfix" />
                        </div>

                        {/* <Link to="#" className="card-link">Card link</Link>
                        <Link to="#" className="card-link">Another link</Link> */}
                        </div>
                    </div>
                    
                  </div>
                </div>
  
                {/* end row */}
              </div>
              {/* end container-fluid */}
            </div>
          </div>
        </Fragment>
      );
}

export default EsusuWReciept