import { Fragment } from 'react'
import { Link } from "react-router-dom";

function InvoiceLoan() {

  const handlePrint = () => {
    window.print()
}
  return (
    <Fragment>
      {/* ============================================================== */}
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
                            <li className="breadcrumb-item active">Invoice</li>
                          </ol>
                        </div>
                        <h4 className="page-title">Invoice</h4>
                      </div>
                    </div>
                  </div>     
                  {/* end page title */} 
                  <div className="row">
                    <div className="col-12">
                      <div className="card-box">
                        {/* <div class="panel-heading">
                                              <h4>Invoice</h4>
                                          </div> */}
                        <div className="panel-body">
                          <div className="clearfix">
                            <div className="float-sm-left">
                              <h4 className="text-uppercase mt-0">FundHill</h4>
                            </div>
                            <div className="float-sm-right mt-4 mt-sm-0">
                              <h5>Invoice # <br />
                                <small>2022-04-23654789</small>
                              </h5>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-12">
                              <div className="float-sm-left mt-4">
                                <address>
                                  <strong>Twitter, Inc.</strong><br />
                                  795 Folsom Ave, Suite 600<br />
                                  San Francisco, CA 94107<br />
                                  <abbr title="Phone">P:</abbr> (123) 456-7890
                                </address>
                              </div>
                              <div className="mt-4 text-sm-right">
                                <p><strong>Loan Date: </strong> April 17, 2022</p>
                                <p><strong>Loan Status: </strong> <span className="badge badge-danger">Pending</span></p>
                                <p><strong>Loan ID: </strong> #123456</p>
                              </div>
                            </div>{/* end col */}
                          </div>
                          {/* end row */}
                          <div className="row mt-4">
                            <div className="col-12">
                              <div className="table-responsive">
                                <table className="table table-nowrap">
                                  <thead>
                                    <tr><th>#</th>
                                      <th>Name</th>
                                      <th>Account Number</th>
                                      <th>Account officer</th>
                                      <th>Principal</th>
                                      <th>Product</th>
                                      <th>Category</th>
                                      <th>Disubursed Date</th>
                                      <th>1st Repayment</th>
                                      <th>Frequency</th>
                                    </tr></thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>Emeka Slyvester</td>
                                      <td>12345678.</td>
                                      <td>John Bull</td>
                                      <td>100000</td>
                                      <td>Student Loan</td>
                                      <td>Fixed</td>
                                      <td>2022-04-17</td>
                                      <td>2022-04-24</td>
                                      <td>Weekly</td>
                                    </tr>
              
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="clearfix mt-5">
                                <h5 className="small"><b>PAYMENT TERMS AND POLICIES</b></h5>
                                {/* <small className="text-muted">
                                  All accounts are to be paid within 7 days from receipt of
                                  invoice. To be paid by cheque or credit card or direct payment
                                  online. If account is not paid within 7 days the credits details
                                  supplied as confirmation of work undertaken will be charged the
                                  agreed quoted fee noted above.
                                </small> */}
                                <small className="text-muted">
                                  We are delighted to inform your that your loan application has been approved by our management.
                                  In accordance with your application, we will grant your a sum of #50000- with interest rate of 2%.
                                  According to our terms and conditions, it is mandatory for your to pay the first installment of your 
                                  Loan amounting to #150,000- within 4 weeks after we Dsiburse the principal amount to your bank account.
                                  Thereafter, you are supposed to make your weekly payment.
                                  Kindly go through the enclosed literature discussing the details of our TERMSand conditions and amortization rules. 
                                  Incase you fail to abide by these rules, we will be authorized to take legal action.
                                </small>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="text-right mt-4">
                                <p><b>Sub-total:</b> 2930.00</p>
                                <p>Discout: 12.9%</p>
                                <p>VAT: 12.9%</p>
                                <hr />
                                <h3>#150,000.00 USD</h3>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="d-print-none">
                            <div className="float-right">
                            <Link onClick={handlePrint} to="#" className="btn btn-dark waves-effect waves-light"><i className="fa fa-print" /></Link>
                            <Link to="#" className="btn btn-primary waves-effect waves-light">Close</Link>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div> {/* end container-fluid */}
              </div> {/* end content */}
         
            </div>
            {/* ============================================================== */}
            {/* End Page content */}
            {/* ============================================================== */}

    </Fragment>
  )
}

export default InvoiceLoan