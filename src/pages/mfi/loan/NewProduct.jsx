import {Fragment} from 'react'
import { Link } from "react-router-dom";


function NewProduct() {
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
                                <h4 className="page-title">Loan Product</h4>
                            
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Loan Products</h4>
                               
                                <button id='product' type="button" className="btn btn-primary sub-header" data-toggle="modal" data-target="#productId">
                                    Add Product
                                </button>
                                <table id="" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>

                                <thead>
                                    <tr>
                                    <th> ID </th>
                                    <th> Product </th>
                                    <th> Interest (%) </th>
                                    <th> MGT Charges (%) </th>
                                    <th> Action </th>
                                    {/* <th></th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Student Loan</td>
                                    <td>10</td>
                                    <td>5</td>
                                    <td> 
                                    <button id='editproduct' style={{margin: "10px"}} type="button" className="btn btn-primary" data-toggle="modal" data-target="#editproductId">
                                        Edit
                                    </button>      

                                    <button type="button" className="btn btn-danger" id="sa-warning">Delete</button>                              
                                     </td>
                                    
                                    </tr>
                                </tbody>
                                </table>


                              {/* Add Loan Product Modal */}
                              <div className="modal fade" id="productId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Add New Product</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                <h4 className="header-title mb-4">Product</h4>
                                                <form action="">
                                            
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Product Name
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="StudentLoan"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Product Interest (%)
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="10"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Mgt Charges (%)
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="10"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>
                            

                                                    <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    >
                                                    Add
                                                    </button>
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


                              {/* Edit Product Modal */}
                              <div className="modal fade" id="editproductId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Edit Product</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                <h4 className="header-title mb-4">Product</h4>
                                                <form action="">
                                            
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Product Name
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="StudentLoan"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Product Interest (%)
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="5"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Mgt Charges (%)
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="5"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>
                            

                                                    <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    >
                                                    Update
                                                    </button>
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


       
                            </div>
                            </div>
                        </div> {/* end row */}

                     
                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default NewProduct