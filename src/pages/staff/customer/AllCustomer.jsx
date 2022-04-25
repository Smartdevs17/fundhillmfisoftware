import {Fragment} from 'react'
import { Link } from "react-router-dom";


function AllCustomer() {
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
                                <h4 className="page-title">Customer</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Customers</h4>
                                <p className="sub-header">
                                All Customers and Clients of the MFI.
                                </p>
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> ID </th>
                                    <th> Full Name </th>
                                    <th> Telephone</th>
                                    <th> Email </th>
                                    <th> Savings Plan</th>
                                    <th> Marketer</th>
                                    <th> Branch </th>
                                    <th> Status </th>
                                    <th> Action </th>
                                    {/* <th></th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Joshua Adetunde</td>
                                    <td>08000041124</td>
                                    <td>joshuaayetunde@gmail.com</td>
                                    <td>Target Savings</td>
                                    <td> Gabriel Staff </td>
                                    <td> Ekiti Branch </td>
                                    <td> <button type="button" className="btn btn-danger"> <Link to="#" style={{color: "#fff"}}> Approved </Link> </button> </td>
                                    <td>
                                    {/* Button trigger modal */}
                                    <button id='branch' type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                                    View
                                    </button>


                                    </td>
                                    {/* <td> <button type="button" className="btn btn-primary"> <Link to="/admin/dashboard/updatecustomer" style={{color: "#fff"}}> Update </Link> </button> </td> */}
                                    </tr>
                                </tbody>
                                </table>


                            {/* Modal */}
                                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Customer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container-fluid">


                                            <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Acount Number: </h5>
                                                <h5 className="card-title ">Full Name: </h5>
                                                <h5 className="card-title">Telephone: </h5>
                                                <h5 className="card-title">Savings Plan: </h5>
                                            </div>
                                            <img className="img-fluid" src="/assets/images/small/img-12.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                           

                                                    {/* <button type="button" style={{margin: "10px"}}  className="btn btn-primary"> <Link  style={{color: "#fff"}} to="#" > Activate </Link> </button>      */}
                                                    <button type="button" className="btn btn-danger"> <Link to="#" style={{color: "#fff"}}> Delete </Link> </button>
                                            </div>
                                            </div>

               

                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>




       
                            </div>
                            </div>
                        </div> {/* end row */}
                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default AllCustomer