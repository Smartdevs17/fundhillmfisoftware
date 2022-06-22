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



function AllExpenses() {

    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const {user} = useContext(Context);
    const [expenses,setExpenses] = useState([]);



    useEffect(() => {
        setIsLoading(true)

        const allExpenses = async() => {
          const res = await api.service().fetch("/dashboard/expense/",true);
          console.log(res.data)
          if(api.isSuccessful(res)){
            //   console.log(res)
            setExpenses(res.data.results)
          }
    
          setIsLoading(false);
    
        }

        allExpenses();
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
                                    <li className="breadcrumb-item active">Expenses</li>
                                </ol>
                                </div>
                                <h4 className="page-title">All Expenses made by the company</h4>
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Expenses</h4>
                         
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
                                                                    <th>Expenses ID</th>
                                                                    <th>Expenses Marketer </th>
                                                                    <th>Expenses Amount</th>
                                                                    <th>Description</th>
                                                                    <th>Action</th>
                                                                    </tr>
                                                                </thead>                                
                                                                <tbody>
                                                        
                                                                     {
                                                                        expenses.map((expense) => {
                                                                            return(
                                                                                <tr>
                                                                                <td key={expense.id}> {expense.id} </td>
                                                                                <td> {expense.agent.first_name} {expense.agent.last_name} </td>
                                                                                <td> {expense.amount} </td>
                                                                                <td> {expense.description}  </td>
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


                            {/* Modal */}
                                    <div className="modal fade" id="expensesId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Customer ID</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container-fluid">


                                            <form action="" >


                                                <div className="form-group row">
                                                    <label
                                                    htmlFor="example-tel-input"
                                                    className="col-lg-2 col-form-label"
                                                    >
                                                    Choose Marketer
                                                    </label>
                                                    <div className="col-lg-10">
                                                    <select className="form-control" data-toggle="select2" >
                                                        <option>Select One</option>
                                                        <option value={"Marketer One"}>Marketer 1</option>
                                                        <option value={"Marketer Two"}>Marketer 2</option>
                                                        <option value={"Marketer Three"}>Marketer 3</option>
                                                    </select>
                                                    </div>
                                                </div>



                                                <div className="form-group row">
                                                    <label
                                                    htmlFor="example-text-input"
                                                    className="col-lg-2 col-form-label"
                                                    >
                                                    Amount
                                                    </label>
                                                    <div className="col-lg-10">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="$1000"
                                                        id="example-text-input"
                                                    />
                                                    </div>
                                                </div>



                                                <div className="form-group row">
                                                    <label
                                                    htmlFor="example-text-input"
                                                    className="col-lg-2 col-form-label"
                                                    >
                                                    Description
                                                    </label>
                                                    <div className="col-lg-10">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="John"
                                                        id="example-text-input"
                                                    />
                                                    </div>
                                                </div>



                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Update Expenses
                                                </button>
                                                </form>


               

                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
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

export default AllExpenses