import { Formik, Form, Field } from "formik";
import { DateSchema, object as yupObject, string as yupString } from 'yup';
import { Fragment, useState,useEffect,useContext} from "react";
import { api } from "../../../services";
import { ErrorMsg } from "../../../layouts/components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import {DotLoader,ClipLoader} from "react-spinners";
import {Context} from "../../../context/Context";


// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;




function Transactions() {

    const {user} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const [data, setData] = useState([]);


    // useEffect( async() => {
    //     isLoading(true)
    //     const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER",true);
    //           console.log(res.data.results)
    //           if(api.isSuccessful(res)){
    //             setData(res.data.results)
    //           }
    //         setIsLoading(false);
    // },[])

    // const [state, setState] = useState({});

    // useEffect(() => {
    //     myFunction();
    //     return () => {
    //       setState({}); // This worked for me
    //     };
    // }, []);
    
    // const myFunction = () => {
    //     setState({
    //         name: 'Jhon',
    //         surname: 'Doe',
    //     })
    // }


    // useEffect(() => {
    //     allCustomer();
    //     return () => {
    //       setData({}); // This worked for me
    //     };

    //     console.log(data)
    // }, []);


    // const allCustomer = async() => {
    //     const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER",true);
    //     // console.log(res.data.results)
    //     if(api.isSuccessful(res)){
    //       setData(res.data.results)
    //     }
  
    //   }

    // const allCustomer = async() => {
    //     const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER",true);
    //     console.log(res.data.results)
    //     if(api.isSuccessful(res)){
    //       setData(res.data.results)
    //     }
    //   setIsLoading(false);
  
    //   }


    useEffect(() => {
        setIsLoading(true)

        const allCustomer = async() => {
          const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER",true);
          console.log(res.data.results)
          if(api.isSuccessful(res)){
            setData(res.data.results)
          }
        setIsLoading(false);
    
        }

        allCustomer();
      },[])


      const withdrawFormState = () => ({
        customer: "",
        amount: "",
        transaction_type: "",
        reason: "",
      });
    
      
      const depositFormState = () => ({
        customer: "",
        amount: "",
        depositor: "",
        transaction_type: "",
        reason: "",
      });
    
    
      const withdrawValidationSchema = yupObject().shape({
        customer: yupString()
        .required("Please select a customer"),
        amount: yupString()
        .required("Amount is required"),
        reason: yupString()
      });
    
    
    
      const depositValidationSchema = yupObject().shape({
        customer: yupString()
        .required("Please select a customer"),
        amount: yupString()
        .required("Amount is required"),
        depositor: yupString(),
        reason: yupString()
      });
    
      const withdraw = async(values) => {
        setIsLoading(true);
        console.log(values)

        const response = await api
              .service()
              .push("/accounts/branch/create_branch",values,true)

        if(api.isSuccessful(response)){
          setTimeout( () => {
            toast.success("Withdrawal was successful!");
            // navigate("/admin/allbranch",{replace: true})
          },0);
        }
        setIsLoading(false);
    };

    const deposit = async(values) => {
        setIsLoading(true);
        console.log(values)

        const response = await api
            .service()
            .push("/accounts/branch/create_branch",values,true)

        if(api.isSuccessful(response)){
        setTimeout( () => {
            toast.success("Branch successfully created!");
            // navigate("/admin/allbranch",{replace: true})
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
                                    <li className="breadcrumb-item"><Link to="#">FundHill</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Admin</Link></li>
                                    <li className="breadcrumb-item active">Savings Plan</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Customer</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 

                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                <h4 className="header-title">Perform any Transactions here</h4>
                    
                            

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
                                    <tr>
                                        <th>S/N</th>
                                        <th>Full Name</th>
                                        <th>Marketer</th>
                                        <th>Account Number</th>
                                        <th>Savings Plan</th>
                                        <th>Telephone</th>
                                        {/* <th>Balance</th> */}
                                        <th>Transaction</th>
                                    </tr>
                                    </thead>
                                                <tbody>
                                                {
                                                    data.map((customer) => 
                                                     (
                                                <tr>
                                                    <td> {customer.id} </td>
                                                    <td> {customer.last_name} {customer.first_name} </td>
                                                    <td> {customer.agent.last_name} {customer.agent.first_name} </td>
                                                    <td> {customer.account_number} </td>
                                                    <td> {customer.status} </td>
                                                    <td> {customer.phone} </td>
                                                    {/* <td> {customer.bals } </td> */}
                                                    <td> 
                                                        <button id='withdraw' type="button" className="btn btn-outline-primary waves-effect waves-light" data-toggle="modal" data-target="#withdrawId">
                                                        Withdraw
                                                        </button>        
                                                        <button id='deposit' type="button" className="btn btn-outline-success waves-effect waves-light" style={{margin: "10px"}} data-toggle="modal" data-target="#depositId">
                                                        Deposit
                                                        </button>


                                                          {/* Modal */}
                                <div className="modal fade" id="depositId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
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
                                                initialValues={depositFormState()}
                                                validationSchema= {depositValidationSchema}
                                                onSubmit = { async (values,actions) => {
                                                    await deposit(values)
                                                }}
                                            >
                                                {(props) => (
                                                    <Form>
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Customer
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field 
                                                        as={"input"}
                                                        name="customer"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="customer 1"
                                                        />
                                                    </div>
                                                    <ErrorMsg name={"customer"} />
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
                                                        type="text"
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
                                                        Depositor's 
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as = {"input"}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Depositor"
                                                        name="depositor"
                                                        />
                                                    </div>
                                                    </div>  

                                                         <div className="form-group row">
                                                            <label
                                                                htmlFor="example-tel-input"
                                                                className="col-lg-2 col-form-label"
                                                            >
                                                                Savings Plan
                                                            </label>
                                                            <div className="col-lg-10">
                                                                <Field as="select" name="transaction_type" className="form-control">
                                                                <option>Select SavingsType</option>
                                                                <option value="Savings">Fixed Deposit</option>
                                                                <option value="fixed">Targeted Savings</option>
                                                                <option value="loan">Regular Savings </option>
                                                                <option value="loan">Esusu Savings </option>

                                                                </Field>
                                                            </div>
                                                        </div>
                            
                                                   

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Reason
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as={"textarea"}
                                                        className="form-control"
                                                        type="text"
                                                        name="reason"
                                                        />
                                                    </div>
                                                    </div>  

                                                    <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    >
                                                    Credit Account
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

                                



                            

                            <div className="modal fade" id="withdrawId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                            <div class="modal-dialog">

                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Withdraw</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                <h4 className="header-title mb-4">Deposit</h4>
                                            <Formik
                                                initialValues={withdrawFormState()}
                                                validationSchema= {withdrawValidationSchema}
                                                onSubmit = { async (values,actions) => {
                                                    await withdraw(values)
                                                }}
                                            >
                                                {(props) => (
                                                    <Form>
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-tel-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Customer
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field 
                                                        as={"input"}
                                                        name="customer"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="customer 1"
                                                        />
                                                    </div>
                                                    <ErrorMsg name={"customer"} />
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
                                                        type="text"
                                                        placeholder="#10000"
                                                        />
                                                    </div>
                                                    <ErrorMsg name={"amount"} />
                                                    </div>

                                               

                                                         <div className="form-group row">
                                                            <label
                                                                htmlFor="example-tel-input"
                                                                className="col-lg-2 col-form-label"
                                                            >
                                                                Savings Plan
                                                            </label>
                                                            <div className="col-lg-10">
                                                                <Field as="select" name="transaction_type" className="form-control">
                                                                <option>Select SavingsType</option>
                                                                <option value="Savings">Fixed Deposit</option>
                                                                <option value="fixed">Targeted Savings</option>
                                                                <option value="loan">Regular Savings </option>
                                                                <option value="loan">Esusu Savings </option>

                                                                </Field>
                                                            </div>
                                                        </div>
                            
                                                   

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Reason
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <Field
                                                        as={"textarea"}
                                                        className="form-control"
                                                        type="text"
                                                        name="reason"
                                                        />
                                                    </div>
                                                    </div>  

                                                    <button type="submit" class="btn btn-danger btn-lg">Debit Account</button>

                                                    </Form>
                                                )}
                                            </Formik> 
                                    
                                </div>
                                {/* <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                </div> */}

                                <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>

                                </div>
                            </div>
                            </div>




                                     
                                                    </td>
                                                 </tr>
                                                    )
                                                )                
                                                                
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

export default Transactions