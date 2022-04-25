import { Fragment } from 'react'
import { Link } from "react-router-dom";


function AccountStatement() {
    return (
        <Fragment>
            {/* Start Page Content here */}
                    {/* ============================================================== */}
                    <div className="content-page">
                    <div className="content">
    
    
                        {/* Start Content*/}
                        <div className="container-fluid">
    
             



                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                
                                        <h4 className="header-title">Account Balance Report</h4>
                                                            <p className="sub-header">
                                                                This is a Your Current Transactions
                                                            </p>
                                <table id="datatable-buttons" className="table table-striped table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                    
                                <thead>
                                    <tr>
                                    <th> Trans-ID</th>
                                    <th> Full Name</th>
                                    <th> Account No. </th>
                                    <th> Type </th>
                                    <th> Amount </th>
                                    <th> Balance </th>
                                    <th> Desc</th>
                                    <th> Branch </th>
                                    <th> Charges </th>
                                    <th> Date </th>
                                    <th> Status </th>
                                    <th> Payment Status </th>
                                    <th> Session </th>
       
                                    </tr>
                                </thead>
                            <tbody>
                            <tr>
                           
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
                           <td> Account  </td>
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

export default AccountStatement