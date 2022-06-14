import { Formik, Form, Field } from "formik";
import { object as yupObject, string as yupString } from 'yup';
import { Fragment, useState } from "react";
import { api } from "../../../services";
import { ErrorMsg } from "../../../layouts/components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";


// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const witdrawFormState = () => ({
    customer: "",
    amount: "",
    reason: "",
    user_role: "ADMIN"
  });
  


const validationSchema = yupObject().shape({
    customer: yupString()
    .required("Customer is required"),
    email: yupString()
    .email("Invalid email")
    .required("Email is required"),
    phone: yupString()
    .required("Phone Number is required"),
    password: yupString()
    .required("Password is required"),
  });



function EsusuTransaction() {
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
                                    <li className="breadcrumb-item active">Esusu</li>
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
                                <h4 className="header-title">Perform any Transactions here</h4>
                    
                                <table  className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
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
                                                        Esus Plan
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <select
                                                        className="form-control"
                                                        data-toggle="select2"
                                                        >
                                                        <option>Select SavingsType</option>
                                                        <option value="Savings">Daily</option>
                                                        <option value="fixed">Weekly</option>
                                                        <option value="loan">Monthly</option>
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

                                



                            

                            <div className="modal fade" id="withdrawId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                            <div class="modal-dialog">

                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Withdraw</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Customer:</label>
                                        <input type="text" class="form-control" id="recipient-name"/ >
                                    </div>

                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Amount:</label>
                                        <input type="text" class="form-control" id="recipient-name"/ >
                                    </div>

                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Reason:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>

                                    <button type="submit" class="btn btn-danger btn-lg">Debit Account</button>

                                    </form>
                                </div>
                                {/* <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                </div> */}

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

export default EsusuTransaction