import {Fragment,useEffect,useContext,useState} from 'react'
import { Link } from "react-router-dom";
// import "./Dashboard.css"
import { api } from '../../../services';
import { css } from "@emotion/react";
import {DotLoader,ClipLoader,RingLoader,CircleLoader,RotateLoader,SyncLoader,BarLoader,BeatLoader,BounceLoader,ClockLoader,FadeLoader,GridLoader,HashLoader,MoonLoader,PacmanLoader} from "react-spinners";
import {Context} from "../../../context/Context";


function AllCustomer() {
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const [data,setData] = useState("");
    const {user} = useContext(Context)

    useEffect( async () => {
      setIsLoading(true)

      const orgs = await api
      .service()
      .fetch(`/dashboard/accounts/manage?org_id${user.org_id}`,true);
        console.log(orgs)
        setIsLoading(false)
        if(orgs){
            setData(orgs);
            setIsLoading(false)
        }else{
          console.log("No Data found")
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
                                    <li className="breadcrumb-item active">Customer</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Total Newly Registered Customers</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
            



                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                <div className="responsive-table-plugin">
                                    <div className="table-rep-plugin">
                                    <div className="table-responsive" data-pattern="priority-columns">
                                        <table id="tech-companies-1" className="table table-striped">
                                        <thead>
                                            <tr>
                                            <th>ID</th>
                                            <th data-priority={1}>Full Name</th>
                                            <th data-priority={3}>Telephone</th>
                                            <th data-priority={1}>Email</th>
                                            <th data-priority={3}>Savings Plan</th>
                                            <th data-priority={3}>Marketer</th>
                                            <th data-priority={6}>Branch</th>
                                            <th data-priority={6}>Status</th>
                                            <th data-priority={6}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th>ID <span className="co-name">Customer ID</span></th>
                                            <td>597.74</td>
                                            <td>12:12PM</td>
                                            <td>14.81 (2.54%)</td>
                                            <td>582.93</td>
                                            <td>597.95</td>
                                            <td>597.73 x 100</td>
                                            <td> 
                                                <button type="button" className="btn btn-danger"> <Link to="/admin/dashboard/updatecustomer" style={{color: "#fff"}}> Approved </Link> </button> </td>
                                            <td>
                                                {/* Button trigger modal */}
                                                <button id='branch' type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                                                View
                                                </button>
                                            </td>
                                            </tr>
                                            <tr>
                                            <th>AAPL <span className="co-name">Apple Inc.</span></th>
                                            <td>378.94</td>
                                            <td>12:22PM</td>
                                            <td>5.74 (1.54%)</td>
                                            <td>373.20</td>
                                            <td>381.02</td>
                                            <td>378.92 x 300</td>
                                            <td>378.99 x 100</td>
                                            <td>505.94</td>
                                            </tr>
                                            <tr>
                                            <th>AMZN <span className="co-name">Amazon.com Inc.</span></th>
                                            <td>191.55</td>
                                            <td>12:23PM</td>
                                            <td>3.16 (1.68%)</td>
                                            <td>188.39</td>
                                            <td>194.99</td>
                                            <td>191.52 x 300</td>
                                            <td>191.58 x 100</td>
                                            <td>240.32</td>
                                            </tr>
                                            <tr>
                                            <th>ORCL <span className="co-name">Oracle Corporation</span></th>
                                            <td>31.15</td>
                                            <td>12:44PM</td>
                                            <td>1.41 (4.72%)</td>
                                            <td>29.74</td>
                                            <td>30.67</td>
                                            <td>31.14 x 6500</td>
                                            <td>31.15 x 3200</td>
                                            <td>36.11</td>
                                            </tr>
                                            <tr>
                                            <th>MSFT <span className="co-name">Microsoft Corporation</span></th>
                                            <td>25.50</td>
                                            <td>12:27PM</td>
                                            <td>0.66 (2.67%)</td>
                                            <td>24.84</td>
                                            <td>25.37</td>
                                            <td>25.50 x 71100</td>
                                            <td>25.51 x 17800</td>
                                            <td>31.50</td>
                                            </tr>
                                        
                                        



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
                                            <div className="card-body">
                                                <h5 className="card-title">Acount Number: </h5>
                                                <h5 className="card-title ">Full Name: </h5>
                                                <h5 className="card-title">Telephone: </h5>
                                                <h5 className="card-title">Savings Plan: </h5>
                                            </div>
                                            <img className="img-fluid" src="/assets/images/small/img-12.jpg" alt="Card image cap" />
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
                                    </div> {/* end .table-responsive */}
                                    </div> {/* end .table-rep-plugin*/}
                                </div> {/* end .responsive-table-plugin*/}
                                </div> {/* end card-box */}
                            </div> {/* end col */}
                            </div>
                            {/* end row */}



                        {/* <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                <div className="responsive-table-plugin">
                                    <div className="table-rep-plugin">
                                    <div className="table-responsive" data-pattern="priority-columns">
                                        <table id="tech-companies-1" className="table table-striped">
                                        <thead>
                                            <tr>
                                            <th>Company</th>
                                            <th data-priority={1}>Last Trade</th>
                                            <th data-priority={3}>Trade Time</th>
                                            <th data-priority={1}>Change</th>
                                            <th data-priority={3}>Prev Close</th>
                                            <th data-priority={3}>Open</th>
                                            <th data-priority={6}>Bid</th>
                                            <th data-priority={6}>Ask</th>
                                            <th data-priority={6}>1y Target Est</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th>GOOG <span className="co-name">Google Inc.</span></th>
                                            <td>597.74</td>
                                            <td>12:12PM</td>
                                            <td>14.81 (2.54%)</td>
                                            <td>582.93</td>
                                            <td>597.95</td>
                                            <td>597.73 x 100</td>
                                            <td>597.91 x 300</td>
                                            <td>731.10</td>
                                            </tr>
                                            <tr>
                                            <th>AAPL <span className="co-name">Apple Inc.</span></th>
                                            <td>378.94</td>
                                            <td>12:22PM</td>
                                            <td>5.74 (1.54%)</td>
                                            <td>373.20</td>
                                            <td>381.02</td>
                                            <td>378.92 x 300</td>
                                            <td>378.99 x 100</td>
                                            <td>505.94</td>
                                            </tr>
                                            <tr>
                                            <th>AMZN <span className="co-name">Amazon.com Inc.</span></th>
                                            <td>191.55</td>
                                            <td>12:23PM</td>
                                            <td>3.16 (1.68%)</td>
                                            <td>188.39</td>
                                            <td>194.99</td>
                                            <td>191.52 x 300</td>
                                            <td>191.58 x 100</td>
                                            <td>240.32</td>
                                            </tr>
                                            <tr>
                                            <th>ORCL <span className="co-name">Oracle Corporation</span></th>
                                            <td>31.15</td>
                                            <td>12:44PM</td>
                                            <td>1.41 (4.72%)</td>
                                            <td>29.74</td>
                                            <td>30.67</td>
                                            <td>31.14 x 6500</td>
                                            <td>31.15 x 3200</td>
                                            <td>36.11</td>
                                            </tr>
                                            <tr>
                                            <th>MSFT <span className="co-name">Microsoft Corporation</span></th>
                                            <td>25.50</td>
                                            <td>12:27PM</td>
                                            <td>0.66 (2.67%)</td>
                                            <td>24.84</td>
                                            <td>25.37</td>
                                            <td>25.50 x 71100</td>
                                            <td>25.51 x 17800</td>
                                            <td>31.50</td>
                                            </tr>
                                        
                                        
                                            
                                        </tbody>
                                        </table>
                                    </div> 
                                    </div>
                                </div>
                                </div> 
                            </div> 
                            </div> */}



                        </div>
                        </div>
                        
                        </div>
    
        </Fragment>
      )
}

export default AllCustomer