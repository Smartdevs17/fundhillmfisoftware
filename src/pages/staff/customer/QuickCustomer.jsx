import { Fragment, useState } from "react";
import { Link } from "react-router-dom";


function QuickCustomer() {
    const [Fname, setFname] = useState("");
    const [FnameError,setFnameError] = useState("");
    const [gender, setGender] = useState("");
    const [genderError,setGenderError] = useState("");
    const [dob, setDob] = useState("");
    const [dobError,setDobError] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneError,setPhoneError] = useState("");

    const [amount, setAmount] = useState("");
    const [amountError,setAmountError] = useState("");

    const [address, setAddress] = useState("");
    const [addressError,setAddressError] = useState("");

    const [account, setAccount] = useState("");
    const [accountError,setAccountError] = useState("");

    const [branch, setBranch] = useState("");
    const [branchError,setBranchError] = useState("");

    const [marketer, setMarketer] = useState("");
    const [marketerError,setMarketerError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Fname,gender,dob,phone,amount,address,account,branch,marketer);   

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
                      <li className="breadcrumb-item active">Customer</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Add New Customer</h4>
                </div>
              </div>
            </div>
            {/* end page title */}

            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title mb-4">New Customer</h4>
                  <form action="" onSubmit={handleSubmit} >
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-lg-2 col-form-label"
                      >
                        Full Name
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="John"
                          id="example-text-input"
                          value = {Fname}
                            onChange={(e)  => setFname(e.target.value)}
                        />
                      </div>
                    </div>


                    <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Gender
                      </label>
                      <div className="col-lg-10">
                        <select className="form-control" data-toggle="select2" value = {gender} onChange={(e)  => setGender(e.target.value)}>
                          <option>Select One</option>
                          <option value={"male"}>Male</option>
                          <option value={"female"}>Female</option>
                        </select>
                      </div>
                    </div>


                    <div className="form-group row">
                      <label
                        htmlFor="example-url-input"
                        className="col-lg-2 col-form-label"
                        value = {dob}
                        onChange={(e)  => setDob(e.target.value)}
                      >
                        DOB
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Hwolshe"
                          id="example-url-input"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                      >
                        Telephone
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Mikel"
                          id="example-search-input"
                          value = {phone}
                            onChange={(e)  => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                      >
                        How much Do you want to be saving
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="#100"
                          id="example-search-input"
                          value = {amount}
                            onChange={(e)  => setAmount(e.target.value)}
                        />
                      </div>
                    </div>


                    <div className="form-group row">
                      <label
                        htmlFor="example-url-input"
                        className="col-lg-2 col-form-label"
                        value = {address}
                        onChange={(e)  => setAddress(e.target.value)}
                      >
                        Address
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Hwolshe"
                          id="example-url-input"
                        />
                      </div>
                    </div>
                  

   
                    <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Account Type
                      </label>
                      <div className="col-lg-10">
                        <select className="form-control" data-toggle="select2" value = {account} onChange={(e)  => setAccount(e.target.value)}>
                          <option>-- Select One--</option>
                          <option value={"saving"}>Savings</option>
                          <option value={"esusu"}>Esusu</option>
                        </select>
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
                        <select className="form-control" data-toggle="select2" value = {branch} onChange={(e)  => setBranch(e.target.value)}>
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

                    <button type="submit" className="btn btn-primary btn-block">
                      Create Account
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

export default QuickCustomer