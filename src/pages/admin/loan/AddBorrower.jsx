import {Fragment} from 'react'
import { Link } from "react-router-dom";


function AddBorrower() {
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
                                <h4 className="page-title">Customer</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">Add Borrower</h4>
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
                                    <th> Group Loan </th>
                                    <th> Single Loan </th>
                                    {/* <th></th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Joshua Adetunde</td>
                                    <td>08000041124</td>
                                    <td>joshuaayetunde@gmail.com</td>
                                    <td>
                                    <div className="checkbox checkbox-primary checkbox-single">
                                    <input type="checkbox" id="singleCheckbox2" defaultValue="option2" defaultChecked aria-label="Single checkbox Two" />
                                    <label />
                                    </div>

                                    </td>
                                    <td>
                                    {/* Button trigger modal */}
                                    <button id='addloan' type="button" className="btn btn-primary" data-toggle="modal" data-target="#addloanId">
                                    Assign Loan
                                    </button>

                                    </td>
                                    {/* <td> <button type="button" className="btn btn-primary"> <Link to="/admin/dashboard/updatecustomer" style={{color: "#fff"}}> Update </Link> </button> </td> */}
                                    </tr>
                                </tbody>
                                </table>


                                {/* Add New Borrower Modal */}
                                <div className="modal fade" id="addloanId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Add New Borrower</h4>
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
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Branch
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <select className="form-control" data-toggle="select2" >
                                                        <option>-- Select Branch--</option>
                                                        <option value={"branck two"}>Branch 1</option>
                                                        <option value={"branck one"}>Branck 2</option>
                                                        </select>
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Loan Officer
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <select className="form-control" data-toggle="select2" >
                                                        <option>Select One</option>
                                                        <option value={"Marketer One"}>Marketer 1</option>
                                                        <option value={"Marketer Two"}>Marketer 2</option>
                                                        <option value={"Marketer Three"}>Marketer 3</option>
                                                        </select>
                                                    </div>
                                                    </div>
                            

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Catergory
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <select className="form-control" data-toggle="select2" >
                                                        <option>Select One</option>
                                                        <option value={"flat"}>Flat</option>
                                                        <option value={"reducing balance"}>Reducing Balance</option>
                                                        </select>
                                                    </div>
                                                    </div>


                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Loan Product
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <select className="form-control" data-toggle="select2" >
                                                        <option>Select One</option>
                                                        <option value={"student"}>Student Loan</option>
                                                        <option value={"bussiness"}>Bussiness Loan</option>
                                                        <option value={"work"}>Work Loan</option>
                                                        </select>
                                                    </div>
                                                    </div>

                                     

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-search-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Loan Amount
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="#1000000"
                                                        id="example-search-input"
                                                        />
                                                    </div>
                                                    </div>


                                                    <div className="form-group row">
                                                        <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Repayment Period</label>
                                                        <div className="col-lg-10">
                                                            <select className="form-control" data-toggle="select2">
                                                                    <option>Select One</option>
                                                                        <option value="Savings">Daily</option>
                                                                        <option value="fixed">Weekly</option>
                                                                        <option value="biweekly">Biweekly</option>
                                                                        <option value="loan">Monthly</option>
                                                                </select>
                                                        </div>
                                                        
                                                        </div>

                                                        <div className="form-group row">
                                                        <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Loan Period</label>
                                                        <div className="col-lg-10">
                                                            <select className="form-control" data-toggle="select2">
                                                                    <option>Select One</option>
                                                                        <option value="Savings">1</option>
                                                                        <option value="fixed">2</option>
                                                                        <option value="biweekly">3</option>
                                                                        <option value="loan">4</option>               
                                                                        <option value="Savings">5</option>
                                                                

                                                                </select>
                                                        </div>
                                                        
                                                        </div>


                                                    <div className="form-group row">
                                                    <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Payment Schedule</label>
                                                    <div className="col-lg-10">
                                                        <select className="form-control" data-toggle="select2">
                                                                <option>Select One</option>
                                                                    <option value="Savings">Manuel Payment</option>
                                                                    <option value="fixed">System auto Debit</option>
                                                            </select>
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


       
                            </div>
                            </div>
                        </div> {/* end row */}
                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default AddBorrower