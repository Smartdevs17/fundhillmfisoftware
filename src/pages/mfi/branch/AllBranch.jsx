import {Fragment} from 'react'
import { Link } from "react-router-dom";

function AllBranch() {


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
                                    <li className="breadcrumb-item active">All Branches</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Branch</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Collections of Branches</h4>
                                <p className="sub-header">
                                All The Branches that belong to the organisation.
                                </p>
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th>Branch ID</th>
                                    <th>Branch Name </th>
                                    <th>Branch Location</th>
                                    <th>Head of Branch</th>
                                    <th>Action</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Branch-1</td>
                                    <td>Tudun Wada Branch</td>
                                    <td>Tudun wada</td>
                                    <td>Mustafa Yahaya</td>
                                    <td>
                                    {/* Button trigger modal */}
                                    <button id='branch' type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                                    View
                                    </button>


                                    </td>
                                    <td> <button type="button" className="btn btn-primary"> <Link to="/admin/dashboard/updatebranch" style={{color: "#fff"}}> Update </Link> </button> </td>
                                    </tr>
                                </tbody>
                                </table>


                            {/* Modal */}
                                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Branch ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container-fluid">
                                            <div className="card">

                                                <div className="card-body">
                                                    <h5 className="card-title">Branch Name: </h5>
                                                    <p className="card-text">Branch Head: </p>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">Branch Location: </li>
                                                    {/* <li className="list-group-item">Branch </li> */}
                                                </ul>
                                                <div className="card-body">
                                                    <button type="button" style={{margin: "10px"}}  className="btn btn-danger"> <Link  style={{color: "#fff"}} to="#" > Delete </Link> </button>     
                                                    {/* <button type="button" className="btn btn-primary"> <Link to="/admin/dashboard/updatebranch" style={{color: "#fff"}}> Update </Link> </button> */}

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

export default AllBranch