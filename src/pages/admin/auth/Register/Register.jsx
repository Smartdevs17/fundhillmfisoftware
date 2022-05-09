// STYLES
import "./Register.css";
import { Formik, Form, Field } from "formik";
import { object as yupObject, string as yupString } from 'yup';
import { Fragment, useState } from "react";
import { api } from "../../../../services";
import { ErrorMsg } from "../../../../layouts/components";
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
  "organisation_name": "",
  email: "",
  phone: "",
  password: "",
  user_role: "ADMIN"
});

const validationSchema = yupObject().shape({
  first_name: yupString()
  .required("First Name is required"),
  last_name: yupString()
  .required("Last Name is required"),
  organisation_name: yupString()
  .required("Organisation Name is required"),
  address: yupString()
  .required("Address is required"),
  email: yupString()
  .email("Invalid email")
  .required("Email is required"),
  phone: yupString()
  .required("Phone Number is required"),
  password: yupString()
  .required("Password is required"),
})

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ADD8E6");
  // #90EE90
  const navigate = useNavigate();

  

  const register = async(values) => {
        setIsLoading(true);
        console.log(values)
        localStorage.setItem("user",values)
        // let data = [values];
        //     data = [...data,{"user_role":"admin"}]
        //     console.log(data);
        const response = await api
              .service()
              .push("/accounts/manage/signup/",values,true)

        if(api.isSuccessful(response)){
          setTimeout(() => {
            toast.success('Registration in successfully!');
            navigate("/conf_email",{replace: true})
          }, 0);
        }
        setIsLoading(false);
  }



  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">
        Register As a Cooperation
      </h5>
      <Formik
        enableReinitialize={true}
        initialValues={initialFormState()}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await register(values);
        }}
      >
        {(props) => (
          <Form className="mt-2">

          <div className="form-group mb-3">
              <Field
                as={'input'}
                name="first_name"
                className="form-control"
                type="text"
                placeholder="Enter your first name"
              />
              <ErrorMsg name={'first_name'} />
            </div>

            <div className="form-group mb-3">
              <Field
                as={'input'}
                name="last_name"
                className="form-control"
                type="text"
                placeholder="Enter your last name"
              />
              <ErrorMsg name={'last_name'} />
            </div>

            <div className="form-group mb-3">
              <Field
                as={'input'}
                name="organisation_name"
                className="form-control"
                type="text"
                placeholder="Full Co-operation/Organisation Name"
              />
              <ErrorMsg name={'organisation_name'} />
            </div>


            <div className="form-group mb-3">
              <Field
                as={'input'}
                name="email"
                className="form-control"
                type="email"
                placeholder="Enter your email"
              />
              <ErrorMsg name={'email'} />
            </div>

            <div className="form-group mb-3">
              <Field
                as={'input'}
                name="phone"
                className="form-control"
                type="text"
                placeholder="Enter your phone number"
              />
              <ErrorMsg name={'phone'} />
            </div>

            <div className="form-group mb-3">
              <Field
                as={'input'}
                name="address"
                className="form-control"
                type="text"
                placeholder="Address location of cooperation"
              />
              <ErrorMsg name={'address'} />
            </div>

            <div className="form-group mb-3">
              <Field
                as={'input'}
                name="password"
                className="form-control"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <ErrorMsg name={'password'} />
            </div>

          

            {/* <div className="form-group text-center">
              {
                isLoading ? 
                  (<div>Loading, Please wait...</div>)
                  : (
                    <button
                      className="btn btn-success btn-block waves-effect waves-light"
                      type="submit"
                    >
                      Register
                    </button>
                  )
              }
            </div> */}


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
                                  Register
                                </button>
                              )
                          }
                        </div>

           
            {/* <Link to="/auth/reset_password" className="text-muted">
              <i className="mdi mdi-lock mr-1"></i> Forgot your password?
            </Link> */}

            <div className="form-group">
            <Link to="/auth/login" className="text-muted">
            Have an account? Login
          </Link>
        </div>
          </Form>
        )}
      </Formik>

      
    </Fragment>
  );
};

export default Register;
