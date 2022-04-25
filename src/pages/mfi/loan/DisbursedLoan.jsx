import { Fragment } from 'react'
import { Link } from "react-router-dom";

function DisbursedLoan() {
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
                                    <h4 className="page-title">Disbursed Loan</h4>
                                </div>
                                </div>
                            </div>     
        
                            {/* end page title */} 


                            <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                        <h4 className="header-title mb-4">Search Date Transaction</h4>
                                        <form action="">

                                        <div className="form-group row">
                                        <label htmlFor="example-text-input" className="col-lg-2 col-form-label">From</label>
                                        <div className="col-lg-10">
                                            <input className="form-control" type="date"  id="example-text-input" />
                                        </div>
                                        </div>

                                        <div className="form-group row">
                                        <label htmlFor="example-search-input" className="col-lg-2 col-form-label">To</label>
                                        <div className="col-lg-10">
                                            <input className="form-control" type="date" id="example-search-input" />
                                        </div>
                                        </div>

                                        <div className="form-group row">
                                            <label
                                                htmlFor="example-tel-input"
                                                className="col-lg-2 col-form-label"
                                            >
                                                Branch
                                            </label>
                                            <div className="col-lg-10">
                                                <select
                                                className="form-control"
                                                data-toggle="select2"
                                                >
                                                <option>Select Branch</option>
                                                <option value="Savings">Branch 1</option>
                                                <option value="fixed">Branch 2</option>
                                                <option value="loan">Branch 3</option>
                                                </select>
                                            </div>
                                            </div>


                                    <button type="submit" className="btn btn-primary btn-block">Search</button>
                                    </form>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12">
                                <div className="card-box">
                                    <h4 className="header-title">Account Balance Report</h4>
                                    <p className="sub-header">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quos natus rerum ducimus deleniti odio at? Exercitationem neque cupiditate cumque incidunt, officia nisi laborum omnis.
                                    </p>
                                    <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                    <thead>
                                        <tr>
                                        <th> ID </th>
                                        <th> Loan Officer</th>
                                        <th> Client Names </th>
                                        <th> Account Number </th>
                                        <th> Client Contact </th>
                                        <th> Loan ID </th>
                                        <th> Principal </th>
                                        <th> Loan + Interest </th>
                                        <th> Product </th>
                                        <th> Category </th>
                                        <th> Action </th>
        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                            
                                        <td> 23 </td>
                                        <td> Daniel Yusuf </td>
                                        <td> Yakuku John </td>
                                        <td> Account Number </td>
                                        <td> 08080080808 </td>
                                        <td> 123456 </td>
                                        <td>  5000000</td>
                                        <td>  5400000</td>
                                        <td>  Student Loan </td>
                                        <td>  Fixed </td>
                                        <td>   
                                        <button id='disburseloan' type="button" className="btn btn-primary" data-toggle="modal" data-target="#disburseloanId">
                                        Disburse Loan
                                        </button>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div> {/* end row */}


                                {/* Disburse Loan Modal */}
                                <div className="modal fade" id="disburseloanId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                            <div className="modal-content card-box">
                                            <div className="modal-header">
                                            <h4 className="header-title mb-4">Disburse Loan</h4>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                                </button>
                                            </div>

                                                
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="">
                                                    <h4 className="header-title mb-4">Enter Disbursement Date</h4>
                                                    <form action="">

                                                    <div className="form-group row">
                                                    <label htmlFor="example-text-input" className="col-lg-2 col-form-label">Disburse Date</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" type="date"  id="example-text-input" />
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label htmlFor="example-search-input" className="col-lg-2 col-form-label">First Repayment Date</label>
                                                    <div className="col-lg-10">
                                                        <input className="form-control" type="date" id="example-search-input" />
                                                    </div>
                                                    </div>

                            
                                                    <button type="submit" className="btn btn-primary btn-block">Disburse</button>
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

export default DisbursedLoan