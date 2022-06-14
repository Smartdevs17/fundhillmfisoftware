import { Fragment, } from 'react'
import { Link } from "react-router-dom";

function EsusPerform() {
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
                                <h4 className="header-title">All Customers</h4>
                                <p className="sub-header">
                                All Customers and Clients of the MFI.
                                </p>
                                <table id="datatable-buttons" className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>

                                <thead>
                                    <tr>
                                    <th> ID </th>
                                    <th> Full Name </th>
                                    <th> Account No.</th>
                                    <th> Rate </th>
                                    <th> Commission Day.</th>
                                    <th> Prev. Card No.</th>
                                    <th> Today Card No. </th>
                                    <th> Today Cash </th>
                                    <th> Circle Out </th>
                                    <th> Withdrawable </th>
                                    <th> Wallet </th>
                                    <th> O/D Amount</th>
                                    <th> Day Missed </th>
                                    <th> Action </th>
                                    {/* <th></th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Joshua Adetunde</td>
                                    <td>08000041124</td>
                                    <td>10</td>
                                    <td>Target Savings</td>
                                    <td> Gabriel Staff </td>
                                    <td> Ekiti Branch </td>
                                    <td> Ekiti Branch </td>
                                    <td> Ekiti Branch </td>
                                    <td> Ekiti Branch </td>
                                    <td> Ekiti Branch </td>
                                    <td> Ekiti Branch </td>
                                    <td> Ekiti Branch </td>
                                    <td>

                                    {/* Button trigger modal */}
                                    {/* <button id='branch' type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                                    View
                                    </button> */}


                                    <div className="btn-group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action <i className="mdi mdi-chevron-down" />
                                    </button>
                                    <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 38px, 0px)'}}>
                                        {/* <a className="dropdown-item" href="#">Dropdown link</a>
                                        <a className="dropdown-item" href="#">Dropdown link</a> */}
                                        <button id='esusuwithdraw' type="button" className="dropdown-item btn btn-outline-primary waves-effect waves-light" data-toggle="modal"  data-target="#esusuwithdrawId">
                                        Withdraw
                                        </button>        
                                        <button id='esusudeposit' type="button" className=" dropdown-item btn btn-outline-success waves-effect waves-light" data-toggle="modal" data-target="#esusudepositId">
                                        Deposit
                                        </button>
                                    </div>
                                    </div>

                                    </td>
                                    {/* <td> <button type="button" className="btn btn-primary"> <Link to="/admin/dashboard/updatecustomer" style={{color: "#fff"}}> Update </Link> </button> </td> */}
                                    </tr>
                                </tbody>
                                </table>



                                {/* Esusu Deposit Modal */}
                                <div className="modal fade" id="esusudepositId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Daily Payment</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                <h4 className="header-title mb-4"></h4>
                                                <form action="">
                                            
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Days
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="2"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                           
                            
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Payment Method
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <select
                                                        className="form-control"
                                                        data-toggle="select2"
                                                        >
                                                        <option value={"cash"}>Cash</option>
                                                        <option value={"transfer"}>Transfer</option>
                       
                                                        </select>
                                                    </div>
                                                    </div>


                                                    <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    >
                                                    Deposit
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

                                     {/* Esusu Withdraw Modal */}
                                <div className="modal fade" id="esusuwithdrawId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Withdrawal Payment</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                <h4 className="header-title mb-4"></h4>
                                                <form action="">
                                            
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
                                                        placeholder="#30000"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                           
                                                    <div className="mt-4">
                                                    <p className="text-muted font-13">Add running payment</p>
                                                    <div className="radio radio-info form-check-inline">
                                                        <input type="radio" id="inlineRadio1" defaultValue="option1" name="radioInline" />
                                                        <label htmlFor="inlineRadio1"> No </label>
                                                    </div>
                                                    <div className="radio form-check-inline">
                                                        <input type="radio" id="inlineRadio2" defaultValue="option2" name="radioInline" />
                                                        <label htmlFor="inlineRadio2"> Yes </label>
                                                    </div>
                                                    </div>



                                                    <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    >
                                                    Withdraw
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
<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
  Dropdown <i className="mdi mdi-chevron-down" />
</button>

export default EsusPerform