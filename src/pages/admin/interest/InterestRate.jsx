import {Fragment,useState,useContext,useEffect} from 'react'
import { Link,useNavigate } from "react-router-dom";
import {Formik,Form,Field} from "formik";
import {object as yupObject, string as yupString,number as yupNumber} from "yup";
import {ErrorMsg} from "../../../layouts/components";
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



function InterestRate() {
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const {user} = useContext(Context)
    const [data, setData] = useState([]);
    const  navigate = useNavigate();




    useEffect(  () => {
        setIsLoading(true)

            const interestRate = async() => {
             try {
                    const interests = await api
                    .service()
                    .fetch("/dashboard/interest-rates/",true);
                    console.log(interests.data.results)
                    
                if((api.isSuccessful(interests))){
                    setData(interests.data.results);
                    setIsLoading(false)
                }else{
                    setIsLoading(true)
                }
             } catch (error) {
                console.log(error.message)
             }
    
            }

            interestRate();
    }, [])

    const initialFormState = () => ({
        name: "",
        percentage: 0,
        minimum_time_in_months: 0,
        maximum_time_in_months: 0
      });

      const validationSchema = yupObject().shape({
        name: yupString()
        .required("What type of interest rate is this"),
        percentage: yupNumber()
        .required("Enter a percentage"),
        minimum_time_in_months: yupNumber()
        .required("minimum time in months"),
        maximum_time_in_months: yupNumber()
        .required("maximum time in months"),
      });

      const add_interest = async(values) => {
        setIsLoading(true);

        try {
            console.log(values)

            const response = await api
                  .service()
                  .push("/dashboard/interest-rates/add/",values,true)
    
            if(api.isSuccessful(response)){
              setTimeout( () => {
                toast.success("Interest rate successfully created!");
                // navigate("/dashboard/interest-rates/",{replace: true});
              },0);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error.message)
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
                                    <li className="breadcrumb-item active">Interest Rate</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Customers Interest Rate</h4>
                            
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Interest Rate</h4>
                               
                                <button id='interest' type="button" className="btn btn-primary sub-header" data-toggle="modal" data-target="#interestId">
                                    Add Interest
                                </button>

                                                 
                                {
                                                        isLoading ? 
                                                        ( <div className="sweet-loading">
                                                            <ClipLoader color={color} loading={loading} css={override}  size={80} />
                                                            </div>)
                                                        : (

                                                            <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                                                <thead>
                                                                    <tr>
                                                                    <th> ID </th>
                                                                    <th> Name </th>
                                                                    <th> Percentage (%) </th>
                                                                    <th> Minimum Time  </th>
                                                                    <th> Maximum Time  </th>
                                                                    <th> Action </th>
                                                                    {/* <th></th> */}
                                                                    </tr>


                                                                </thead>

                                                                <tbody>
                                                             


                                                                    {
                                                                        data.map((interest) => {
                                                                            return(
                                                                                    <tr key={interest.id} >
                                                                                        <td > {interest.id} </td>
                                                                                        <td> {interest.name} </td>
                                                                                        <td> {interest.percentage} </td>
                                                                                        <td> {interest.minimum_time_in_months} </td>
                                                                                        <td> {interest.maximum_time_in_months} </td>
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
                               


                              {/* Add Loan interest Modal */}
                              <div className="modal fade" id="interestId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Add New interest</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        {/* <div className="row">
                                            <div className="col-12">
                                                <div className="">
                          
                                                </div>

                                            </div>
                                            </div> */}


                                            <h4 className="header-title mb-4">Interest Rate</h4>
                                                <div className="modal-body">
                                                    <Formik
                                                    initialValues={initialFormState()}
                                                    validationSchema={validationSchema}
                                                    onSubmit={async (values,actions) => {
                                                        await add_interest(values)
                                                    }}
                                                    >
                                                        {(props) => (
                                                            <Form>
                                                            <div className="form-group row">
                                                                <label
                                                                    htmlFor="example-text-input"
                                                                    className="col-lg-5"
                                                                >
                                                                    Interest Name
                                                                </label>
                                                                <div className="col-lg-10">
                                                                <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="school load"
                                                                    name="name"
                                                                    />
                                                                </div>
                                                                <ErrorMsg name={"name"} />
                                                                </div>

                                        
                                                         
                                                                <div className="form-group row">
                                                                <label
                                                                    htmlFor="example-text-input"
                                                                    className="col-lg-5"
                                                                >
                                                                    Percentage (%)
                                                                </label>
                                                                <div className="col-lg-10">
                                                                    <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="number"
                                                                    // placeholder="10"
                                                                    name="percentage"
                                                                    />
                                                                </div>
                                                                <ErrorMsg name={"percentage"} />
                                                                </div>

                                                                <div className="form-group row">
                                                                <label
                                                                    htmlFor="example-text-input"
                                                                    className="col-lg-5"
                                                                >
                                                                    Minimum Time (%)
                                                                </label>
                                                                <div className="col-lg-10">
                                                                    <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="number"
                                                                    // placeholder="10"
                                                                    name="minimum_time_in_months"
                                                                    />
                                                                </div>
                                                                <ErrorMsg name={"minimum_time_in_months"} />
                                                                </div>


                                                                <div className="form-group row">
                                                                <label
                                                                    htmlFor="example-text-input"
                                                                    className="col-lg-5"
                                                                >
                                                                    Maximum Time (%)
                                                                </label>
                                                                <div className="col-lg-10">
                                                                    <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="number"
                                                                    // placeholder="10"
                                                                    name="maximum_time_in_months"
                                                                    />
                                                                </div>
                                                                <ErrorMsg name={"maximum_time_in_months"} />
                                                                </div>


                                                                {/* <button
                                                                type="submit"
                                                                className="btn btn-success"
                                                                >
                                                                Add
                                                                </button> */}
                                                                {/* <div className="form-group text-center"> */}
                                                                    {
                                                                        isLoading ? 
                                                                        ( <div className="sweet-loading">
                                                                            <DotLoader color={color} loading={loading} css={override}  size={80} />
                                                                            </div>)
                                                                        : (
                                                                            <button type="submit" className="btn btn-success">
                                                                            Add
                                                                            </button>
                                                                        )
                                                                    }
                                                                {/* </div> */}
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </div>
                                          
                                                <div className="form-group row"></div>


                                            

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>


                              {/* Edit interest Modal */}
                              <div className="modal fade" id="editinterestId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Edit interest</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                <h4 className="header-title mb-4">interest</h4>
                                                <form action="">
                                            
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        interest Name
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="StudentLoan"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        interest Interest (%)
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="5"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>

                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Mgt Charges (%)
                                                    </label>
                                                    <div className="col-lg-10">
                                                        <input
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="5"
                                                        id="example-text-input"
                                                        />
                                                    </div>
                                                    </div>
                            

                                                    <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                    >
                                                    Update
                                                    </button>
                                                </form>
                            
                                                <div className="form-group row"></div>
                                                </div>

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

export default InterestRate