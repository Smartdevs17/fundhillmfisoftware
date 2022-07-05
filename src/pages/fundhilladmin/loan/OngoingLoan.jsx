import { Fragment } from 'react'
import { Link } from "react-router-dom";


function OngoingLoan() {
    return (
        <Fragment>
            {/* Start Page Content here */}
                    {/* ============================================================== */}
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
                                    <li className="breadcrumb-item"><Link to="#">Admin</Link></li>
                                    <li className="breadcrumb-item active">Loan</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Disbursed Loan</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 



                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">Disburse Loan Details</h4>
                              
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> ID </th>
                                    <th> Loan Officer</th>
                                    <th> Client Names </th>
                                    <th> Account Number </th>
                                    <th> Client Contact </th>
                                    <th> Loan ID </th>
                                    <th> Principal </th>
                                    <th> Loan + Interest </th>
                                    <th> Status </th>
                                    <th> Payment Status </th>
                                    <th> Action </th>
       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                           
                                    <td> 23 </td>
                                    <td> Daniel Yusuf </td>
                                    <td> Yakuku John </td>
                                    <td> Account Number </td>
                                    <td> 08080080808 </td>
                                    <td> 123456 </td>
                                    <td>  5000000</td>
                                    <td>  5400000</td>
                                    <td>  approved </td>
                                    <td>  On-going loan </td>
                                    <td>   

                                    <div className="btn-group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action <i className="mdi mdi-chevron-down" />
                                    </button>
                                    <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 38px, 0px)'}}>
                                       
                                    <button id='payloan' type="button" style={{margin: "10px"}} className="btn btn-primary" data-toggle="modal" data-target="#payloanId">
                                    Pay Loan
                                    </button>

                                    <button id='loanhistory' type="button" className="btn btn-success" data-toggle="modal" data-target="#loanhistoryId">
                                    Payment History
                                    </button>

                                    </div>
                                    </div>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div> {/* end row */}


                              {/* Disburse Loan Modal */}
                              <div className="modal fade" id="payloanId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Pay Loan</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                <h4 className="header-title mb-4">Loan Payment Details</h4>
                                                <form action="">

                                                <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Amount</label>
                                                <div className="col-lg-10">
                                                    <input className="form-control" type="text"  id="example-text-input" />
                                                </div>
                                                </div>

                                                <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Date</label>
                                                <div className="col-lg-10">
                                                    <input className="form-control" type="date"  id="example-text-input" />
                                                </div>
                                                </div>

                                         
                                                <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Payment Method
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <select
                                                        className="form-control"
                                                        data-toggle="select2"
                                                        >
                                                        <option>-------</option>
                                                        <option value="Savings">Cash</option>
                                                        <option value="fixed">Wallet</option>
                                          

                                                        </select>
                                                    </div>
                                                    </div>

                         
                                                <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Depositor</label>
                                                <div className="col-lg-10">
                                                    <input className="form-control" type="text"  id="example-text-input" />
                                                </div>
                                                </div>


                                                <div className="form-group row">
                                                <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Description</label>
                                                <div className="col-lg-10">
                                                    <input className="form-control" type="text"  id="example-text-input" />
                                                </div>
                                                </div>


                                                <button type="submit" className="btn btn-primary btn-block">Make payment</button>
                                                </form>

                            
                                                <div className="form-group row"></div>
                                                </div>

                                            </div>
                                            </div>

                        

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>



                                {/* Disburse Loan Modal */}
                                <div className="modal fade" id="loanhistoryId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Pay Loan</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card-box">
                                            <h4 className="header-title">Payment History</h4>
                                            <div className="table-responsive">
                                                <table className="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                    <th>#</th>
                                                    <th>Date</th>
                                                    <th>Amount Paid</th>
                                                    <th>Method</th>
                                                    <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">1</th>
                                                    <td>2022-05-2</td>
                                                    <td>15000</td>
                                                    <td>Cash</td>
                                                    <td> For Loan</td>
                                                    </tr>
                                                
                                                </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        </div>

                        

                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Seen</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>



                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default OngoingLoan