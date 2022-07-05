import { Fragment, useState,useContext } from "react";
import { Link } from "react-router-dom";
import {Formik,Form,Field} from "formik";
import {object as yupObject, string as yupString} from "yup";
import {ErrorMsg} from "../../../layouts/components";
import { api  } from "../../../services";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import {DotLoader,ClipLoader} from "react-spinners";
import {Context} from "../../../context/Context";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
  align-items: center;
`;


function AllDeposit() {
  const [isLoading, setIsLoading] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ADD8E6");
  const [data,setData] = useState([]);
  const {user} = useContext(Context)

 

  const initialFormState = () => ({
    transaction_type: "DEPOSIT",
    from_date: "",
    to_date: ""
  });

  const validationSchema = yupObject().shape({
    from_date: yupString()
    .required("Start date is required"),
    to_date: yupString()
    .required("End date is required"),
  });

  const search_deposit = async(values) => {
    setIsLoading(true);
    console.log(values)

    const response = await api
          .service()
          .push(`/dashboard/accounting/${user.org_id}/transactions/`,values,true)
    setData(response);
    if(api.isSuccessful(response)){
      setTimeout( () => {
        toast.success("Deposit found successfully!");
      },0);
    }
    setIsLoading(false);
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
                      <li className="breadcrumb-item">
                        <Link to="#">FundHill</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">Admin</Link>
                      </li>
                      <li className="breadcrumb-item active">Account</li>
                    </ol>
                  </div>
                  <h4 className="page-title">All Customer Deposit</h4>
                </div>
              </div>
            </div>

            {/* end page title */}

            

            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title mb-4">Search Date Transaction</h4>
                  <Formik
                    initialValues={initialFormState()}
                    validationSchema= {validationSchema}
                    onSubmit = { async (values,actions) => {
                      await search_deposit(values);
                    }}
                    >
                    {
                      (props) => (
                        <Form>
                            <div className="form-group row">
                            <label
                              htmlFor="example-text-input"
                              className="col-lg-2 col-form-label"
                            >
                              From
                            </label>
                            <div className="col-lg-10">
                              <Field
                                name = "from_date"
                                className="form-control"
                                type="date"
                              />
                            </div>
                            <ErrorMsg name={"from_date"} />
                          </div>

                          <div className="form-group row">
                            <label
                              htmlFor="example-search-input"
                              className="col-lg-2 col-form-label"
                            >
                              To
                            </label>
                            <div className="col-lg-10">
                              <Field
                                name = "to_date"
                                className="form-control"
                                type="date"
                              />
                            </div>
                            <ErrorMsg name={"to_date"} />
                          </div>

                          <button type="submit" className="btn btn-primary btn-block">
                            Search
                          </button>
                        </Form>
                      )
                    }
                  </Formik>
                </div>
              </div>
            </div>



            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title">Total Deposits</h4>
              

                  {
                    isLoading ? 
                    ( <div className="sweet-loading">
                         <ClipLoader color={color} loading={loading} css={override}  size={80} />
                      </div>)
                          : (

                                                           

                    <table
                    id="datatable-buttons"
                    className="table table-bordered table-bordered dt-responsive nowrap"
                    style={{
                      borderCollapse: "collapse",
                      borderSpacing: 0,
                      width: "100%",
                    }}
                  >

                    <thead>
                     <th> Transaction ID </th>
                     <th> Date </th>
                     <th> Amount </th>
                     <th> Customer </th>
                     <th> Marketer </th>
                     <th> Account Number </th>
                     <th> Description </th>
                    </thead>
 
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td>Tiger Nixon</td>
                        <td>John Bull</td>
                        <td>1234567890</td>
                        <td>Esusu</td>
                        <td>08076895837</td>
                        <td>$320,800</td>
                      </tr>


                      {
                          data.map((deposit) => {
                              return(
                                      <tr>
                                          <td> {deposit.id} </td>
                                          <td> {deposit.date} </td>
                                          <td> {deposit.amount} </td>
                                          <td> {deposit.customer} </td>
                                          <td> {deposit.marketer} </td>
                                          <td> {deposit.acc_no} </td>
                                          <td> {deposit.desc } </td>
                                     </tr>
                                                                                    )
                                                                                })
                                                                    }
                    </tbody>
                  </table>
                                                        )
                                                    }
                               


                </div>
              </div>
            </div>
            {/* end row */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AllDeposit;
