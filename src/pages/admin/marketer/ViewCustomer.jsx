import { Fragment, } from 'react'
import { Link } from "react-router-dom";

function ViewCustomer() {
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
                                    <li className="breadcrumb-item active">All Customers</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All Marketer Customers</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 



                             <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                    <h4 className="header-title">Marketer Name: </h4>
                                    <p className="sub-header">
                                        The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can built.
                                    </p>
                                    <table id="datatable-buttons" className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                    <thead>
                                    <tr>
                                        <th>Customer ID</th>
                                        <th>Customer</th>
                                        <th>Telephone</th>
                                        <th>Branch</th>
                                        <th>Account Number</th>
                                        <th>Savings Plan</th>
                                        <th>Account Balance</th>
                                    </tr>
                                    </thead>
                                        <tbody>
                                      <tr>
                                        <td> 1 </td>
                                        <td>John Bull</td>
                                        <td>08076390837</td>
                                        <th>Tudun Branch</th>
                                        <td>1234567890</td>
                                        <td>Esusu</td>
                                        <td>$320,800</td>  
                                    </tr>
                                    <tr>
                                        <td> 2 </td>
                                        <td>Emeka Yusuf</td>
                                        <td>08076895837</td>
                                        <th>Tudun Branch</th>
                                        <td>1234567890</td>
                                        <td>Loan</td>
                                        <td>$120,800</td>  
                                    </tr>
                                    <tr>
                                        <td> 3 </td>
                                        <td>John Philipd</td>
                                        <td>08076895837</td>
                                        <th>Tudun Branch</th>
                                        <td>1234567890</td>
                                        <td>Fixed Deposit</td>
                                        <td>$560,800</td>  
                                    </tr>
                                    <tr>
                                        <td> 4 </td>
                                        <td>Ruth bulus</td>
                                        <td>08076895837</td>
                                        <th>Tudun Branch</th>
                                        <td>1234567890</td>
                                        <td>Targeted Saings</td>
                                        <td>$490,700</td>  
                                    </tr>
                                    <tr>
                                        <td> 5 </td>
                                        <td>Mafeng Akans</td>
                                        <td>08076895837</td>
                                        <th>Tudun Branch</th>
                                        <td>1234567890</td>
                                        <td>Reguar savings</td>
                                        <td>$320,800</td>  
                                    </tr>  
                                    <tr>
                                        <td> 6 </td>
                                        <td>Stepehen John</td>
                                        <td>08076895837</td>
                                        <th>Tudun Branch</th>
                                        <td>1234567890</td>
                                        <td>Targeted Savings</td>
                                        <td>$230,800</td>  
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

export default ViewCustomer