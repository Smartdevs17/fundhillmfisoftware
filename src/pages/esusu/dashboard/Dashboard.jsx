import {Fragment,useEffect,useContext,useState} from 'react'
import { Link } from "react-router-dom";
import "./Dashboard.css"
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

function Dashboard() {
  // const [isLoading, setIsLoading] = useState(false);
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ADD8E6");
  // const [data,setData] = useState({});
  // const [org,setOrg] = useState(false);
  // const {user} = useContext(Context)

  // if(user.created_by==="FUNDHILL"){
  //   setOrg(true)
  // }

  //   useEffect( () => {
  //    const dashboard = async() => {
  //         setIsLoading(true)

  //         const orgs = await api
  //         .service()
  //         .fetch("/dashboard/index/data/",true);
  //           console.log(orgs.data.data)
  //           setIsLoading(false)
  //           if(orgs){
  //               setData(orgs.data.data);
  //               setIsLoading(false)
  //           }else{
  //             console.log("No Data found")
  //             setIsLoading(true)
  //           }
  //       }
  //         dashboard()
  //   }, []);
    

  return (
    
    <Fragment>

                  <div className="content-page">
                  <div className="content">
                    {/* Start Content*/}
                    <div className="container-fluid">
                    <div className="row">
                    <div className="col-12">
                      <div className="page-title-box">
                         <div className="page-title-right">
                           <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="#">FundHill</Link></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                           </ol>
                        </div>
                         <h4 className="page-title">Dashboard</h4>
                       </div>
                    </div>
                   </div>     
                                                              {/* end page title */} 

                      {/* {
                        isLoading
                        ?
                        ( 
                                                            <div className="sweet-loading text-center">
                                                                <BounceLoader color={color} loading={loading} css={override}  size={150} />
                                                            </div>
                                                            
                                                            ):
                                                            (
                                                              <> */}
                                                         
                                                               
                                                                  
                                                                  
                                                           
                                                              <div className="row">

                                                              <div className="col-md-6 col-xl-3">
                                                                  <div className="card-box tilebox-one">
                                                                    <i className="icon-rocket float-right m-0 h2 text-muted" />
                                                                    <h6 className="text-muted text-uppercase mt-0">Members</h6>
                                                                    <h3 className="my-3" data-plugin="counterup"> 65</h3>
                                                                    <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/admin/dashboard/allcustomer">See more</Link></button></span>
                                                                  </div>
                                                                </div>

                                                                <div className="col-md-6 col-xl-3">
                                                                  <div className="card-box tilebox-one">
                                                                    <i className="icon-layers float-right m-0 h2 text-muted" />
                                                                    <h6 className="text-muted text-uppercase mt-0"> Transactions</h6>
                                                                    <h3 className="my-3">#<span data-plugin="counterup"> 9600 </span></h3>
                                                                    <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/admin/dashboard/deposit_report">See more</Link></button></span>
                                                                  </div>
                                                                </div>


                                                                <div className="col-md-6 col-xl-3">
                                                                  <div className="card-box tilebox-one">
                                                                    <i className="icon-paypal float-right m-0 h2 text-muted" />
                                                                    <h6 className="text-muted text-uppercase mt-0">Payout</h6>
                                                                    <h3 className="my-3">#<span data-plugin="counterup"> 6500 </span></h3>
                                                                    <span className="badge badge-success mr-1"> +11% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/admin/dashboard/withdrawal_report">See more</Link></button></span>
                                                                  </div>
                                                                </div>
                                                                <div className="col-md-6 col-xl-3">
                                                                  <div className="card-box tilebox-one">
                                                                    <i className="icon-chart float-right m-0 h2 text-muted" />
                                                                    <h6 className="text-muted text-uppercase mt-0">Loans</h6>
                                                                    <h3 className="my-3">#<span data-plugin="counterup"> 30000</span></h3>
                                                                    <span className="badge badge-pink mr-1"> 0% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/admin/dashboard/ongoing_loan">See more</Link></button></span>
                                                                  </div>
                                                                </div>

                                                           



                                              
                                                                <div className="col-md-6 col-xl-3">
                                                                  <div className="card-box tilebox-one">
                                                                    <i className="icon-rocket float-right m-0 h2 text-muted" />
                                                                    <h6 className="text-muted text-uppercase mt-0">Expenditure</h6>
                                                                    <h3 className="my-3" data-plugin="counterup"> 89</h3>
                                                                    <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">See more</span>
                                                                  </div>
                                                                </div> 
                                                                
                          

                                                       

                                                                <div className="col-md-6 col-xl-3">
                                                                  <div className="card-box tilebox-one">
                                                                    <i className="icon-rocket float-right m-0 h2 text-muted" />
                                                                    <h6 className="text-muted text-uppercase mt-0">Report</h6>
                                                                    <h3 className="my-3" data-plugin="counterup"> 93829</h3>
                                                                    <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted"><button type="button" className="btn btn-link waves-effect"><Link to="/admin/dashboard/new_product">See more</Link></button></span>
                                                                  </div>   
                                                                </div>   


                                                                
                                                      

                                                                <div className="col-md-6 col-xl-3">
                                                                  <div className="card-box tilebox-one">
                                                                    <i className="icon-rocket float-right m-0 h2 text-muted" />
                                                                    <h6 className="text-muted text-uppercase mt-0">Current Balance</h6>
                                                                    <h3 className="my-3" data-plugin="counterup"> 2000 </h3>
                                                                    <span className="badge badge-warning mr-1"> +89% </span> <span className="text-muted">Last year</span>
                                                                  </div>
                                                                </div>




                                                              </div>

                                                            
                                                              {/* </>
                                                            )
                                                            
                      } */}

                      {/* start page title */}
                     
                      {/* end row */}




                      {/* end row */}
             
                    </div>
                     {/* end container-fluid */}
                  </div>
                   {/* end content */}
 
                  </div>
                 

              

    </Fragment>
    
  )
}

export default Dashboard