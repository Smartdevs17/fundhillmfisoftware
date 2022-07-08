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

function PendingCustomer() {
    const [isLoading, setIsLoading] = useState(false);
    const [Loading, setLoading] = useState(false)
    let [loading, setloading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const {user} = useContext(Context)
    const [data,setData] = useState([]);

    useEffect(() => {
        setIsLoading(true)

        const allCustomer = async() => {
          const res = await api.service().fetch("/accounts/manage/?user_role=CUSTOMER&status=PENDING",true);
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

    
    const activateCustomer = async(id) => {
        const res = await api.service().fetch(`/accounts/auth/${id}/activate/`,true);
        console.log(res.data)
        if(api.isSuccessful(res)){
            setTimeout( () => {
                toast.success("Successfully activated customer!");
            },0);
            }
  
      }
    const deactivateCustomer = async(id) => {
        const res = await api.service().fetch(`/accounts/auth/${id}/deactivate/`,true);
        console.log(res.data)
        if(api.isSuccessful(res)){
            setTimeout( () => {
                toast.success("Successfully deactivated customer!");
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
                                                            <th data-priority={3}>Marketer</th>
                                                            {/* <th data-priority={6}>Branch</th> */}
                                                            {/* <th data-priority={6}>Add Plan </th> */}
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
                                                        {/* <td>
                                                            <button id='branch' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#plan_${customer.id}`} >
                                                            Add Plan
                                                            </button>
                                                        </td>                                                               */}
                                                          <td> 
                                                            <button type="button" className="btn btn-danger"> <Link to="/admin/dashboard/updatecustomer" style={{color: "#fff"}}>Not Approved </Link> </button> </td>
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
                                                        <div className="modal-body">


                                                        {/* <div className="card-body">
                                                            <h5 className="card-title">Acount Number: </h5>
                                                            <h5 className="card-title ">Full Name: </h5>
                                                            <h5 className="card-title">Telephone: </h5>
                                                            <h5 className="card-title">Savings Plan: </h5>
                                                        </div> */}
                                                        <img className="img-fluid" src={customer.avatar}  alt="Card image cap" />
                                                        <div className="card-body">
                                                                <button type="button" onClick={() => activateCustomer(customer.id)} style={{margin: "10px",ccolor: "#fff"}}  className="btn btn-primary">Activate  </button>     
                                                                <button type="button" onClick={() => deactivateCustomer(customer.id)} style={{color: "#fff"}} className="btn btn-danger"> Delete </button>
                                                        </div>

                        

                                                        </div>
                                                    {/* </div> */}
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

export default PendingCustomer