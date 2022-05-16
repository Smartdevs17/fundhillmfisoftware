// STYLES
import { Formik, Form, Field } from "formik";
import { object as yupObject, string as yupString } from 'yup';
import { Fragment, useState } from "react";
import { api } from "../../../services";
import { ErrorMsg } from "../../../layouts/components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";

// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const initialFormState = () => ({
  first_name: "",
  last_name: "",
  dob: "",
  phone: "",
  country: "",
  avatar: "",
  currency: "",

});

const validationSchema = yupObject().shape({
  first_name: yupString(),
  last_name: yupString(),
  dob: yupString(),
  phone: yupString(),
  country: yupString(),
  avatar: yupString(),
  currency: yupString()
})


function Profile() {
    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    // #90EE90
    const navigate = useNavigate();
  
    
  
    const updateProfile = async(values) => {
          setIsLoading(true);
          console.log(values)
          // let data = [values];
          //     data = [...data,{"user_role":"admin"}]
          //     console.log(data);
          const response = await api
                .service()
                .push("/accounts/manage/signup/",values,true,true)
  
          if(api.isSuccessful(response)){
            setTimeout(() => {
              toast.success('Profile update was successfull!');
              navigate("/auth/login",{replace: true})
            }, 0);
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
                      <li className="breadcrumb-item active">Profile</li>
                    </ol>
                  </div>
                  <h4 className="page-title"> Update Profile</h4>
                </div>
              </div>
            </div>
            {/* end page title */}

            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title mb-4">Update Profile</h4>
                  <Formik 
                    enableReinitialize={true}
                    initialValues={initialFormState()}
                    validationSchema={validationSchema}
                    onSubmit={async (values,actions) => {
                      await updateProfile(values)
                    }}
                  >

                      {(props) => (
                        <Form >
                        <div className="form-group row">
                          <label
                            htmlFor="example-text-input"
                            className="col-lg-2 col-form-label"
                          >
                            First Name
                          </label>
                          <div className="col-lg-10">
                            <Field
                              as={'input'}
                              name="first_name"
                              type="text"
                              className="form-control"
                             />
                        
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="example-text-input"
                            className="col-lg-2 col-form-label"
                          >
                            Last Name
                          </label>
                          <div className="col-lg-10">
                            <Field
                              as={"input"}
                              name="last_name"
                              type="text"
                              className="form-control"
                             />
                            
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="example-tel-input"
                            className="col-lg-2 col-form-label"
                          >
                            Date of Birth
                          </label>
                          <div className="col-lg-10">
                          <Field 
                            as={"input"}
                            name="dob"
                            type="date"
                            className="form-control"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="example-text-input"
                            className="col-lg-2 col-form-label"
                          >
                            Phone
                          </label>
                          <div className="col-lg-10">
                            <Field
                              className="form-control"
                              type="text"
                              as={"input"}
                              name="phone"

                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="example-text-input"
                            className="col-lg-2 col-form-label"
                          >
                            Country
                          </label>
                          <div className="col-lg-10">
                            <Field
                              className="form-control"
                              type="text"
                              as={"input"}
                              name="country"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label htmlFor="text-input" className="col-lg-2">
                            Profile Picture
                          </label>
                          <div className="col-lg-10">
                            <Field 
                              as={"input"}
                              name="avatar"
                              type = "file"
                              className="form-control"
                            />
                          </div>
                        </div>
                       
                       <div className="form-group row">
                        <label htmlFor="text-input" className="col-lg-2">
                          Currency
                        </label>
                    <div className="col-lg-10">
                      <Field
                        as={"input"}
                        name="currency"
                        type="text"
                        className="form-control"
                       />
                    </div>
                       </div>



                      <div className="form-group text-center">
                          {
                            isLoading ? 
                              ( <div className="sweet-loading">
                                  <DotLoader color={color} loading={loading} css={override}  size={80} />
                                </div>)
                              : (
                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                  Update Profile
                                </button>
                              )
                          }
                        </div>
                      </Form>
                      )}
                  </Formik>
                 

                  <div className="form-group row">
                  
                  </div>
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

export default Profile