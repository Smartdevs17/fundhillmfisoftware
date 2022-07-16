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


function SavingsPlan() {
    const [isLoading, setIsLoading] = useState(false);
    const [Loading, setLoading] = useState(false)
    let [loading, setloading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const {user} = useContext(Context)
    const [data,setData] = useState([]);
    const [interests,setInterest] = useState([]);
    const [fees,setfees] = useState([]);
    const [customers,setCustomers] = useState([]);

    useEffect(() => {
        setIsLoading(true)

        const allCustomer = async() => {
        try {
            const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER&status=VERIFIED",true);
            console.log(res.data.results)
            if(api.isSuccessful(res)){
              setData(res.data.results)
            }
          setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    
        }

        allCustomer();
      },[])

      const savingsFormState = (id) => ({
        user: id,
        frequency: "",
        amount_per_cycle: 0,
        duration_in_months: 0,
        amount: 0,
        plan_type: "",
        interest_rate: 0,
        fee: 1,
        fixed_amount: true
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
        interest_rate: yupNumber()
        .required("Select an interest rate"),
        fee: yupNumber()
        .required("Select fee"),
        fixed_amount: yupString()
        .required("Select an option")
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
    
        const allSavingsPlan = async() => {
                    try {
                        const res = await api.service().fetch("/dashboard/savings-plan/",true);
                        console.log(res.data.results)
                        console.log("i got no result");
                        if(api.isSuccessful(res)){
                          //   console.log(res)
                          setCustomers(res.data.results)
                        }
                  
                        setIsLoading(false);
                    } catch (error) {
                        console.log(error);
                    }  
        }
    
        allSavingsPlan();
      },[]);


      const customerFundFormState = () => ({
        amount: 0,
        depositor: "",
        plan_id: 0
      });

      const  customerSavingsPlan = async(id) => {
        try {
            const res = await api.service().fetch(`/dashboard/savings-plan/?user=${id}`,true);
            console.log(res.data.results)
            if(api.isSuccessful(res)){
              //   console.log(res)
              setCustomers(res.data.results)
            }
      
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }  
}
// customerSavingsPlan();


// const fundCustomer = async(values) => {
//     // setIsLoading(true);
//     try {
//         console.log(values)

//         const response = await api
//               .service()
//               .push("/dashboard/savings-plan/collect/",values,true)
    
//         if(api.isSuccessful(response)){
//           setTimeout( () => {
//             toast.success("Transaction successful!");
//             // navigate("/dashboard/loan-product",{replace: true});
//           },0);
//         }
//         // setIsLoading(false);
//     } catch (error) {
//         console.log(error);
//     }
// }

const fundCustomer = async(values) => {
    try {
        setLoading(true);
        console.log(values)

        const response = await api
        .service()
        .push("/dashboard/savings-plan/collect/",values,true)

  if(api.isSuccessful(response)){
    setTimeout( () => {
      toast.success("Transaction successful!");
      // navigate("/dashboard/loan-product",{replace: true});
    },0);
  }
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
}


const withdrawCustomer = async(values) => {
    try {
        setLoading(true);
        console.log(values)

        const response = await api
        .service()
        .push("/dashboard/savings-plan/withdraw/",values,true)

  if(api.isSuccessful(response)){
    setTimeout( () => {
      toast.success("Transaction successful!");
      // navigate("/dashboard/loan-product",{replace: true});
    },0);
  }
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
}


const withdrawCustomerFormState = () => ({
    amount: 0,
    reason: "",
    plan_id: 0
  });


    useEffect(() => {
        setIsLoading(true)
    
        const allinterest = async() => {
            try {
                const res = await api
                .service()
                .fetch("/dashboard/interest-rates/",true);
                console.log(res.data.results)
                
            if((api.isSuccessful(res))){
                setInterest(res.data.results);
                setIsLoading(false)
            }else{
                setIsLoading(true)
            }
         } catch (error) {
            console.log(error.message)
         }
        }
    
        allinterest();

        const customerPlan = async() => {
            try {
                const res = await api
                .service()
                .fetch("/dashboard/savings-plan/",true);
                console.log(res.data.results)
                
            if((api.isSuccessful(res))){
                setCustomers(res.data.results);
                setIsLoading(false)
            }else{
                setIsLoading(true)
            }
         } catch (error) {
            console.log(error.message)
         }
        }
      },[]);

      console.log(customers);
      const plan = (id)=> {
            return customers.filter(customer => customer.user.id === id)
      }

    useEffect(() => {
        setIsLoading(true)
    
        const allfee = async() => {
                    try {
                        const res = await api.service().fetch("/dashboard/fees/",true);
                        console.log(res.data.results)
                        if(api.isSuccessful(res)){
                          //   console.log(res)
                          setfees(res.data.results)
                        }
                  
                        setIsLoading(false);
                    } catch (error) {
                        console.log(error);
                    }  
        }
    
        allfee();
      },[]);


   


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
                                                                    {/* <th data-priority={3}>fee</th>
                                                                    <th data-priority={6}>Status </th> */}
                                                                    <th data-priority={6}>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                    <tbody>
                                                              
                                                                    {
                                                data.map((customer) => (
                                                    <Fragment>
                                                    <tr key={customer.id} >
                                                                <th ><span className="co-name"> {customer.id} </span></th>
                                                                <td >{customer.first_name} {customer.last_name} </td>
                                                                <td> {customer.account_number} </td>
                                                                <td> {customer.phone} </td>
                                                                 
                                                                <td>   
                                                                <div className="btn-group">
                                                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Action
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#plan_${customer.id}`} > Add Plan </button>
                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#fund_${customer.id}`} >Fund Wallet</button>
                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#withdraw_${customer.id}`}  >Withdraw </button>
                                                                    {/* onClick={() => customerSavingsPlan(customer.id)}  */}
                                                                </div>
                                                                </div>

                                                             </td> 
                                                                </tr> 





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
                                                                className="col-lg-3 col-form-label"
                                                            >
                                                                Frequency
                                                            </label>
                                                            <div className="col-lg-9">
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
                                                        className="col-lg-3 col-form-label"
                                                    >
                                                        Amount
                                                    </label>
                                                    <div className="col-lg-9">
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
                                                        className="col-lg-3 col-form-label"
                                                    >
                                                    Amount Cycle
                                                    </label>
                                                    <div className="col-lg-9">
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
                                                        className="col-lg-3 col-form-label"
                                                    >
                                                    Duration
                                                    </label>
                                                    <div className="col-lg-9">
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
                                                                className="col-lg-3 col-form-label"
                                                            >
                                                                Savings Plan
                                                            </label>
                                                            <div className="col-lg-9">
                                                                <Field as="select" name="plan_type" className="form-control">
                                                                <option>Select SavingsType</option>
                                                                <option value="FIXED DEPOSIT SAVINGS">Fixed Savings</option>
                                                                <option value="TARGETED SAVINGS">Targeted Savings</option>

                                                                </Field>
                                                            </div>
                                                            <ErrorMsg name={"plan_type"} />
                                                        </div>
                            
                                                   

                                                        <div className="form-group row">
                                                            <label
                                                            htmlFor="example-tel-input"
                                                            className="col-lg-3 col-form-label"
                                                            >
                                                            Interest Rate
                                                            </label>
                                                            <div className="col-lg-9">
                                                            <Field as="select"  name="interest_rate" className="form-control">
                                                                <option>Select One</option>
                                                                {
                                                                interests.map((interest) => (
                                                                    <>
                                                                    <option key={interest.id} value={interest.id} > {interest.name} </option>
                                                                    </>
                                                                ))
                                                                }
                                                                </Field>
                                                            </div>
                                                        </div>            


                                                        <div className="form-group row">
                                                        <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-3 col-form-label"
                                                        >
                                                        Charges Fee
                                                        </label>
                                                        <div className="col-lg-9">
                                                        <select  name="fee" className="form-control">
                                                            <option>Select One</option>
                                                            {
                                                            fees.map((fee) => (
                                                                <>
                                                                <option key={fee.id} value={fee.id} > {fee.name} </option>
                                                                </>
                                                            ))
                                                            }
                                                            </select>
                                                        </div>
                                                        <ErrorMsg name={"fee"} />
                                                    </div>            

                                        
                                                    <div className="form-group row">
                                                        <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-3 col-form-label"
                                                        >
                                                        Fixed Amount
                                                        </label>
                                                        <div className="col-lg-9">
                                                        <select  name="fixed_amount" className="form-control">
                                                            <option>Select One</option>
                                                            <option value="true">True</option>
                                                            <option value="false">False</option>
                                                            </select>
                                                        </div>
                                                        <ErrorMsg name={"fixed_amount"} />
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
                                                                        <Formik
                                                                            initialValues={customerFundFormState()}
                                                                            // validationSchema= {savingsValidationSchema}
                                                                            onSubmit = { async (values,actions) => {
                                                                                await fundCustomer(values)
                                                                            }}
                                                                        >
                                                                            {(props) => (
                                                                                <Form>


                                                                                <div className="form-group row">
                                                                                <label
                                                                                    htmlFor="example-text-input"
                                                                                    className="col-lg-3 col-form-label"
                                                                                >
                                                                                    Depositor
                                                                                </label>
                                                                                <div className="col-lg-9">
                                                                                    <Field 
                                                                                    as={"input"}
                                                                                    name="depositor"
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    placeholder=""
                                                                                    />
                                                                                </div>
                                                                                <ErrorMsg name={"despositor"} />
                                                                                </div>  


                                                                                <div className="form-group row">
                                                                                <label
                                                                                    htmlFor="example-text-input"
                                                                                    className="col-lg-3 col-form-label"
                                                                                >
                                                                                    Amount
                                                                                </label>
                                                                                <div className="col-lg-9">
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
                                                                                        htmlFor="example-tel-input"
                                                                                        className="col-lg-3 col-form-label"
                                                                                        >
                                                                                        Savings Plan
                                                                                        </label>
                                                                                        <div className="col-lg-9">
                                                                                        <Field as="select"  name="plan_id" className="form-control">
                                                                                            <option>Select One</option>
                                                                                            {
                                                                                            plan(customer.id).map((customer) => (
                                                                                                <>
                                                                                                <option key={customer.id} value={customer.id} > {customer.plan_type} </option>
                                                                                                </>
                                                                                            ))
                                                                                            }
                                                                                            </Field>
                                                                                        </div>
                                                                                    </div> 
                                                                        

                                                                                <button
                                                                                type="submit"
                                                                                className="btn btn-primary"
                                                                                >
                                                                                Fund
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
                                                                 </div>
                

                                                                 


                                                                                       {/* Withdraw customer Wallet Modal */}
                                                                                       <div className="modal fade" id={`withdraw_${customer.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                           <div className="modal-dialog" role="document">
                                                                                           <div className="modal-content">
                                                                                               <div className="modal-header">
                                                                                               <h5 className="modal-title" id="exampleModalLabel"> Withdraw {customer.first_name} {customer.last_name} Wallet </h5>
                                                                                               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                   <span aria-hidden="true">×</span>
                                                                                               </button>
                                                                                               </div>
                                                                                               <div className="modal-body">
                                                                                        <h4 className="header-title mb-4">Withdraw</h4>
                                                                                            <Formik
                                                                                                initialValues={withdrawCustomerFormState()}
                                                                                                // validationSchema= {validationSchema}
                                                                                                onSubmit = { async (values,actions) => {
                                                                                                    await withdrawCustomer(values)
                                                                                                }}
                                                                                            >
                                                                                                {(props) => (
                                                                                                    <Form>
                                                                                                
                                                                                                

                                                                                        <div className="form-group row">
                                                                                        <label
                                                                                            htmlFor="example-text-input"
                                                                                            className="col-lg-3 col-form-label"
                                                                                        >
                                                                                            Amount
                                                                                        </label>
                                                                                        <div className="col-lg-9">
                                                                                            <Field 
                                                                                            as={"input"}
                                                                                            name="amount"
                                                                                            className="form-control"
                                                                                            type="number"
                                                                                            placeholder="#10000"
                                                                                            />
                                                                                        </div>
                                                                                        {/* <ErrorMsg name={"amount"} /> */}
                                                                                        </div>  

                                                                                        <div className="form-group row">
                                                                                                <label
                                                                                                htmlFor="example-tel-input"
                                                                                                className="col-lg-3 col-form-label"
                                                                                                >
                                                                                                Savings Plan
                                                                                                </label>
                                                                                                <div className="col-lg-9">
                                                                                                <Field as="select"  name="plan_id" className="form-control">
                                                                                                    <option>Select One</option>
                                                                                                    {
                                                                                                    plan(customer.id).map((customer) => (
                                                                                                        <>
                                                                                                        <option key={customer.id} value={customer.id} > {customer.plan_type} </option>
                                                                                                        </>
                                                                                                    ))
                                                                                                    }
                                                                                                    </Field>
                                                                                                </div>
                                                                                            </div>  


                                                                                            <div className="form-group row">
                                                                                        <label
                                                                                            htmlFor="example-text-input"
                                                                                            className="col-lg-3 col-form-label"
                                                                                        >
                                                                                            Reason
                                                                                        </label>
                                                                                        <div className="col-lg-9">
                                                                                            <Field 
                                                                                            as={"input"}
                                                                                            name="reason"
                                                                                            className="form-control"
                                                                                            type="text"
                                                                                            placeholder=""
                                                                                            />
                                                                                        </div>
                                                                                        {/* <ErrorMsg name={"reason"} /> */}
                                                                                        </div>  
            

                                                                                                            <button
                                                                                                            type="submit"
                                                                                                            className="btn btn-success"
                                                                                                            >
                                                                                                            Withdraw
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

export default SavingsPlan