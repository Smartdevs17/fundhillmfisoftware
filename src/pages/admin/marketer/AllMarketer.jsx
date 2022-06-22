import { Fragment, useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import {api} from "../../../services";
import { css } from "@emotion/react";
import {ClipLoader,BounceLoader} from "react-spinners";
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
                                                                <tr>
                                                                    <td> 1 </td>
                                                                    <td>John Doe</td>
                                                                    <td>080691235768</td>
                                                                    <td>johndoe@gmail.com</td>
                                                                    <td>Agent</td>
                                                                    <td>
                                                                    {/* Button trigger modal */}
                                                                    <button id='marketer' type="button" className="btn btn-primary" data-toggle="modal" data-target="#marketerId">
                                                                    View
                                                                    </button>
                                                                    </td>                                

                                                                </tr>

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
                                                                            {/* Button trigger modal */}
                                                                            <button id='marketer' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#marketer_${marketer.id}`} >
                                                                            View
                                                                            </button>
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
                                                                            {/* <div className="modal-body"> */}
                                                                                <div className="modal-content">


                                                                                <div className="card">
                                                                                {/* <div className="card-body">
                                                                                    <h5 className="card-title ">Full Name: </h5>
                                                                                    <h5 className="card-title">Telephone: </h5>
                                                                                    <h5 className="card-title">Email: </h5>
                                                                                    <h5 className="card-title">Role: </h5>
                                                                                    <h5 className="card-title">Branch: </h5>

                                                                                </div> */}
                                                                                <img className="img-fluid" src="/assets/images/users/avatar-11.jpg" alt="Card image cap" />
                                                                                <div className="card-body">
                                                                                        <button type="button" style={{margin: "10px"}}  className="btn btn-primary"> <Link  style={{color: "#fff"}} to="#" > Update </Link> </button>     
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