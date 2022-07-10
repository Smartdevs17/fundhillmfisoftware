import {Fragment,useEffect,useContext,useState} from 'react'
import { Link } from "react-router-dom";
// import "./Dashboard.css"
import { Formik, Form, Field } from "formik";
import {object as yupObject,string as yupString,number as yupNumber} from "yup";
import { ErrorMsg } from "../../../layouts/components";
import { toast } from "react-toastify";

import { api } from '../../../services';
import { css } from "@emotion/react";
import {BounceLoader} from "react-spinners";
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
    const [marketers,setMarketers] = useState([]);

    useEffect(() => {
        setIsLoading(true)

        const allCustomer = async() => {
          const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER&status=VERIFIED",true);
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
        frequency: "",
        amount_per_cycle: null,
        duration_in_months: null,
        amount: null,
        plan_type: ""
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

    useEffect(() => {
        setIsLoading(true)
    
        const allMarketer = async() => {
          const res = await api.service().fetch("/accounts/manage/?is_staff=True&user_role=AGENT",true);
          // console.log(res.data)
          if(api.isSuccessful(res)){
            //   console.log(res)
            setMarketers(res.data.results)
          }
    
          setIsLoading(false);
    
        }
    
        allMarketer();
      },[])


    //   const initialFormState = (email) => ({
    //     first_name: "",
    //     middle_name: "",
    //     last_name: "",
    //     email: `${email}`,
    //     residential_address: "",
    //     business_address: "",
    //     phone: "",   
    //     agent_id: null,
    //   });
    
      const validationSchema = yupObject().shape({
        title: yupString()
        .required("The title is required"),
        first_name: yupString()
        .required("First name is required"),
        middle_name: yupString(),
        last_name: yupString()
        .required("Last name is required"),
        gender: yupString()
        .required("Gender is required"),
        dob: yupString()
        .required("Dirth of birth is required"),
        // avatar: yupString()
        // .required("Profile Picture is required"),
        // country: yupString()
        // .required("Please Select your country"),
        // state: yupString()
        // .required("Please select your state"),
        // city: yupString()
        // .required("Please select your city")
      })
      const edit_customer = async(values,id) => {
        setLoading(true);
        console.log(values)

        const response = await api
            .service()
            .update(`/accounts/auth/${id}/`,values,true)

        if(api.isSuccessful(response)){
        setTimeout( () => {
            toast.success("Customer profile successfully updated!!");
            // navigate("/admin/allbranch",{replace: true})
        },0);
        }
        setLoading(false);
    }

    const deleteCustomer = async(id) => {
        const res = await api.service().remove(`/accounts/auth/${id}/`,true);
        console.log(res.data)
        if(api.isSuccessful(res)){
            setTimeout( () => {
                toast.success("Successfully deleted customer!");
            },0);
            }
  
      }

      const fundCustomer = async(id) => {
        const res = await api.service().get(`/accounts/auth/${id}/`,true);
        console.log(res.data)
        if(api.isSuccessful(res)){
            setTimeout( () => {
                toast.success("Transaction successfully");
            },0);
            }
  
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
                                    <h4 className="header-title">Maketers</h4>

                                    {
                                        isLoading ? 
                                                        ( 
                                                            <div className="sweet-loading text-center">
                                                                <BounceLoader color={color} loading={loading} css={override}  size={150} />
                                                            </div>
                                                            
                                                            )
                                                        : 
                                                        (
                                                            <table id="datatable-buttons" className="table table-bordered table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
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
                                                                    <th data-priority={6}>Status </th>
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
                                                                    <button type="button" style={{color: "#fff"}} className="btn btn-success">  Approved  </button> </td>
                                                                <td>   
                                                                <div className="btn-group">
                                                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Action
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#view_${customer.id}`} >View Profile</button>
                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#edit_${customer.id}`} >Edit Profile</button>
                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#plan_${customer.id}`} > Add Plan </button>
                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#fund_${customer.id}`}  >Fund Wallet</button>

                                                                </div>
                                                                </div>

                                                             </td> 
                                                                </tr>


                                                {/* View Customer Modal */}
                                                        <div className="modal fade" id={`view_${customer.id}`} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
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

                                                                <div className="d-flex align-items-center justify-content-center" >
                                                                <img className="img-fluid" src={customer.avatar}  alt="Card image cap" />

                                                                </div>


                                                                {/* <div className="card-body">
                                                                    <h5 className="card-title">Acount Number: </h5>
                                                                    <h5 className="card-title ">Full Name: </h5>
                                                                    <h5 className="card-title">Telephone: </h5>
                                                                    <h5 className="card-title">Savings Plan: </h5>
                                                                </div> */}
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                        {/* <button type="button" style={{margin: "10px"}}  className="btn btn-primary"> <Link  style={{color: "#fff"}} to="#" > Activate </Link> </button>      */}
                                                                        <button type="button" onClick={() => deleteCustomer(customer.id)} className="btn btn-danger" style={{color: "#fff"}} > Delete </button>
                                                                </div>

                            
                                                                </div>
                                                            {/* </div> */}
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>



                                                                                     {/* Add Savings Plan Modal */}
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
                                                                <option>Choose Frequency</option>
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
                                                    className="btn btn-primary"
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

                            {/* Edit Customer Profile Modal */}
                             <div className="modal fade" id={`edit_${customer.id}`} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Customer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                        <h4 className="header-title mb-4">Edit Customer Profile</h4>
                                            <Formik
                                                initialValues={{
                                                            first_name: `${customer.first_name}`,
                                                            middle_name: `${customer.middle_name}`,
                                                            last_name: `${customer.last_name}`,
                                                            email: `${customer.email}`,
                                                            residential_address: `${customer.residential_address}`,
                                                            business_address: `${customer.business_address}`,
                                                            phone: `${customer.phone}`,   
                                                            agent_id: `${customer.agent.id}`,
                                                        }}
                                                // validationSchema= {validationSchema}
                                                onSubmit = { async (values,actions) => {
                                                    await edit_customer(values,customer.id)
                                                }}
                                            >
                                                {(props) => (
                                                    <Form>
                                                
                                                    
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    First Name
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                        name="first_name"
                                                        />
                                                    </div>
                                                    {/* <ErrorMsg name={"first_name"} /> */}
                                                    </div>  


                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    Middle Name
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                        name="middle_name"
                                                        />
                                                    </div>
                                                    {/* <ErrorMsg name={"middle_name"} /> */}
                                                    </div>  
                                                   

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    Last Name
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                        name="last_name"
                                                        />
                                                    </div>
                                                    {/* <ErrorMsg name={"last_name"} /> */}
                                                    </div>                                                    


                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    Email 
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="email"
                                                        placeholder=""
                                                        name="email"
                                                        />
                                                    </div>
                                                    {/* <ErrorMsg name={"email"} /> */}
                                                    </div>  

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    Phone
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="tel"
                                                        placeholder=""
                                                        name="phone"
                                                        />
                                                    </div>
                                                    {/* <ErrorMsg name={"phone"} /> */}
                                                    </div>  


                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    Business Address
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                        name="business_address"
                                                        />
                                                    </div>
                                                    {/* <ErrorMsg name={"business_address"} /> */}
                                                    </div>  

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                    Residential Address
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder=""
                                                        name="residential_address"
                                                        />
                                                    </div>
                                                    {/* <ErrorMsg name={"residential_address"} /> */}
                                                    </div>  

                                                    <div className="form-group row">
                                                    <label
                                                    htmlFor="example-tel-input"
                                                    className="col-lg-2 col-form-label"
                                                    >
                                                    Marketer
                                                    </label>
                                                    <div className="col-lg-10">
                                                    <select  name="agent_id" className="form-control">
                                                        <option>{customer.agent.first_name} {customer.agent.last_name} </option>
                                                        {
                                                        marketers.map((marketer) => (
                                                            <>
                                                            <option key={marketer.id} value={marketer.id} > {marketer.first_name} </option>
                                                            </>
                                                        ))
                                                        }
                                                        </select>
                                                    </div>
                                                </div>   

                                                    <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    >
                                                    Update
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


                                                                                    <div>
                                                                                       
                                                                                       {/* Fund Customer Wallet Modal */}
                                                                                       <div className="modal fade" id={`fund_${customer.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                           <div className="modal-dialog" role="document">
                                                                                           <div className="modal-content">
                                                                                               <div className="modal-header">
                                                                                               <h5 className="modal-title" id="exampleModalLabel"> Fund {customer.first_name} {customer.last_name} Wallet </h5>
                                                                                               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                   <span aria-hidden="true">×</span>
                                                                                               </button>
                                                                                               </div>
                                                                                               <div className="modal-body">
                                                                                               <h4> Are you sure you want to fund this account </h4>
                                                                                                   

                                                                                                   <div className="form-group row">
                                                                                                    <label
                                                                                                        htmlFor="example-tel-input"
                                                                                                        className="col-lg-2 col-form-label"
                                                                                                    >
                                                                                                        Savings Plan
                                                                                                    </label>
                                                                                                    <div className="col-lg-10">
                                                                                                        <select  name="transaction_type" className="form-control">
                                                                                                        <option>Select SavingsType</option>
                                                                                                        <option value="Savings">Fixed Deposit</option>
                                                                                                        <option value="fixed">Targeted Savings</option>
                                                                                                        <option value="loan">Regular Savings </option>
                                                                                                        <option value="loan">Esusu Savings </option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                               </div>
                                                                                               <div className="modal-footer">
                                                                                               <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                                               <button type="button" onClick={() => fundCustomer(customer.id)} className="btn btn-primary" style={{color: "#fff"}} > Delete </button>
                                                                                               </div>
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
        
                                   
                                    </div>
                                </div>
                                </div>
                                {/* end row */}
                 



                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default AllCustomer