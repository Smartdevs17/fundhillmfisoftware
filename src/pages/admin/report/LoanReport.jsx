import { Fragment } from 'react'
import { Link } from "react-router-dom";

function LoanReport() {
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
                                    <li className="breadcrumb-item active">Report</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Total Loan Paid Today</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 





                             <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                    <h4 className="header-title">Loans</h4>
                                 
                                    <table id="datatable-buttons" className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                    <thead>
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Customer</th>
                                        <th>Marketer</th>
                                        <th>Account Number</th>
                                        <th>Description</th>
                                    </tr>
                                    </thead>
                                        <tbody>
                                      <tr>
                                        <td> 1 </td>
                                        <td>Tiger Nixon</td>
                                        <td>John Bull</td>
                                        <td>1234567890</td>
                                        <td>Esusu</td>
                                        <td>08076895837</td>
                                        <td>$320,800</td>
                                

                                    </tr>
                                    
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>
                                {/* end row */}
                                    
                              </div>
                        </div>
                        
                </div>
    
        </Fragment>
      )
}

export default LoanReport