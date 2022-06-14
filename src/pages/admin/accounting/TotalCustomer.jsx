import { Fragment,useContext,useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { api  } from "../../../services";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import {DotLoader,ClipLoader} from "react-spinners";
import {Context} from "../../../context/Context";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
  align-items: center;
`;


function TotalCustomer() {
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const [data,setData] = useState([]);
    const [user] = useContext(Context);
    

    useEffect( async() => {
        setIsLoading(true)

        const customers = await api
                .service()
                .fetch(`/dashboard/accounting/${user.org_id}/customers/`,true);
                console.log(customers)
                console.log(isLoading);
            if(customers){
                setData(customers);
                setIsLoading(false)
            }else{
                setIsLoading(true)
            }
    }, []);


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
                                    <li className="breadcrumb-item active">Account</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All Customers with their respective Agents</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 





                             <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                    <h4 className="header-title">Total Customers</h4>

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
                                                <th>Customer ID</th>
                                                <th>Date</th>
                                                <th>Customer</th>
                                                <th>Marketer</th>
                                                <th>Account Number</th>
                                                <th>Savings Plan</th>
                                                <th>Balance</th>
                                            </tr>
                                            </thead>
        
                                                <tbody>
                                                <tr>
                                                    <td> 1 </td>
                                                    <td>Tiger Nixon</td>
                                                    <td>John Bull</td>
                                                    <td>1234567890</td>
                                                    <td>Esusu</td>
                                                    <td>08076895837</td>
                                                    <td>$320,800</td>
                                                </tr>


                                                {
                                                    data.map((customer) => {
                                                        return(
                                                                <tr>
                                                                    <td> {customer.id} </td>
                                                                    <td> {customer.date} </td>
                                                                    <td> {customer.customer} </td>
                                                                    <td> {customer.marketer} </td>
                                                                    <td> {customer.acc_no} </td>
                                                                    <td> {customer.transaction_type} </td>
                                                                    <td> {customer.bals } </td>
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
                                {/* end row */}
                                    
                              </div>
                        </div>
                        
                </div>
    
        </Fragment>
      )
}

export default TotalCustomer