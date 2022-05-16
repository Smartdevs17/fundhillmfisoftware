import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function AllExpenses() {




    const [amount, setAmount] = useState("");
    const [amountError,setAmountError] = useState("");

    const [desc, setDesc] = useState("");
    const [descError,setDescError] = useState("");


    const [marketer, setMarketer] = useState("");
    const [marketerError,setMarketerError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(marketer,amount,desc);   

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
                                    <li className="breadcrumb-item active">Expenses</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All Expenses made by the company..</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Expenses</h4>
                                <table  className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> ID </th>
                                    <th> Marketer </th>
                                    <th> Amount</th>
                                    <th> Description </th>
                                    <th> Date </th>
                                    <th> Action </th>
                                    {/* <th></th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Joshua Adetunde</td>
                                    <td>$1000</td>
                                    <td>Buy Cloths for all the staff</td>
                                    <td>2022-04-01</td>
                                
                                    <td>
                                 

                                    <div className="" style={{display: "flex",justifyContent: "space-between",gap: "10px"}}>
                                        {/* Button trigger modal */}
                                        <button id='expenses' type="button" className="btn btn-outline-primary waves-effect waves-light" data-toggle="modal" data-target="#expensesId">
                                        Edit
                                        </button>

                                        <button id="delete-expenses" type="button" className="btn btn-outline-danger waves-effect waves-light">
                                            Delete
                                        </button>
                                    </div>
                                    </td>
                                
                                    {/* <td> <button type="button" className="btn btn-primary"> <Link to="/admin/dashboard/updatecustomer" style={{color: "#fff"}}> Update </Link> </button> </td> */}
                                    </tr>
                                </tbody>
                                </table>


                            {/* Modal */}
                                    <div className="modal fade" id="expensesId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Customer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container-fluid">


                                            <form action="" onSubmit={handleSubmit} >


                                                <div className="form-group row">
                                                    <label
                                                    htmlFor="example-tel-input"
                                                    className="col-lg-2 col-form-label"
                                                    >
                                                    Choose Marketer
                                                    </label>
                                                    <div className="col-lg-10">
                                                    <select className="form-control" data-toggle="select2" value = {marketer} onChange={(e)  => setMarketer(e.target.value)}>
                                                        <option>Select One</option>
                                                        <option value={"Marketer One"}>Marketer 1</option>
                                                        <option value={"Marketer Two"}>Marketer 2</option>
                                                        <option value={"Marketer Three"}>Marketer 3</option>
                                                    </select>
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
                                                        placeholder="$1000"
                                                        id="example-text-input"
                                                        value = {amount}
                                                        onChange={(e)  => setAmount(e.target.value)}
                                                    />
                                                    </div>
                                                </div>



                                                <div className="form-group row">
                                                    <label
                                                    htmlFor="example-text-input"
                                                    className="col-lg-2 col-form-label"
                                                    >
                                                    Description
                                                    </label>
                                                    <div className="col-lg-10">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="John"
                                                        id="example-text-input"
                                                        value = {desc}
                                                        onChange={(e)  => setDesc(e.target.value)}
                                                    />
                                                    </div>
                                                </div>



                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Update Expenses
                                                </button>
                                                </form>


               

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

export default AllExpenses