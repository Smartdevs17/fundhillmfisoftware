import { Fragment, useState } from "react";
import { Link } from "react-router-dom";


function NewExpenses() {




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
                          <li className="breadcrumb-item">
                            <Link to="#">FundHill</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="#">Admin</Link>
                          </li>
                          <li className="breadcrumb-item active">Expenses</li>
                        </ol>
                      </div>
                      <h4 className="page-title">Add New Expenses</h4>
                    </div>
                  </div>
                </div>
                {/* end page title */}
    
                <div className="row">
                  <div className="col-12">
                    <div className="card-box">
                      <h4 className="header-title mb-4">New Expenses</h4>
                      <form action="" onSubmit={handleSubmit} >


                      <div className="form-group row">
                          <label
                            htmlFor="example-tel-input"
                            className="col-lg-2 col-form-label"
                          >
                            Marketer
                          </label>
                          <div className="col-lg-10">
                            <select className="form-control" data-toggle="select2" value = {marketer} onChange={(e)  => setMarketer(e.target.value)}>
                              <option>--Choose Marketer--</option>
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
                          Register Expenses
                        </button>
                      </form>
    
                      <div className="form-group row"></div>
                    </div>
                  </div>
                </div>
    
                {/* end row */}
              </div>
              {/* end container-fluid */}
            </div>
          </div>
        </Fragment>
      );
}

export default NewExpenses