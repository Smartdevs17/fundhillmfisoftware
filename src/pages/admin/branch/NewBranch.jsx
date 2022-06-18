import { Fragment, useState,useContext,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {object as yupObject,string as yupString,number as yupNumber} from "yup";
import { ErrorMsg } from "../../../layouts/components";
import { api  } from "../../../services";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";
import {Context} from "../../../context/Context";



// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function NewBranch() {
  const {user} = useContext(Context)
  const [isLoading, setIsLoading] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ADD8E6");
  const [bhead, setBHead] = useState("");
  const navigate = useNavigate();
  const [marketers,setMarketers] = useState([]);




  const initialFormState = () => ({
    name: "",
    branch_head_id: 0,
    branch_address: "",
    // org_id: `${user.data.organisation}`,
  });

  const validationSchema = yupObject().shape({
    name: yupString()
    .required("Branch name is required"),
    branch_address: yupString()
    .required("Branch Address is required"),
    branch_head_id: yupNumber()
  })

  useEffect(() => {
    // setIsLoading(true)

    const allMarketer = async() => {
      const res = await api.service().fetch("/accounts/manage/?is_staff=True",true);
      // console.log(res.data)
      if(api.isSuccessful(res)){
          console.log(res.data)
        setMarketers(res.data.results)
      }

      // setIsLoading(false);

    }

    allMarketer();
  },[])

    const create_branch = async(values) => {
          setIsLoading(true);
          console.log(values)

          const response = await api
                .service()
                .push("dashboard/branches/create-branch/",values,true)

          if(api.isSuccessful(response)){
            setTimeout( () => {
              toast.success("Branch successfully created!");
              navigate("/admin/dashboard/newbranch",{replace: true})
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
                          {
                                  marketers.map((marketer) => (
                                    <>
                                    <option key={marketer.id} value={marketer.id} > {marketer.first_name} </option>
                                    </>
                                  ))
                                }
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
                                  <DotLoader color={color} loading={loading} css={override}  size={80} />
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
