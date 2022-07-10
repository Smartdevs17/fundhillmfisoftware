import {Fragment,useState,useEffect,useContext} from 'react'
import { Link,useNavigate} from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {object as yupObject,string as yupString,number as yupNumber} from "yup";
import { ErrorMsg } from "../../../layouts/components";
import { toast } from "react-toastify";

import { api } from '../../../services';
import { css } from "@emotion/react";
import {BounceLoader} from "react-spinners";
import {Context} from "../../../context/Context";





const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
  align-items: center;
`;


function AllBranch() {
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6"); 
    const {user} = useContext(Context);
    const [data,setData] = useState([]);
    const [marketers,setMarketers] = useState([]);
    const navigate = useNavigate();




    useEffect(() => {
        setIsLoading(true)

        const allBranches = async() => {
          const res = await api.service().fetch("/dashboard/branches/",true);
          console.log(res.data)
          if(api.isSuccessful(res)){
            setData(res.data.results)
          }
    
          setIsLoading(false);
    
        }

        allBranches();
      },[]) 


            
                    const allBranches = async() => {
                        setIsLoading(true)
                      const res = await api.service().fetch("/dashboard/branches/",true);
                      console.log(res.data)
                      if(api.isSuccessful(res)){
                        setData(res.data.results)
                      }
                
                      setIsLoading(false);
                
                    }
            

      const deleteBranch = async(id) => {
        const res = await api.service().remove(`/dashboard/branches/${id}/`,true);
        console.log(res.data)
        if(api.isSuccessful(res)){
            setTimeout( () => {
                toast.success("Successfully deleted branch!");
                allBranches();
                    // setIsLoading(true)
            
                    // const allBranches = async() => {
                    //   const res = await api.service().fetch("/dashboard/branches/",true);
                    //   console.log(res.data)
                    //   if(api.isSuccessful(res)){
                    //     setData(res.data.results)
                    //   }
                
                    //   setIsLoading(false);
                
                    // }
            
                    // allBranches();
             

            },0);
            }
  
      }

      const edit_branch = async(values,id) => {
        setLoading(true);
        console.log(values)

        const response = await api
            .service()
            .update(`/dashboard/branches/${id}/`,values,true)

        if(api.isSuccessful(response)){
        setTimeout( () => {
            toast.success("branch successfully updated!!");
            // navigate("/admin/dashboard/allbranch",{replace: true})
            // history("/admin/dashboard/allbranch")
            allBranches();
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
                                    <li className="breadcrumb-item active">All Branches</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Branch</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Collections of Branches</h4>
                                {/* <p className="sub-header">
                                All The Branches that belong to the organisation.
                                </p> */}

                                                     


                                        <div className="form-group text-center">
                                                    
                                                    {
                                                        isLoading ? 
                                                        ( 
                                                     

                                                            <div className="sweet-loading text-center">
                                                                <BounceLoader color={color} loading={loading} css={override}  size={150} />
                                                            </div>
                                                                    
                                                            )
                                                        : (

                                                            <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                                                <thead>
                                                                    <tr>
                                                                    <th>Branch ID</th>
                                                                    <th>Branch Name </th>
                                                                    <th>Branch Location</th>
                                                                    <th>Head of Branch</th>
                                                                    <th>Action</th>
                                                                    </tr>
                                                                </thead>                                
                                                                <tbody>
                                                        
                                                                     {
                                                                        data.map((branch) => {
                                                                            return(
                                                                                <tr key={branch.id} >
                                                                                <td > {branch.id} </td>
                                                                                <td> {branch.name} </td>
                                                                                <td> {branch.branch_address} </td>
                                                                                <td> {branch.branch_head.first_name} {branch.branch_head.last_name} </td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center" style={{ gap: '10px' }} > 
                                                                                        {/* <button type="button" className="btn btn-primary"> <Link to={`/admin/dashboard/updatebranch?branch_id=${1}`} style={{color: "#fff"}}> Update </Link> </button> */}
                                                                                        <button type="button" className="btn btn-primary"  style={{color: "#fff"}} data-toggle="modal" data-target ={`#edit_${branch.id}`}>  Update </button>

                                                                                         {/* Button trigger modal */}
                                                                                         <button type="button" className="btn btn-secondary" data-toggle="modal" data-target ={`#modal_${branch.id}`}>
                                                                                            Delete 
                                                                                        </button>
                                                                                    </div>
                
                                                                                 
                                                                                    <div>
                                                                                       
                                                                                        {/* Delete Branch Modal */}
                                                                                        <div className="modal fade" id={`modal_${branch.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                            <div className="modal-dialog" role="document">
                                                                                            <div className="modal-content">
                                                                                                <div className="modal-header">
                                                                                                <h5 className="modal-title" id="exampleModalLabel">Confirm Delete of {branch.name} </h5>
                                                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                    <span aria-hidden="true">×</span>
                                                                                                </button>
                                                                                                </div>
                                                                                                <div className="modal-body">
                                                                                                    Are you sure you want to delete this branch?
                                                                                                </div>
                                                                                                <div className="modal-footer">
                                                                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                                                <button type="button" onClick={() => deleteBranch(branch.id)} className="btn btn-danger" style={{color: "#fff"}} > Delete </button>
                                                                                                </div>
                                                                                            </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        </div>

                                                                                <div className="
                                                                                ">


                                                                                                                    {/* Edit Branch Profile Modal */}
                                                                                <div className="modal fade" id={`edit_${branch.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                    <div className="modal-dialog" role="document">
                                                                                            <div className="modal-content">
                                                                                            <div className="modal-header">
                                                                                                <h5 className="modal-title">branch ID</h5>
                                                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                <span aria-hidden="true">×</span>
                                                                                                </button>
                                                                                            </div>

                                                                                            <div className="modal-body">
                                                                                            <h4 className="header-title mb-4">Edit branch Profile</h4>
                                                                                                <Formik
                                                                                                    initialValues={{
                                                                                                                name: `${branch.name}`,
                                                                                                                branch_address: `${branch.branch_address}`,
                                                                                                                branch_head_id: `${branch.branch_head_id}`,
                                                                                                          
                                                                                                            }}
                                                                                                    // validationSchema= {validationSchema}
                                                                                                    onSubmit = { async (values,actions) => {
                                                                                                        await edit_branch(values,branch.id)
                                                                                                    }}
                                                                                                >
                                                                                                    {(props) => (
                                                                                                        <Form>
                                                                                                    
                                                                                                        
                                                                                                        <div className="form-group row">
                                                                                                        <label
                                                                                                            htmlFor="example-text-input"
                                                                                                            className="col-lg-2 col-form-label"
                                                                                                        >
                                                                                                        Name
                                                                                                        </label>
                                                                                                        <div className="col-lg-10">
                                                                                                            <Field
                                                                                                            as = {"input"}
                                                                                                            className="form-control"
                                                                                                            type="text"
                                                                                                            placeholder=""
                                                                                                            name="name"
                                                                                                            />
                                                                                                        </div>
                                                                                                        {/* <ErrorMsg name={"first_name"} /> */}
                                                                                                        </div>  
 

                                                                                                        <div className="form-group row">
                                                                                                        <label
                                                                                                            htmlFor="example-text-input"
                                                                                                            className="col-lg-2 col-form-label"
                                                                                                        >
                                                                                                        Branch Address
                                                                                                        </label>
                                                                                                        <div className="col-lg-10">
                                                                                                            <Field
                                                                                                            as = {"input"}
                                                                                                            className="form-control"
                                                                                                            type="text"
                                                                                                            placeholder=""
                                                                                                            name="branch_address"
                                                                                                            />
                                                                                                        </div>
                                                                                                        {/* <ErrorMsg name={"first_name"} /> */}
                                                                                                        </div>

                                                                                                        <div className="form-group row">
                                                                                                        <label
                                                                                                        htmlFor="example-tel-input"
                                                                                                        className="col-lg-2 col-form-label"
                                                                                                        >
                                                                                                        Marketer
                                                                                                        </label>
                                                                                                        <div className="col-lg-10">
                                                                                                        <select  name="branch_head_id" className="form-control">
                                                                                                            <option>{branch.branch_head.first_name} {branch.branch_head.last_name} </option>
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

                                                                                        </div>


                                                                                </td>
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
                        </div> {/* end row */}
                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default AllBranch