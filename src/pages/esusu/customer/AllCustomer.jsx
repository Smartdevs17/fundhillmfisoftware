import {Fragment,useEffect,useContext,useState} from 'react'
import { Link } from "react-router-dom";
// import "./Dashboard.css"
import { Formik, Form, Field } from "formik";
import {object as yupObject,string as yupString,number as yupNumber} from "yup";
import { ErrorMsg } from "../../../layouts/components";
import { toast } from "react-toastify";

import { api } from '../../../services';
import { css } from "@emotion/react";
import {DotLoader,ClipLoader,RingLoader,CircleLoader,RotateLoader,SyncLoader,BarLoader,BeatLoader,BounceLoader,ClockLoader,FadeLoader,GridLoader,HashLoader,MoonLoader,PacmanLoader} from "react-spinners";
import {Context} from "../../../context/Context";




// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function AllCustomer() {
    const [isLoading, setIsLoading] = useState(false);
    const [Loading, setLoading] = useState(false)
    let [loading, setloading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const {user} = useContext(Context)
    const [data,setData] = useState([]);

    useEffect(() => {
        setIsLoading(true)

        const allCustomer = async() => {
          const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER",true);
          console.log(res.data)
          if(api.isSuccessful(res)){
            setData(res.data.results)
          }
        setIsLoading(false);
    
        }

        allCustomer();
      },[])

      const savingsFormState = (id) => ({
        user: id,
        frequency: null,
        amount_per_cycle: null,
        duration_in_months: null,
        amount: null,
        plan_type: null
      });
    
    
      const savingsValidationSchema = yupObject().shape({
        user: yupNumber()
        .required("User is required"),
        frequency: yupString()
        .required("frequency is required"),
        amount_per_cycle: yupNumber()
        .required("Amount cycle is required"),
        duration_in_months: yupNumber()
        .required("Duration is required"),
        amount: yupNumber()
        .required("Amount is required"),
        plan_type: yupString()
        .required("Select a savings plan."),
      });


      const savings = async(values) => {
        setLoading(true);
        console.log(values)

        const response = await api
            .service()
            .push("/dashboard/savings-plan/add/",values,true)

        if(api.isSuccessful(response)){
        setTimeout( () => {
            toast.success("Savings Plan successfully added!");
            // navigate("/admin/allbranch",{replace: true})
        },0);
        }
        setLoading(false);
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
                                    <li className="breadcrumb-item active">Customer</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All {user  && user.data.org_name} Customers</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
            



                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                <div className="responsive-table-plugin">
                                    <div className="table-rep-plugin">
                                    <div className="table-responsive" data-pattern="priority-columns">

                                    {
                                        isLoading ? 
                                                        ( 
                                                                   
                                                            <div className="sweet-loading text-center">
                                                                <BounceLoader color={color} loading={loading} css={override}  size={150} />
                                                            </div>
                                                        )
                                                        : (

                                                            <table id="tech-companies-1" className="table table-striped">
                                        <thead>
                                            <tr>
                                            <th>ID</th>
                                            <th data-priority={1}>Full Name</th>
                                            <th data-priority={3}>Account Number</th>
                                            <th data-priority={3}>Telephone</th>
                                            <th data-priority={1}>Email</th>
                                            {/* <th data-priority={3}>Savings Plan</th> */}
                                            <th data-priority={3}>Marketer</th>
                                            {/* <th data-priority={6}>Branch</th> */}
                                            <th data-priority={6}>Add Plan </th>
                                            <th data-priority={6}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                      

                                            {
                                                data.map((customer) => (
                                                    <Fragment>
                                                    <tr >
                                                                <th key={customer.id} ><span className="co-name"> {customer.id} </span></th>
                                                                <td >{customer.first_name} {customer.last_name} </td>
                                                                <td> {customer.account_number} </td>
                                                                <td> {customer.phone} </td>
                                                                <td> {customer.email} </td>
                                                                <td> {customer.agent.first_name} </td>
                                                                <td>
                                                                    {/* Button trigger modal */}
                                                                    <button id='branch' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#plan_${customer.id}`} >
                                                                    Add Plan
                                                                    </button>
                                                                </td>                                                                <td> 
                                                                    <button type="button" className="btn btn-danger"> <Link to="/admin/dashboard/updatecustomer" style={{color: "#fff"}}> Approved </Link> </button> </td>
                                                                <td>
                                                                    {/* Button trigger modal */}
                                                                    <button id='branch' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modal_${customer.id}`} >
                                                                    View
                                                                    </button>
                                                                </td>
                                                                </tr>


                                                {/* Modal */}
                                                        <div className="modal fade" id={`modal_${customer.id}`} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Customer ID</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                                </button>
                                                            </div>
                                                            {/* <div className="modal-body"> */}
                                                                <div className="modal-content">


                                                                {/* <div className="card-body">
                                                                    <h5 className="card-title">Acount Number: </h5>
                                                                    <h5 className="card-title ">Full Name: </h5>
                                                                    <h5 className="card-title">Telephone: </h5>
                                                                    <h5 className="card-title">Savings Plan: </h5>
                                                                </div> */}
                                                                <img className="img-fluid" src={customer.avatar}  alt="Card image cap" />
                                                                <div className="card-body">
                                                                        <button type="button" style={{margin: "10px"}}  className="btn btn-primary"> <Link  style={{color: "#fff"}} to="#" > Activate </Link> </button>     
                                                                        <button type="button" className="btn btn-danger"> <Link to="#" style={{color: "#fff"}}> Delete </Link> </button>
                                                                </div>

                                

                                                                </div>
                                                            {/* </div> */}
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>



                                                                                     {/* Modal */}
                                <div className="modal fade" id={`plan_${customer.id}`} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Customer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                        <h4 className="header-title mb-4">Deposit</h4>
                                            <Formik
                                                initialValues={savingsFormState(customer.id)}
                                                validationSchema= {savingsValidationSchema}
                                                onSubmit = { async (values,actions) => {
                                                    await savings(values)
                                                }}
                                            >
                                                {(props) => (
                                                    <Form>
                                                
                                                    <div className="form-group row">
                                                            <label
                                                                htmlFor="example-tel-input"
                                                                className="col-lg-2 col-form-label"
                                                            >
                                                                Frequency
                                                            </label>
                                                            <div className="col-lg-10">
                                                                <Field as="select" name="frequency" className="form-control">
                                                                <option>Select SavingsType</option>
                                                                <option value="DAILY">DAILY</option>
                                                                <option value="WEEKLY">WEEKLY</option>
                                                                <option value="MONTHLY">MONTHLY</option>
                                                                <option value="YEARLY">YEARLY</option>

                                                                </Field>
                                                            </div>
                                                            <ErrorMsg name={"frequency"} />
                                                        </div>


                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Amount
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field 
                                                        as={"input"}
                                                        name="amount"
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="#10000"
                                                        />
                                                    </div>
                                                    <ErrorMsg name={"amount"} />
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    Amount Cycle
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="10"
                                                        name="amount_per_cycle"
                                                        />
                                                    </div>
                                                    <ErrorMsg name={"amount_per_cycle"} />
                                                    </div>  

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    Duration
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="1-12"
                                                        name="duration_in_months"
                                                        />
                                                    </div>
                                                    <ErrorMsg name={"duration_in_months"} />
                                                    </div>  

                                                         <div className="form-group row">
                                                            <label
                                                                htmlFor="example-tel-input"
                                                                className="col-lg-2 col-form-label"
                                                            >
                                                                Savings Plan
                                                            </label>
                                                            <div className="col-lg-10">
                                                                <Field as="select" name="plan_type" className="form-control">
                                                                <option>Select SavingsType</option>
                                                                <option value="FIXED SAVINGS">Fixed Savings</option>

                                                                </Field>
                                                            </div>
                                                            <ErrorMsg name={"plan_type"} />
                                                        </div>
                            
                                                   

                                                  

                                                    <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    >
                                                    Submit
                                                    </button>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
       

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                                    </Fragment>
                                                ))
                                            }
                                          

                            {/* Modal */}
                                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Customer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        {/* <div className="modal-body"> */}
                                            <div className="modal-content">


                                            <div className="card">
                                            {/* <div className="card-body">
                                                <h5 className="card-title">Acount Number: </h5>
                                                <h5 className="card-title ">Full Name: </h5>
                                                <h5 className="card-title">Telephone: </h5>
                                                <h5 className="card-title">Savings Plan: </h5>
                                            </div> */}
                                            <img className="img-fluid" src="/assets/images/users/avatar-11.jpg" alt="Card image cap" />
                                            <div className="card-body">
                                                    <button type="button" style={{margin: "10px"}}  className="btn btn-primary"> <Link  style={{color: "#fff"}} to="#" > Activate </Link> </button>     
                                                    <button type="button" className="btn btn-danger"> <Link to="#" style={{color: "#fff"}}> Delete </Link> </button>
                                            </div>
                                            </div>

               

                                            </div>
                                        {/* </div> */}
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                            
                                        </tbody>
                                        </table>

                                                        )
                                    }
                                       



                                    </div> {/* end .table-responsive */}
                                    </div> {/* end .table-rep-plugin*/}
                                </div> {/* end .responsive-table-plugin*/}
                                </div> {/* end card-box */}
                            </div> {/* end col */}
                            </div>
                            {/* end row */}



                 



                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default AllCustomer