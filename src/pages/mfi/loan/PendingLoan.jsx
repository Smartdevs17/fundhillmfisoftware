import { Fragment } from 'react'
import { Link } from "react-router-dom";

function PendingLoan() {
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
                                <h4 className="page-title">Pending Loan</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Pending Loans</h4>
                                <p className="sub-header">
                                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: <code>$().DataTable();</code>.
                                </p>

                                <table id="" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> ID</th>
                                    <th> Full Names</th>
                                    <th> Amount + Interest </th>
                                    <th> Account No. </th>
                                    <th> Product </th>
                                    <th> Payback Date </th>
                                    <th> Date </th>
                                    <th> Status </th>
                                    <th> Payment Status </th>
                                    <th> Action </th>
       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Donald Trump</td>
                                    <td>#1200000</td>
                                    <td>1234567889</td>
                                    <td>Product 1</td>
                                    <td>2 Jan 2022</td>
                                    <td>4 Oct 2022</td>
                                    <td>Fixed</td>
                                    <td>Not Approved</td>
                                    <td>

                                    <div className="btn-group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action <i className="mdi mdi-chevron-down" />
                                    </button>
                                    <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 38px, 0px)'}}>
                                       
                                        <button id="approve-loan" type="button" className="dropdown-item btn btn-outline-success waves-effect waves-light" >
                                        Approve Loan
                                        </button>        
                                        {/* <button type="button" className="btn btn-danger" id="sa-warning">Delete</button>                               */}

                                         <button id='reject-loan' type="button" className=" dropdown-item btn btn-outline-danger waves-effect waves-light" >
                                        Reject Loan
                                        </button>

                                        <button id="delete-loan" type="button" className=" dropdown-item btn btn-outline-danger waves-effect waves-light">
                                            Delete
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
                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default PendingLoan