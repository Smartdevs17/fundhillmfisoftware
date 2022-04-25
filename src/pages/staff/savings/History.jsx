import { Fragment } from 'react'
import { Link } from "react-router-dom";


function History() {
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
                                    <h4 className="header-title">Buttons example</h4>
                                    <p className="sub-header">
                                        The Buttons extension for DataTables provides a common set of options, API methods and styling to display buttons on a page that will interact with a DataTable. The core library provides the based framework upon which plug-ins can built.
                                    </p>
                                    <table id="datatable-buttons" className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
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
                                        <button id='statement' type="button" className="btn btn-outline-primary waves-effect waves-light" data-toggle="modal" data-target="#statementId">
                                        Statement
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
                                <div className="modal fade" id="statementId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
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

                                            <button type="submit" className="btn btn-primary btn-block">Search</button>
                                            </form>

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

export default History