import { Fragment, useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {object as yupObject,string as yupString} from "yup";
import { ErrorMsg } from "../../../layouts/components";
import { api  } from "../../../services";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";
import {Context} from "../../../context/Context";


function NewBranch() {
  const {user} = useContext(Context)
  const [isLoading, setIsLoading] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ADD8E6");
  const [bhead, setBHead] = useState("");
  const navigate = useNavigate();




  const initialFormState = () => ({
    name: "",
    branch_head_id: "",
    branch_address: "",
    org_id: `${user.org_id}`,
  });

  const validationSchema = yupObject().shape({
    name: yupString()
    .required("Branch name is required"),
    branch_address: yupString()
    .required("Branch Address is required"),
    branch_head_id: yupString()
  })

    const create_branch = async(values) => {
          setIsLoading(true);
          console.log(values)

          const response = await api
                .service()
                .push("dashboard/branches/create-branch/",values,true)

          if(api.isSuccessful(response)){
            setTimeout( () => {
              toast.success("Branch successfully created!");
              navigate("/admin/allbranch",{replace: true})
            },0);
          }
          setIsLoading(false);
    }

  return (
    <Fragment>
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
                      <li className="breadcrumb-item">
                        <Link to="#">FundHill</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">Admin</Link>
                      </li>
                      <li className="breadcrumb-item active">New Branch</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Add New Branch</h4>
                </div>
              </div>
            </div>
            {/* end page title */}

            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title mb-4">New Branch</h4>

                  <Formik 
                    initialValues={initialFormState()}
                    validationSchema= {validationSchema}
                    onSubmit = { async (values,actions) => {
                      await create_branch(values);
                    }}
                   >
                      {(props) => (
                        <Form  >
                 
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-lg-2 col-form-label"
                      >
                        Branch Name
                      </label>
                      <div className="col-lg-10">
                        <Field 
                          as = {"input"}
                          type="text"
                          className= "form-control"
                          name="name"
                        />
                      <ErrorMsg name={"name"} />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Branch Head
                      </label>
                      <div className="col-lg-10">
                          <Field as="select" name="branch_head_id" className="form-control">
                          <option>Select One</option>
                          <option value={"Staff One"} >Staff 1</option>
                          <option value={"Staff Two"} >Staff 2</option>
                          <option value={"Staff Three"} >Staff 3</option>
                          </Field>
                      </div>
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
                          name="branch_address"
                          className = "form-control"
                          />
                          <ErrorMsg name={"branch_address"} />
                      </div>
                    </div>

           

                    <div className="form-group text-center">
                          {
                            isLoading ? 
                              ( <div className="sweet-loading">
                                  <DotLoader color={color} loading={loading}  size={80} />
                                </div>)
                              : (
                                <button
                                  className="btn btn-primary btn-block waves-effect waves-light"
                                  type="submit"
                                >
                                  Submit
                                </button>
                              )
                          }
                        </div>
                  </Form>
                      )}
                  </Formik>
                  

                  <div className="form-group row"></div>
                </div>
              </div>
            </div>

            {/* end row */}
          </div>
          {/* end container-fluid */}
        </div>
      </div>
    </Fragment>
  );
}

export default NewBranch;
