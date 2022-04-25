import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function UpgradeCustomer() {
  const [staff, setStaff] = useState("");
  const [staffError, setStaffError] = useState("");

  const [branch, setBranch] = useState("");
  const [esusu, setEsusu] = useState("");
  const [fdeposit, setFdeposit] = useState("");
  const [tsaving, setTsaving] = useState("");
  const [rsaving, setRsaving] = useState("");
  const [lsaving, setLsaving] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(staff,branch,esusu,fdeposit,tsaving,rsaving,lsaving);
  };

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
                      <li className="breadcrumb-item active">
                        Upgrade Customer
                      </li>
                    </ol>
                  </div>
                  <h4 className="page-title">Upgrade Customer Account</h4>
                </div>
              </div>
            </div>
            {/* end page title */}

            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title mb-4">New Customer</h4>
                  <form action="" onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Attach Staff
                      </label>
                      <div className="col-lg-10">
                        <select
                          className="form-control"
                          data-toggle="select2"
                          value={staff}
                          onChange={(e) => setStaff(e.target.value)}
                        >
                          <option>Select One</option>
                          <option value={"Marketer One"}>Staff 1</option>
                          <option value={"Marketer Two"}>Staff 2</option>
                          <option value={"Marketer Three"}>Staff 3</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Choose Branch
                      </label>
                      <div className="col-lg-10">
                        <select
                          className="form-control"
                          data-toggle="select2"
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                        >
                          <option>Select One</option>
                          <option value={"Branch One"}>Branch 1</option>
                          <option value={"Branch Two"}>Branch 2</option>
                          <option value={"Branch Three"}>Branch 3</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-muted font-13">Savings Plan</p>

                      <div className="checkbox form-check-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox1"
                          defaultValue="option1"
                          value={esusu}
                          onChange={(e) => setEsusu(e.target.value)}

                        />
                        <label htmlFor="inlineCheckbox1"> Esusu Savings </label>
                      </div>

                      <div className="checkbox checkbox-success form-check-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox2"
                          defaultValue="option2"
                          defaultChecked
                          value={rsaving}
                          onChange={(e) => setRsaving(e.target.value)}

                        />
                        <label htmlFor="inlineCheckbox2">
                          {" "}
                          Regular Savings{" "}
                        </label>
                      </div>

                      <div className="checkbox checkbox-pink form-check-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox3"
                          defaultValue="option3"
                          value={fdeposit}
                          onChange={(e) => setFdeposit(e.target.value)}

                        />
                        <label htmlFor="inlineCheckbox3"> Fixed Deposit </label>
                      </div>

                      <div className="checkbox checkbox-pink form-check-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox3"
                          defaultValue="option4"
                          value={tsaving}
                          onChange={(e) => setTsaving(e.target.value)}
                        />
                        <label htmlFor="inlineCheckbox3">
                          {" "}
                          Targeted Savings{" "}
                        </label>
                      </div>

                      <div className="checkbox checkbox-pink form-check-inline">
                        <input
                          type="checkbox"
                          id="inlineCheckbox3"
                          defaultValue="option5"
                          value={lsaving}
                          onChange={(e) => setLsaving(e.target.value)}
                        />
                        <label htmlFor="inlineCheckbox3"> Loan Savings </label>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                      Submit
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

export default UpgradeCustomer;
