import { Fragment, useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import {ClipLoader,BounceLoader} from "react-spinners";
import { Formik, Form, Field } from "formik";
import {object as yupObject,string as yupString,number as yupNumber} from "yup";
import { ErrorMsg } from "../../../layouts/components";
import { toast } from "react-toastify";

import { api } from '../../../services';
import { css } from "@emotion/react";
import {Context} from "../../../context/Context";




// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function AllMarketer() {
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const {user} = useContext(Context);
    const [marketers,setMarketers] = useState([]);



    useEffect(() => {
        setIsLoading(true)

        const allMarketer = async() => {
          const res = await api.service().fetch("/accounts/manage/?is_staff=True",true);
          console.log(res.data)
          if(api.isSuccessful(res)){
            //   console.log(res)
            setMarketers(res.data.results)
          }
    
          setIsLoading(false);
    
        }

        allMarketer();
      },[])


      const edit_marketer = async(values,id) => {
        setLoading(true);
        console.log(values)

        const response = await api
            .service()
            .update(`/accounts/auth/${id}/`,values,true)

        if(api.isSuccessful(response)){
        setTimeout( () => {
            toast.success("Marketer profile successfully updated!!");
            // navigate("/admin/allbranch",{replace: true})
        },0);
        }
        setLoading(false);
    }
    const fund_marketer = async(values,id) => {
        setLoading(true);
        console.log(values)

        const response = await api
            .service()
            .push(`/wallet/marketer/${id}/fund-wallet/`,values,true)

        if(api.isSuccessful(response)){
        setTimeout( () => {
            toast.success("Transaction successful");
            // navigate("/admin/allbranch",{replace: true})
        },0);
        }
        setLoading(false);
    }



      const deleteMarketer = async(id) => {
        const res = await api.service().remove(`/accounts/auth/${id}/`,true);
        console.log(res.data)
        if(api.isSuccessful(res)){
            setTimeout( () => {
                toast.success("Successfully deleted marketer!");
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
                                    <li className="breadcrumb-item active">Marketer</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All Marketers</h4>
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
                                                                    <th>Marketer ID</th>
                                                                    <th>Full Name</th>
                                                                    <th>Telephone</th>
                                                                    <th>Email</th>
                                                                    <th>Role</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                                </thead>
                                                                    <tbody>


                                                                {
                                                                    marketers.map((marketer) => (

                                                                        <Fragment>
                                                                        
                                                                        <tr key={marketer.id} >
                                                                            <td> {marketer.id} </td>
                                                                            <td> {marketer.first_name} {marketer.last_name} </td>
                                                                            <td> {marketer.phone} </td>
                                                                            <td> {marketer.email} </td>
                                                                            <td> {marketer.user_role} </td>  


                                                                             <td>   
                                                                             <div className="btn-group">
                                                                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    Action
                                                                                </button>
                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#marketer_${marketer.id}`} >Action</button>
                                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#edit_${marketer.id}`} >Edit Profile</button>
                                                                                    <button className="dropdown-item" type="button" data-toggle="modal" data-target={`#fund_${marketer.id}`}  >Fund Wallet</button>
                                                                                </div>
                                                                                </div>

                                                                            </td>                             

                                                                        </tr>


                                                                        {/* Modal */}
                                                                        <div className="modal fade" id={`marketer_${marketer.id}`} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                                                        <div className="modal-dialog" role="document">
                                                                            <div className="modal-content">
                                                                            <div className="modal-header">
                                                                                <h5 className="modal-title">Marketer ID: {marketer.id} </h5>
                                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                <span aria-hidden="true">×</span>
                                                                                </button>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                {/* <div className="modal-content"> */}


                                                                                {/* <div className="card-body">
                                                                                    <h5 className="card-title ">Full Name: </h5>
                                                                                    <h5 className="card-title">Telephone: </h5>
                                                                                    <h5 className="card-title">Email: </h5>
                                                                                    <h5 className="card-title">Role: </h5>
                                                                                    <h5 className="card-title">Branch: </h5>

                                                                                </div> */}
                                                                                <img className="img-fluid" src="/assets/images/users/avatar-11.jpg" alt="Card image cap" />
                                                                                <div className="card-body">
                                                                                        {/* <button type="button" style={{margin: "10px"}}  className="btn btn-primary"> <Link  style={{color: "#fff"}} to="#" > Update </Link> </button>      */}
                                                                                        {/* <button type="button" className="btn btn-danger"> <Link to="#" style={{color: "#fff"}}> Delete </Link> </button> */}
                                                                                        <button type="button" onClick={() => deleteMarketer(marketer.id)} className="btn btn-danger" style={{color: "#fff"}} > Delete </button>
                                                                                </div>


                                                                                </div>
                                                                            {/* </div> */}
                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                        </div>


                                                                                                    {/* Edit Marketer Profile Modal */}
                             <div className="modal fade" id={`edit_${marketer.id}`} tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Marketer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                        <h4 className="header-title mb-4">Edit marketer Profile</h4>
                                            <Formik
                                                initialValues={{
                                                            first_name: `${marketer.first_name}`,
                                                            middle_name: `${marketer.middle_name}`,
                                                            last_name: `${marketer.last_name}`,
                                                            email: `${marketer.email}`,
                                                            phone: `${marketer.phone}`,   
                                                            agent_id: `${marketer.user_role}`,
                                                        }}
                                                // validationSchema= {validationSchema}
                                                onSubmit = { async (values,actions) => {
                                                    await edit_marketer(values,marketer.id)
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
                                                    htmlFor="example-tel-input"
                                                    className="col-lg-2 col-form-label"
                                                    >
                                                    Marketer
                                                    </label>
                                                    <div className="col-lg-10">
                                                    <Field as="select" name="user_role" className="form-control">
                                                        <option> {marketer.user_role} </option>
                                                        <option value="ADMIN" >Admin</option>
                                                        <option value="MANAGER" >Manager</option>
                                                        <option value="TELLER" >Teller</option>
                                                        <option value="AGENT" >Agent</option>
                                                        </Field>
                                                    </div>
                                                </div>   

                                                    <button
                                                    type="submit"
                                                    className="btn btn-success"
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
                                                                                       
                                                                                       {/* Fund marketer Wallet Modal */}
                                                                                       <div className="modal fade" id={`fund_${marketer.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                           <div className="modal-dialog" role="document">
                                                                                           <div className="modal-content">
                                                                                               <div className="modal-header">
                                                                                               <h5 className="modal-title" id="exampleModalLabel"> Fund {marketer.first_name} {marketer.last_name} Wallet </h5>
                                                                                               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                   <span aria-hidden="true">×</span>
                                                                                               </button>
                                                                                               </div>
                                                                                               <div className="modal-body">
                                                                                        <h4 className="header-title mb-4">Edit marketer Profile</h4>
                                                                                            <Formik
                                                                                                initialValues={{
                                                                                                            amount: null,
                                                                                                        }}
                                                                                                // validationSchema= {validationSchema}
                                                                                                onSubmit = { async (values,actions) => {
                                                                                                    await fund_marketer(values,marketer.id)
                                                                                                }}
                                                                                            >
                                                                                                {(props) => (
                                                                                                    <Form>
                                                                                                
                                                                                                    
                                                                                                    <div className="form-group row">
                                                                                                    <label
                                                                                                        htmlFor="example-text-input"
                                                                                                        className="col-lg-2 col-form-label"
                                                                                                    >
                                                                                                    Amount
                                                                                                    </label>
                                                                                                    <div className="col-lg-10">
                                                                                                        <Field
                                                                                                        as = {"input"}
                                                                                                        className="form-control"
                                                                                                        type="text"
                                                                                                        placeholder=""
                                                                                                        name="amount"
                                                                                                        />
                                                                                                    </div>
                                                                                                    {/* <ErrorMsg name={"first_name"} /> */}
                                                                                                    </div>  
     

                                                                                                    <button
                                                                                                    type="submit"
                                                                                                    className="btn btn-success"
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

export default AllMarketer