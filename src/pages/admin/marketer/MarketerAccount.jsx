import { Fragment, } from 'react'
import { Link } from "react-router-dom";


function MarketerAccount() {



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
                                    <li className="breadcrumb-item active">Marketer</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All Marketers With Customers</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 





                             <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                    <h4 className="header-title">Maketers</h4>
                                    <table  className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                    <thead>
                                    <tr>
                                        <th>Marketer ID</th>
                                        <th>Full Name</th>
                                        <th>Telephone</th>
                                        <th>No. of Customers</th>
                                        <th>Total Amount</th>
                                        <th>Branch</th>
                                        <th>Action</th>
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
                                        <td>
                                        <button type="button" className="btn btn-primary"><Link to="/admin/dashboard/view_customer">View</Link></button>
                                        </td>                                

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

export default MarketerAccount