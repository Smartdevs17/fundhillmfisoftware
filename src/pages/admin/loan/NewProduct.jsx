import {Fragment,useState,useContext,useEffect} from 'react'
import { Link } from "react-router-dom";
import {Formik,Form,Field} from "formik";
import {object as yupObject, string as yupString} from "yup";
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


function NewProduct() {
    const {user} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const [data, setData] = useState("");




    useEffect( async () => {
        setIsLoading(true)

        const branches = await api
                .service()
                .fetch(`/dashboard/branches/${user.org_id}/all-branches`,true);
                console.log(branches)
                console.log(isLoading);
            if(branches){
                setData(branches);
                setIsLoading(false)
            }else{
                setIsLoading(true)
            }


        const products = await api
        .service()
        .fetch(`/dashboard/loan-products/${user.org_id}/all-loan_products`,true);
        console.log(products)
        console.log(isLoading);
    if(products){
        setData(products);
        setIsLoading(false)
    }else{
        setIsLoading(true)
    }

    }, [])

    const initialFormState = () => ({
        name: "",
        Mgt_Charges: "",
        interest: "",
        branch: ""
      });

      const validationSchema = yupObject().shape({
        name: yupString()
        .required("Product name is required"),
        Mgt_Charges: yupString()
        .required("Managment Charges is required"),
        interest: yupString()
        .required("interest rate is required"),
        branch: yupString()
      });

      const add_product = async(values) => {
        setIsLoading(true);
        console.log(values)

        const response = await api
              .service()
              .push(`${user.org_id}/dashboard/loan-product/add`,values,true)

        if(api.isSuccessful(response)){
          setTimeout( () => {
            toast.success("Loan Product successfully created!");
          },0);
        }
        setIsLoading(false);
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
                                    <li className="breadcrumb-item active">Loan</li>
                                </ol>
                                </div>
                                <h4 className="page-title">Loan Product</h4>
                            
                            </div>
                            </div>
                        </div>     
    
                        {/* end page title */} 
                        
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">All Loan Products</h4>
                               
                                <button id='product' type="button" className="btn btn-primary sub-header" data-toggle="modal" data-target="#productId">
                                    Add Product
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
                                                                    <th> Product </th>
                                                                    <th> Interest (%) </th>
                                                                    <th> MGT Charges (%) </th>
                                                                    <th> Action </th>
                                                                    {/* <th></th> */}
                                                                    </tr>


                                                                </thead>

                                                                <tbody>
                                                                    <tr>
                                                                    <td>1</td>
                                                                    <td>Student Loan</td>
                                                                    <td>10</td>
                                                                    <td>5</td>
                                                                    <td> 
                                                                    <button id='editproduct' style={{margin: "10px"}} type="button" className="btn btn-primary" data-toggle="modal" data-target="#editproductId">
                                                                        Edit
                                                                    </button>      

                                                                    <button type="button" className="btn btn-danger" id="sa-warning">Delete</button>                              
                                                                    </td>
                                                                    
                                                                    </tr>


                                                                    {
                                                                        data.map((product) => {
                                                                            return(
                                                                                    <tr>
                                                                                        <td> {product.id} </td>
                                                                                        <td> {product.name} </td>
                                                                                        <td> {product.interest} </td>
                                                                                        <td> {product.Mgt_Charges} </td>
                                                                                        <td> {product.branch} </td>
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
                               


                              {/* Add Loan Product Modal */}
                              <div className="modal fade" id="productId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Add New Product</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                <h4 className="header-title mb-4">Product</h4>
                                                <div className="modal-content">
                                                    <Formik
                                                    initialValues={initialFormState()}
                                                    validationSchema={validationSchema}
                                                    onSubmit={async (values,actions) => {
                                                        await add_product(values)
                                                    }}
                                                    >
                                                        {(props) => (
                                                            <Form>
                                                            <div className="form-group row">
                                                                <label
                                                                    htmlFor="example-text-input"
                                                                    className="col-lg-2 col-form-label"
                                                                >
                                                                    Product Name
                                                                </label>
                                                                <div className="col-lg-10">
                                                                    <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="StudentLoan"                                                                    />
                                                                    name = "name"
                                                                </div>
                                                                <ErrorMsg name={"name"} />
                                                                </div>

                                                                <div cdilassName="form-group row">
                                                                <label
                                                                    htmlFor="example-text-input"
                                                                    className="col-lg-2 col-form-label"
                                                                >
                                                                    Product Interest (%)
                                                                </label>
                                                                <div className="col-lg-10">
                                                                    <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="10"
                                                                    name="interest"
                                                                    />
                                                                </div>
                                                                <ErrorMsg name={"interest"} />
                                                                </div>

                                                                <div className="form-group row">
                                                                <label
                                                                    htmlFor="example-text-input"
                                                                    className="col-lg-2 col-form-label"
                                                                >
                                                                    Mgt Charges (%)
                                                                </label>
                                                                <div className="col-lg-10">
                                                                    <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="10"
                                                                    name="Mgt_Charges"
                                                                    />
                                                                </div>
                                                                <ErrorMsg name={"Mgt_Charges"} />
                                                                </div>
                                        

                                                                <div className="form-group row">
                                                                <label
                                                                    htmlFor="example-tel-input"
                                                                    className="col-lg-2 col-form-label"
                                                                    >
                                                                    State
                                                                    </label>
                                                                    <div className="col-lg-10">
                                                                        <Field as="select" name="state" className="form-control">
                                                                        <option>Select One</option>
                                                                        {
                                                                        data.map((branch) => (
                                                                            <>
                                                                            <option value={branch.branch_id} > {branch.branch_name} </option>
                                                                            </>
                                                                        ))
                                                                        }
                                                                        </Field>
                                                                    </div>
                                                                </div>


                                                                <button
                                                                type="submit"
                                                                className="btn btn-success"
                                                                >
                                                                Add
                                                                </button>
                                                            </Form>
                                                        )}
                                                    </Formik>
                                                </div>
                                          
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


                              {/* Edit Product Modal */}
                              <div className="modal fade" id="editproductId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                        <div className="modal-content card-box">
                                        <div className="modal-header">
                                        <h4 className="header-title mb-4">Edit Product</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                            
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="">
                                                <h4 className="header-title mb-4">Product</h4>
                                                <form action="">
                                            
                                                    <div className="form-group row">
                                                    <label
                                                        htmlFor="example-text-input"
                                                        className="col-lg-2 col-form-label"
                                                    >
                                                        Product Name
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
                                                        Product Interest (%)
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

export default NewProduct