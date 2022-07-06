import { Fragment, useState,useContext,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {object as yupObject,string as yupString,number as yupNumber} from "yup";
import { ErrorMsg } from "../../../layouts/components";
import { api  } from "../../../services";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import {DotLoader,ClipLoader,BounceLoader} from "react-spinners";
import {Context} from "../../../context/Context";


// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;




function AddBorrower() {

const [isLoading, setIsLoading] = useState(false);
const [loader, setLoader] = useState(false);
let [loading, setLoading] = useState(true);
let [color, setColor] = useState("#ADD8E6");
const {user} = useContext(Context)
const [marketers,setMarketers] = useState([]);
const [branches,setBranches] = useState([]);
const [customers,setCustomers] = useState([]);
const [products,setProducts] = useState([]);
const navigate = useNavigate();


useEffect(() => {
    setIsLoading(true)

    const allCustomer = async() => {
        const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER",true);
        console.log(res.data)
        if(api.isSuccessful(res)){
          setCustomers(res.data.results)
        }
  
      // setIsLoading(false);
  
      }
  
      allCustomer();

    const allMarketer = async() => {
        const res = await api.service().fetch("/accounts/manage/?is_staff=True",true);
        console.log(res.data)
        if(api.isSuccessful(res)){
          //   console.log(res)
          setMarketers(res.data.results)
        }
  
        // setIsLoading(false);
  
      }

      allMarketer();

    const allBranches = async() => {
        const res = await api.service().fetch("https://fundhill-api.herokuapp.com/dashboard/branches/",true);
        console.log(res.data)
        if(api.isSuccessful(res)){
          setBranches(res.data.results)
        }
  
        setIsLoading(false);
  
      }

      allBranches();


      const newProduct = async() => {
              
        // console.log(isLoading);
    // if(api.isSuccessful(branches)){
    //     setData(branches.data.results);
    //     setIsLoading(false)
    // }
    // else{
    //     setIsLoading(true)
    // }


    const res = await api
    .service()
    .fetch("/dashboard/loan-product",true);
    console.log(res.data.results)

    if((api.isSuccessful(res))){
    setProducts(res.data.results);
    setIsLoading(false)
    }
        }

        newProduct();

      setIsLoading(false);

  },[]);


            const initialFormState = (id) => ({
                borrower: id,
                loan_product: null,
                amount: null,
                branch: null,
                category: "",
                payment_frequency: "",
                loan_period_in_months: null,
                payment_schedule: "",
                loan_officer: null,
                organisation: user.data.organisation
            });

            const validationSchema = yupObject().shape({
                borrower: yupNumber()
                .required("Please select a valid customer"),
                loan_product: yupNumber()
                .required("Select a loan product"),
                amount: yupNumber()
                .required("Enter an amount to be disburse"),
                category: yupString()
                .required("Please select a category."),
                payment_frequency: yupString()
                .required("Select a payment frequency"),
                payment_schedule: yupString()
                .required("Select a payment schedule"),
                // branch: yupNumber()
                // .required("Select a branch name"),
                loan_period_in_months: yupNumber()
                .required("Enter loan period"),
                loan_officer: yupNumber()
                .required("Select a loan officer"),

            });

            const add_borrower = async(values) => {
                setLoader(true);
                console.log(values)

                const response = await api
                    .service()
                    .push("/dashboard/loan/add/",values,true)

                if(api.isSuccessful(response)){
                setTimeout( () => {
                    toast.success("Successfully assign loan!");
                    navigate("/admin/dashboard/add_borrower",{replace: true});
                },0);
                }
                setLoader(false);
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
                                    <li className="breadcrumb-item active">Loan</li>
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
                                <h4 className="header-title">Add Borrower</h4>
                                {/* <p className="sub-header">
                                All Customers and Clients of the MFI.
                                </p> */}
                                {
                                    isLoading ? 
                                                        ( 
                                                     

                                                            <div className="sweet-loading text-center">
                                                                <BounceLoader color={color} loading={loading} css={override}  size={150} />
                                                            </div>
                                                                    
                                                            ):
                                                            (
                                <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> ID </th>
                                    <th> Full Name </th>
                                    <th> Telephone</th>
                                    <th> Email </th>
                                    <th> Group Loan </th>
                                    <th> Single Loan </th>
                                    {/* <th></th> */}
                                    </tr>
                                </thead>

                                <tbody>
                                   

                                    {
                                        customers.map((customer) => (
                                            <Fragment>
                                            <tr key={customer.id}>
                                                <td> {customer.id} </td>
                                                <td> {customer.first_name} {customer.last_name} </td>
                                                <td> {customer.phone} </td>
                                                <td> {customer.email} </td>
                                                <td>
                                                    <div className="checkbox checkbox-primary checkbox-single">
                                                    <input type="checkbox" id="singleCheckbox2" defaultValue="option2" aria-label="Single checkbox Two" />
                                                    <label />
                                                    </div>

                                                </td>
                                                <td> 
                                                    {/* Button trigger modal */}
                                                    <button id='addloan' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#addloan${customer.id}`} >
                                                    Assign Loan
                                                    </button>
                                                </td>
                                            </tr>

                                              {/* Add New Borrower Modal */}
                                <div className="modal fade" id={`addloan${customer.id}`} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Add New Borrower</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                        <div className="modal-content">
                                                <Formik 
                                                initialValues={initialFormState(customer.id)}
                                                validationSchema={validationSchema}
                                                onSubmit={ async(values,action) => {
                                                    await add_borrower(values)
                                                }}
                                                   
                                                >
                                                    {(props) => (
                                                        <Form >

                                                   

                                                            <div className="form-group row">
                                                            <label
                                                                htmlFor="example-tel-input"
                                                                className="col-lg-5 col-form-label"
                                                            >
                                                                Branch
                                                            </label>
                                                            <div className="col-lg-10">
                                                                <Field  as = {"select"} name='branch' className="form-control" >
                                                                <option >-- Select Branch--</option>
                                                                {
                                                                    branches.map((branch) => (
                                                                        <Fragment>
                                                                        <option key={branch.id} value={branch.id} > {branch.name} </option>
                                                                        </Fragment>
                                                                    

                                                                    ))
                                                                }

                                                                </Field >
                                                            </div>
                                                            <ErrorMsg name="branch" />
                                                            </div>
                                          <div className="form-group row">
                                                        <label
                                                            htmlFor="example-tel-input"
                                                            className="col-lg-5 col-form-label"
                                                        >
                                                            Loan Officer
                                                        </label>
                                                        <div className="col-lg-10">
                                                            <Field  as = {"select"} name="loan_officer" className="form-control" >
                                                            <option >-- Choose--</option>

                                                            {
                                                                marketers.map((marketer) => (
                                                                    <Fragment>
                                                                    <option  key={marketer.id} value={marketer.id} > {marketer.first_name} </option>
                                                                    </Fragment>
                                                                

                                                                ))
                                                            }
                                                            </Field >
                                                        </div>
                                                        <ErrorMsg name="loan_officer" />
                                                        </div>


                                                        <div className="form-group row">
                                                        <label
                                                            htmlFor="example-tel-input"
                                                            className="col-lg-5 col-form-label"
                                                        >
                                                            Catergory
                                                        </label>
                                                        <div className="col-lg-10">
                                                            <Field  as = {"select"} name="category" className="form-control">
                                                            <option>Select One</option>
                                                            <option value="FLAT">Flat</option>
                                                            <option value="REDUCING BALANCE">Reducing Balance</option>
                                                            </Field >
                                                        </div>
                                                        <ErrorMsg name="category" />
                                                        </div>


                                                        <div className="form-group row">
                                                        <label
                                                            htmlFor="example-tel-input"
                                                            className="col-lg-5 col-form-label"
                                                        >
                                                            Loan Product
                                                        </label>
                                                        <div className="col-lg-10">
                                                            <Field as = {"select"} className="form-control" name="loan_product"  >
                                                            <option >-- Select Product--</option>
                                                            {
                                                                products.map((product) => (
                                                                    <Fragment>
                                                                    <option key={product.id} value={product.id} > {product.name} </option>
                                                                    </Fragment>
                                                                

                                                                ))
                                                            }
                                                            </Field >
                                                        </div>
                                                        <ErrorMsg name="loan_product" />
                                                        </div>



                                                        <div className="form-group row">
                                                        <label
                                                            htmlFor="example-search-input"
                                                            className="col-lg-5 col-form-label"
                                                        >
                                                            Loan Amount
                                                        </label>
                                                        <div className="col-lg-10">
                                                            <Field
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="#1000000"
                                                            id="example-search-input"
                                                            name="amount"
                
                                                            />
                                                        </div>
                                                        <ErrorMsg name="amount" />
                                                        </div>


                                                        <div className="form-group row">
                                                            <label htmlFor="example-tel-input" className="col-lg-5 col-form-label">Repayment Period</label>
                                                            <div className="col-lg-10">
                                                                <Field  as = {"select"} name='payment_frequency' className="form-control">
                                                                        <option>Select One</option>
                                                                            <option value="DAILY">Daily</option>
                                                                            <option value="WEEKLY">Weekly</option>
                                                                            <option value="BIWEEKLY">Biweekly</option>
                                                                            <option value="MONTHLY">Monthly</option>
                                                                            <option value="YEARLY">Yearly</option>
                                                                    </Field >
                                                            </div>
                                                            <ErrorMsg name="payment_frequency" />
                                                            </div>

                                                            <div className="form-group row">
                                                            <label htmlFor="example-tel-input" className="col-lg-5 col-form-label">Loan Period</label>
                                                            <div className="col-lg-10">
                                                                <Field  as = {"select"} name="loan_period_in_months" className="form-control" >
                                                                        <option>Select One</option>
                                                                            <option value="1">1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3">3</option>
                                                                            <option value="4">4</option>               
                                                                            <option value="5">5</option>
                                                                    

                                                                    </Field >
                                                            </div>
                                                            <ErrorMsg name="loan_period_in_years" />
                                                            </div>


                                                        <div className="form-group row">
                                                        <label htmlFor="example-tel-input" className="col-lg-5 col-form-label">Payment Schedule</label>
                                                        <div className="col-lg-10">
                                                            <Field  as = {"select"} name='payment_schedule' className="form-control" >
                                                                    <option>Select One</option>
                                                                        <option value="MANUAL">Manuel Payment</option>
                                                                        <option value="AUTO">System auto Debit</option>
                                                                </Field >
                                                        </div>
                                                        <ErrorMsg name="payment_schedule" />
                                                        </div>

                                        

                                                        {
                                                            loader ? 
                                                            ( <div className="sweet-loading">
                                                                <DotLoader color={color} loading={loading} css={override}  size={80} />
                                                                </div>)
                                                            : (
                                                                <button
                                                                className="btn btn-success"
                                                                type="submit"
                                                                >
                                                                Add
                                                                </button>
                                                            )
                                                        }
                                                </Form>
                                                    )}
                                                </Formik>
            
                            
                                                <div className="form-group row"></div>
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
                        </div> {/* end row */}
                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default AddBorrower