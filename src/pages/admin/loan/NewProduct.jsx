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


function NewProduct() {
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    const {user} = useContext(Context)
    const [data, setData] = useState([]);
    const  navigate = useNavigate();




    useEffect(  () => {
        setIsLoading(true)

            const newProduct = async() => {
              
                // console.log(isLoading);
            // if(api.isSuccessful(branches)){
            //     setData(branches.data.results);
            //     setIsLoading(false)
            // }
            // else{
            //     setIsLoading(true)
            // }


        const products = await api
        .service()
        .fetch("/dashboard/loan-product",true);
        console.log(products.data.results)
        
    if((api.isSuccessful(products))){
        setData(products.data.results);
        setIsLoading(false)
    }else{
        setIsLoading(true)
    }
            }

            newProduct();
    }, [])

    const initialFormState = () => ({
        name: "",
        mgt_charges: null,
        interest: null,
      });

      const validationSchema = yupObject().shape({
        name: yupString()
        .required("Product name is required"),
        mgt_charges: yupNumber()
        .required("Managment Charges is required"),
        interest: yupNumber()
        .required("interest rate is required"),
      });

      const add_product = async(values) => {
        setIsLoading(true);
        console.log(values)

        const response = await api
              .service()
              .push("dashboard/loan-product/add/",values,true)

        if(api.isSuccessful(response)){
          setTimeout( () => {
            toast.success("Loan Product successfully created!");
            navigate("/dashboard/loan-product",{replace: true});
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
                                                             


                                                                    {
                                                                        data.map((product) => {
                                                                            return(
                                                                                    <tr key={product.id} >
                                                                                        <td > {product.id} </td>
                                                                                        <td> {product.name} </td>
                                                                                        <td> {product.interest} </td>
                                                                                        <td> {product.mgt_charges} </td>
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

                                            
                                        {/* <div className="row">
                                            <div className="col-12">
                                                <div className="">
                          
                                                </div>

                                            </div>
                                            </div> */}


                                            <h4 className="header-title mb-4">Product</h4>
                                                <div className="modal-body">
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
                                                                    className="col-lg-5"
                                                                >
                                                                    Product Name
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
                                                                    Product Interest (%)
                                                                </label>
                                                                <div className="col-lg-10">
                                                                    <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="text"
                                                                    // placeholder="10"
                                                                    name="interest"
                                                                    />
                                                                </div>
                                                                <ErrorMsg name={"interest"} />
                                                                </div>

                                                                <div className="form-group row">
                                                                <label
                                                                    htmlFor="example-text-input"
                                                                    className="col-lg-5"
                                                                >
                                                                    Mgt Charges (%)
                                                                </label>
                                                                <div className="col-lg-10">
                                                                    <Field 
                                                                    as={"input"}
                                                                    className="form-control"
                                                                    type="text"
                                                                    // placeholder="10"
                                                                    name="mgt_charges"
                                                                    />
                                                                </div>
                                                                <ErrorMsg name={"mgt_charges"} />
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