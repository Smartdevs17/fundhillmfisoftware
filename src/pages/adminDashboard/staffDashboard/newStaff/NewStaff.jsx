import { Fragment } from 'react'
import { Link } from "react-router-dom";


function NewStaff() {
    return (
        <Fragment>
        <div className='content-page'>
        <div className="content">
                     {/* Start Content*/}
                     <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="#">FundHill</Link ></li>
                                <li className="breadcrumb-item"><Link to="#">Admin</Link ></li>
                                <li className="breadcrumb-item active">Registration</li>
                            </ol>
                            </div>
                            <h4 className="page-title">Add New Markteter</h4>
                        </div>
                        </div>
                    </div>     
                    {/* end page title */} 



                    <div className="row">
                        <div className="col-12">
                        <div className="card-box">
                            <h4 className="header-title mb-4">New Marketer</h4>
                            <form action="">

                            
                        <div className="form-group row">
                        <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Choose Employee</label>
                        <div className="col-lg-10">
                            <select className="form-control" data-toggle="select2">
                                    <option>Select One</option>
                                        <option value="employee-1">Marketer 1</option>
                                        <option value="employee-2">Marketer 2</option>
                                        <option value="employee-3">Marketer 3</option>
                            </select>
                        </div>     
                        </div>

                        <div className="form-group row">
                        <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Choose Branch</label>
                        <div className="col-lg-10">
                            <select className="form-control" data-toggle="select2">
                                    <option>Select One</option>
                                        <option value="branch-1">Branch 1</option>
                                        <option value="branch-2">Branch 2</option>
                                        <option value="branch-3">Branch 3</option>
                            </select>
                        </div>     
                        </div>

                    
                        <div className="form-group row">
                            <label htmlFor="example-tel-input" className="col-lg-2 col-form-label">Attach Role</label>
                            <div className="col-lg-10">
                                <select className="form-control" data-toggle="select2">
                                        <option>Select One</option>
                                            <option value="Savings">Admin</option>
                                            <option value="fixed">Manager</option>
                                            <option value="loan">Teller</option>
                                            <option value="loan">Agent</option>
                               </select>
                            </div>
                            
                        </div> 
                    
                        <button type="submit" className="btn btn-primary ">Add</button>

 

                        </form>

                        <div className="form-group row">

                        </div>
                        </div>
                        </div>
                    </div>


                  


                    {/* end row */}
                    </div> 
                    {/* end container-fluid */}

            </div>
           
        </div>
            
        </Fragment>
    )
}

export default NewStaff