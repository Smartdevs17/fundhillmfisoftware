import {Fragment,useEffect } from 'react'
import { Link} from "react-router-dom";
import "./Dashboard.css"

function Dashboard() {

  useEffect(() => {
    //  window.location.reload() 
  },[]);
  

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
                                <li className="breadcrumb-item"><Link to="#">FundHill</Link></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                              </ol>
                            </div>
                            <h4 className="page-title">Dashboard</h4>
                          </div>
                        </div>
                      </div>     
                      {/* end page title */} 

                      
                      <div className="row">
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-layers float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total Deposit</h6>
                            <h3 className="my-3">#<span data-plugin="counterup">67,545</span></h3>
                            <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/staff/dashboard/deposit_report">See more</Link></button></span>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-paypal float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total WithDrawals</h6>
                            <h3 className="my-3">#<span data-plugin="counterup">46,782</span></h3>
                            <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/staff/dashboard/withdrawal_report">See more</Link></button></span>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-chart float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total Loans</h6>
                            <h3 className="my-3">#<span data-plugin="counterup">155,990</span></h3>
                            <span className="badge badge-pink mr-1"> 0% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/staff/dashboard/ongoing_loan">See more</Link></button></span>
                          </div>
                        </div>
             
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">All Customer</h6>
                            <h3 className="my-3" data-plugin="counterup">42,760</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/staff/dashboard/allcustomer">See more</Link></button></span>
                          </div>
                        </div>


                        
                          <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Unpaid Loan</h6>
                            <h3 className="my-3">#<span data-plugin="counterup">90,722</span></h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                          </div>
                        </div> 



                        
                        <div className="col-md-6 col-xl-3">
                          <div className="card-box tilebox-one">
                            <i className="icon-rocket float-right m-0 h2 text-muted" />
                            <h6 className="text-muted text-uppercase mt-0">Total fixed Savings</h6>
                            <h3 className="my-3" data-plugin="counterup">56,897</h3>
                            <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/staff/dashboard/fixed_savings_report">See more</Link></button></span>
                          </div>
                        </div>

                      </div>
                      {/* end row */}




                    </div>
                     {/* end container-fluid */}
                  </div>
                   {/* end content */}
 
                  </div>
                 

              

    </Fragment>
    
  )
}

export default Dashboard