import {Fragment} from 'react'
import { Link } from "react-router-dom";



function Transactions() {
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
                                <h4 className="header-title">Responsive example</h4>
                                <p className="sub-header">
                                    Responsive is an extension for DataTables that resolves that problem by optimising the table's layout for different screen sizes through the dynamic insertion and removal of columns from the table.
                                </p>


                                <table id="responsive-datatable" className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                    <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Full Name</th>
                                        <th>Marketer</th>
                                        <th>Account Number</th>
                                        <th>Savings Plan</th>
                                        <th>Telephone</th>
                                        <th>Balance</th>
                                        <th>Transaction</th>
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
                                        <td>$320,800</td>
                                        <td> 
                                        <button id='withdraw' type="button" className="btn btn-outline-primary waves-effect waves-light" data-toggle="modal" data-target="#withdrawId">
                                        Withdraw
                                        </button>        
                                        <button id='deposit' type="button" className="btn btn-outline-success waves-effect waves-light" style={{margin: "10px"}} data-toggle="modal" data-target="#depositId">
                                        Deposit
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
                                <div className="modal fade" id="depositId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Customer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card-box">
                                                <h4 className="header-title mb-4">Deposit</h4>
                                                <form action="">
                                                <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Customer
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="customer 1"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Amount
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="#10000"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Depositor's 
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Depositor"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>  
                            
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Savings Plan
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <select
                                                        className="form-control"
                                                        data-toggle="select2"
                                                        >
                                                        <option>Select SavingsType</option>
                                                        <option value="Savings">Fixed Deposit</option>
                                                        <option value="fixed">Targeted Savings</option>
                                                        <option value="loan">Regular Savings </option>
                                                        <option value="loan">Esusu Savings </option>

                                                        </select>
                                                    </div>
                                                    </div>


                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Reason
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <textarea
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>  

                                                    <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    >
                                                    Credit Account
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

                                     {/* Modal */}
                                <div className="modal fade" id="withdrawId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Customer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card-box">
                                                <h4 className="header-title mb-4">Withdraw</h4>
                                                <form action="">
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Customer
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="customer 1"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Amount
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="#10000"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                                   

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Reason
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <textarea
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>  

                                                    <button
                                                    type="submit"
                                                    className="btn btn-danger"
                                                    >
                                                    Debit Account
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
                        
                </div>
    
        </Fragment>
      )
}

export default Transactions