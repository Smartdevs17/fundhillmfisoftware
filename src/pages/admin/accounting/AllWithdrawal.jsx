import { Fragment,useState } from 'react'
import { Link } from "react-router-dom";
import {Formik,Form,Field} from "formik";
import {object as yupObject, string as yupString} from "yup";
import {ErrorMsg} from "../../../layouts/components";
import { api  } from "../../../services";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";
import {Context} from "../../../context/Context";

function AllWithdrawal() {

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");


   const handleSubmit = (e) => {
        e.preventDefault()
  
        console.log(fromDate,toDate)
  
    }

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
                                    <li className="breadcrumb-item active">Account</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All Customer WithDrawal</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 


                        {/* Search */}
                        
                        <div className="row">
                        <div className="col-12">
                            <div className="card-box">
                            <h4 className="header-title mb-4">Search Date Transaction</h4>
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                <label
                                    htmlFor="example-text-input"
                                    className="col-lg-2 col-form-label"
                                >
                                    From
                                </label>
                                <div className="col-lg-10">
                                    <input
                                    className="form-control"
                                    type="date"
                                    id="example-text-input"
                                    onChange={e => setFromDate(e.target.value)}
                                    />
                                </div>
                                </div>

                                <div className="form-group row">
                                <label
                                    htmlFor="example-search-input"
                                    className="col-lg-2 col-form-label"
                                >
                                    To
                                </label>
                                <div className="col-lg-10">
                                    <input
                                    className="form-control"
                                    type="date"
                                    id="example-search-input"
                                    onChange={e => setToDate(e.target.value)}
                                    />
                                </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">
                                Search
                                </button>
                            </form>
                            </div>
                        </div>
                        </div>



                             <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                    <h4 className="header-title">All WithDrawals</h4>
                                    <table id="datatable-buttons" className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                    <thead>
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Customer</th>
                                        <th>Marketer</th>
                                        <th>Account Number</th>
                                        <th>Description</th>
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

export default AllWithdrawal