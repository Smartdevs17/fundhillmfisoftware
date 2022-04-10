import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function RegularSavings() {
    const [SP, setSP] = useState("");
    const [SPError,setSPError] = useState(""); 
  return (
        <Fragment>
                <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Choose One
                      </label>
                      <div className="col-lg-10">
                        <select className="form-control" data-toggle="select2"  value = {SP} onChange={(e)  => setSP(e.target.value)} >
                          <option>Select Savings Plan</option>
                          <option value="Savings">Savings</option>
                          <option value="fixed">Fixed Deposit</option>
                          <option value="loan">Loan</option>
                        </select>
                      </div>
                    </div>
        </Fragment>
    )
}

export default RegularSavings