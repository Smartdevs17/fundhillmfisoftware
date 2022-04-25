import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function UpdateProfile() {


    const [Fname, setFname] = useState("");
    const [FnameError,setFnameError] = useState("");
    const [Mname, setMname] = useState("");
    const [MnameError,setMnameError] = useState("");
    const [Lname, setLname] = useState("");
    const [LnameError,setLnameError] = useState("");
    const [PPFile, setPPFile] = useState(null);
    const [PPFileError,setPPFileError] = useState(null);
    const [IDFile, setIDFile] = useState(null);
    const [IDFileError,setIDFileError] = useState("");    
    const [UBFile, setUBFile] = useState("");
    const [UBFileError,setUBFileError] = useState("");  
    const [Bvn, setBvn] = useState("");
    const [BvnError,setBvnError] = useState("");    
    const [Email, setEmail] = useState("");
    const [EmailError,setEmailError] = useState("");    
    const [RA, setRA] = useState("");
    const [RAError,setRAError] = useState("");    
    const [BA, setBA] = useState("");
    const [BAError,setBAError] = useState("");    
    const [TN, setTN] = useState("");
    const [TNError,setTNError] = useState("");    


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Fname,Mname,Lname,PPFile,Bvn,RA,TN);   

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
                          <li className="breadcrumb-item active">Update Customer</li>
                        </ol>
                      </div>
                      <h4 className="page-title">Update Customer</h4>
                    </div>
                  </div>
                </div>
                {/* end page title */}
    
                <div className="row">
                  <div className="col-12">
                    <div className="card-box">
                      <h4 className="header-title mb-4">Update Customer</h4>
                      <form action="" onSubmit={handleSubmit} >
                        <div className="form-group row">
                          <label
                            htmlFor="example-text-input"
                            className="col-lg-2 col-form-label"
                          >
                            First Name
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
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                          >
                            Middle Name
                          </label>
                          <div className="col-lg-10">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Mikel"
                              id="example-search-input"
                              value = {Mname}
                                onChange={(e)  => setMname(e.target.value)}
                            />
                          </div>
                        </div>
    
                        <div className="form-group row">
                          <label
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                          >
                            Last Name
                          </label>
                          <div className="col-lg-10">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Doe"
                              id="example-search-input"
                              value = {Lname}
                                onChange={(e)  => setLname(e.target.value)}
                            />
                          </div>
                        </div>
    
                        <div className="form-group row">
                          <label
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                          >
                            Profile Photo
                          </label>
                          <div className="col-lg-10">
                            <input
                              type="file"
                              className="dropify"
                              value = {PPFile}
                                onChange={(e)  => setPPFile(e.target.value)}
                            />
                          </div>
                        </div>
    
                        <div className="form-group row">
                          <label
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                          >
                            ID{" "}
                          </label>
                          <div className="col-lg-10">
                            <input
                              type="file"
                              className="dropify"
                              value = {IDFile}
                            onChange={(e)  => setIDFile(e.target.value)}                        />
                          </div>
                        </div>
    
                        <div className="form-group row">
                          <label
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                            value = {UBFile}
                            onChange={(e)  => setUBFile(e.target.value)}
                          >
                            Utility Bill
                          </label>
                          <div className="col-lg-10">
                            <input
                              type="file"
                              className="dropify"
                              value = {UBFile}
                                onChange={(e)  => setUBFile(e.target.value)}                        />
                          </div>
                        </div>
    
                        <div className="form-group row">
                          <label
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                          >
                            BVN
                          </label>
                          <div className="col-lg-10">
                            <input
                              className="form-control"
                              type="number"
                              placeholder="10 digit number"
                              id="example-search-input"
                              value = {Bvn}
                                onChange={(e)  => setBvn(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="example-email-input"
                            className="col-lg-2 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-lg-10">
                            <input
                              className="form-control"
                              type="email"
                              placeholder="smartdeveloper@yahoo.com"
                              id="example-email-input"
                              value = {Email}
                                onChange={(e)  => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="example-url-input"
                            className="col-lg-2 col-form-label"
                          >
                            Residential Address
                          </label>
                          <div className="col-lg-10">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Tudun Wada"
                              id="example-url-input"
                              value = {RA}
                                onChange={(e)  => setRA(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            htmlFor="example-url-input"
                            className="col-lg-2 col-form-label"
                            value = {BA}
                            onChange={(e)  => setBA(e.target.value)}
                          >
                            Business Address
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
                            Telephone Number
                          </label>
                          <div className="col-lg-10">
                            <input
                              className="form-control"
                              type="tel"
                              placeholder="234-(222)-333-4445"
                              id="example-tel-input"
                              value = {TN}
                              onChange={(e)  => setTN(e.target.value)}
                            />
                          </div>
                        </div>
    
                   

                        <button type="submit" className="btn btn-primary btn-block">
                          Edit Profile
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

export default UpdateProfile