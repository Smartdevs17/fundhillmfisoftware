import { Fragment, } from 'react'
import { Link } from "react-router-dom";

function AllMarketer() {
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
                                <h4 className="page-title">All Marketers</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 





                             <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                    <h4 className="header-title">Maketers</h4>
        
                                    <table id="datatable-buttons" className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                    <thead>
                                    <tr>
                                        <th>Marketer ID</th>
                                        <th>Full Name</th>
                                        <th>Telephone</th>
                                        <th>Email</th>
                                        <th>Branch</th>
                                        <th>Role</th>
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
                                        {/* Button trigger modal */}
                                        <button id='marketer' type="button" className="btn btn-primary" data-toggle="modal" data-target="#marketerId">
                                        View
                                        </button>
                                        </td>                                

                                    </tr>
                                    
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                </div>
                                {/* end row */}



                                    {/* Modal */}
                                    <div className="modal fade" id="marketerId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Marketer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        {/* <div className="modal-body"> */}
                                            <div className="modal-content">


                                            <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title ">Full Name: </h5>
                                                <h5 className="card-title">Telephone: </h5>
                                                <h5 className="card-title">Email: </h5>
                                                <h5 className="card-title">Role: </h5>
                                                <h5 className="card-title">Branch: </h5>

                                            </div>
                                            <img className="img-fluid" src="/assets/images/small/img-12.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                           
                                                    <button type="button" style={{margin: "10px"}}  className="btn btn-primary"> <Link  style={{color: "#fff"}} to="#" > Update </Link> </button>     
                                                    <button type="button" className="btn btn-danger"> <Link to="#" style={{color: "#fff"}}> Delete </Link> </button>
                                            </div>
                                            </div>


                                            </div>
                                        {/* </div> */}
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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

export default AllMarketer