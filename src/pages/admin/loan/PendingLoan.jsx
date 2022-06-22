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





function PendingLoan() {

    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
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
                                <h4 className="page-title">Pending Loan</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Pending Loans</h4>

                                <table id="" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                <thead>
                                    <tr>
                                    <th> ID</th>
                                    <th> Full Names</th>
                                    <th> Amount + Interest </th>
                                    <th> Account No. </th>
                                    <th> Product </th>
                                    <th> Payback Date </th>
                                    <th> Date </th>
                                    <th> Status </th>
                                    <th> Payment Status </th>
                                    <th> Action </th>
       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Donald Trump</td>
                                    <td>#1200000</td>
                                    <td>1234567889</td>
                                    <td>Product 1</td>
                                    <td>2 Jan 2022</td>
                                    <td>4 Oct 2022</td>
                                    <td>Fixed</td>
                                    <td>Not Approved</td>
                                    <td>

                                    <div className="btn-group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action <i className="mdi mdi-chevron-down" />
                                    </button>
                                    <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 38px, 0px)'}}>
                                       
                                        <button id="approve-loan" type="button" className="dropdown-item btn btn-outline-success waves-effect waves-light" >
                                        Approve Loan
                                        </button>        
                                        {/* <button type="button" className="btn btn-danger" id="sa-warning">Delete</button>                               */}

                                         <button id='reject-loan' type="button" className=" dropdown-item btn btn-outline-danger waves-effect waves-light" >
                                        Reject Loan
                                        </button>

                                        <button id="delete-loan" type="button" className=" dropdown-item btn btn-outline-danger waves-effect waves-light">
                                            Delete
                                        </button> 

                                    </div>
                                    </div>

                                    </td>
                                    </tr>
                                </tbody>
                                    </table>
                               
                            </div>
                            </div>
                        </div> {/* end row */}




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
                                                            <th> ID</th>
                                                            <th> Full Names</th>
                                                            <th> Amount + Interest </th>
                                                            <th> Account No. </th>
                                                            <th> Product </th>
                                                            <th> Payback Date </th>
                                                            <th> Date </th>
                                                            <th> Status </th>
                                                            <th> Payment Status </th>
                                                            <th> Action </th>
                            
                                                            </tr>
                                                        </thead>
                                        <tbody>
                                      

                                            {
                                                data.map((customer) => (
                                                    <Fragment>
                                                    <tr >
                                                                <th ><span className="co-name"> {customer.id} </span></th>
                                                                <td key={customer.id}>{customer.first_name} {customer.last_name} </td>
                                                                <td> {customer.phone} </td>
                                                                <td> {customer.email} </td>
                                                                <td> {customer.country.name} </td>
                                                                <td> {customer.status} </td>
                                                                <td> 
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

export default PendingLoan