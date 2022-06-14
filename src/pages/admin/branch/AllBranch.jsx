import {Fragment,useState,useEffect,useContext} from 'react'
import { Link } from "react-router-dom";
import { api } from '../../../services';
import { css } from "@emotion/react";
import {DotLoader,ClipLoader,RingLoader,CircleLoader,RotateLoader,SyncLoader,BarLoader,BeatLoader,BounceLoader,ClockLoader,FadeLoader,GridLoader,HashLoader,MoonLoader,PacmanLoader} from "react-spinners";
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
    const [data,setData] = useState([]);
    const {user} = useContext(Context);
 


    useEffect(async () => {
        setIsLoading(true)

        const values = {
            org_id : `${user.org_id}`
        }
        const branches = await api
                .service()
                .fetch("/dashboard/branches/all-branches/",values,true);
                console.log(branches)
                console.log(isLoading);
            if(branches){
                setData(branches);
                setIsLoading(false)
            }else{
                setIsLoading(true)
            }
    }, [])
    

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
                                <p className="sub-header">
                                All The Branches that belong to the organisation.
                                </p>

                                                      <div className="sweet-loading text-center">
                                                        <BounceLoader color={color} loading={loading} css={override}  size={150} />
                                                    </div>


                                        <div className="form-group text-center">
                                                    
                                                    {
                                                        isLoading ? 
                                                        ( <div className="sweet-loading">
                                                            <ClipLoader color={color} loading={loading} css={override}  size={80} />
                                                            </div>)
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
                                                        
                                                                    <tr>
                                                                        <td>Branch-1</td>
                                                                        <td>Tudun Wada Branch</td>
                                                                        <td>Tudun wada</td>
                                                                        <td>Mustafa Yahaya</td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                                                  
                                                                                {/* {`/admin/dashboard/updatebranch?branch_id=${branch?.branch_id}`}  */}
                                                                                <button type="button" className="btn btn-primary"> <Link to={`/admin/dashboard/updatebranch?branch_id=${1}`} style={{color: "#fff"}}> Update </Link> </button>
                                                                                <button type="button" style={{margin: "10px"}}  className="btn btn-danger"> <Link  style={{color: "#fff"}} to={`/admin/dashboard/deletebranch?branch_id=${1}`} > Delete </Link> </button>     

                                                                            </div>

                                                                        </td>
                                                                        </tr>

                                                                     {
                                                                        data.map((branch) => {
                                                                            return(
                                                                                <tr>
                                                                                <td> {branch.branch_id} </td>
                                                                                <td> {branch.branch_name} </td>
                                                                                <td> {branch.branch_address} </td>
                                                                                <td> {branch.branch_head} </td>
                                                                                <td>
                                                                                    <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                                                                        <button type="button" className="btn btn-primary"> <Link to={`/admin/dashboard/updatebranch?branch_id=${1}`} style={{color: "#fff"}}> Update </Link> </button>
                                                                                        <button type="button" style={{margin: "10px"}}  className="btn btn-danger"> <Link  style={{color: "#fff"}} to={`/admin/dashboard/deletebranch?branch_id=${1}`} > Delete </Link> </button>     
                
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