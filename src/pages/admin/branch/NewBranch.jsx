import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function NewBranch() {
  const [bid, setBId] = useState("");
  const [bname, setBName] = useState("");
  const [bhead, setBHead] = useState("");
  const [baddress, setBAddress] = useState("");
//   const [bnumber, setBNumber] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()

      console.log(bid,bname,bhead,baddress)
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
                      <li className="breadcrumb-item active">New Branch</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Add New Branch</h4>
                </div>
              </div>
            </div>
            {/* end page title */}

            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title mb-4">New Branch</h4>
                  <form action="" onSubmit={handleSubmit} >
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-lg-2 col-form-label"
                      >
                        Branch ID
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          id="example-text-input"
                          onChange={e => setBId(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-lg-2 col-form-label"
                      >
                        Branch Name
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          id="example-text-input"
                          onChange={e => setBName(e.target.value)}

                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Branch Head
                      </label>
                      <div className="col-lg-10">
                        <select value={bhead} className="form-control" data-toggle="select2"
                          onChange={e => setBHead(e.target.value)}
                            >
                          <option>Select One</option>
                          <option value={"Staff One"} >Staff 1</option>
                          <option value={"Staff Two"} >Staff 2</option>
                          <option value={"Staff Three"} >Staff 3</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-lg-2 col-form-label"
                      >
                        Branch Address
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          id="example-text-input"
                          onChange={e => setBAddress(e.target.value)}

                        />
                      </div>
                    </div>

                    {/* <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-lg-2 col-form-label"
                      >
                        Branch Number
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          id="example-text-input"
                          onChange={e => setBNumber(e.target.value)}
                        />
                      </div>
                    </div> */}

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

export default NewBranch;
