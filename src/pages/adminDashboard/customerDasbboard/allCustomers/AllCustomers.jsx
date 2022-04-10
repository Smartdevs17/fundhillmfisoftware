import {Fragment} from 'react'
import { Link} from "react-router-dom"

function AllCustomers() {
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
                            <h4 className="page-title">Current Customers</h4>
                        </div>
                        </div>
                    </div>     

                    {/* end page title */} 
                    
                    <div className="row">
                        <div className="col-12">
                        <div className="card-box">
                            <h4 className="header-title">All Customers</h4>
                            <p className="sub-header">
                            This Table is meant to Display all the Customers 
                            </p>
                            <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                            <thead>
                                <tr>
                                <th>Full Name</th>
                                <th>Email </th>
                                <th>Telephone</th>
                                <th>Savings Plan</th>
                                <th>Balance</th>
                                <th>Marketer</th>
                                <th>Action</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                               <tr>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
                                   <td></td>
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

export default AllCustomers