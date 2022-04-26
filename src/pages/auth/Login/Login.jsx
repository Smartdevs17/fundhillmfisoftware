// STYLES
import "./Login.css";

import { Formik, Form, Field } from "formik";
import { object as yupObject, string as yupString } from 'yup';
import { Fragment, useState, useEffect } from "react";
import { Store, } from "../../../services";
import { Link } from "react-router-dom";
import { ErrorMsg } from "../../../layouts/components";
const $store = new Store();

const initialFormState = () => ({
  email: "",
  password: "",
});

const validationSchema = yupObject().shape({
  email: yupString()
    .email("Invalid email")
    .required("Email is required"),
  password: yupString()
    .required("Password is required"),
});

const Login = () => {
  const [checkBox, setCheckBox] = useState(false);

  const login = () => {
    $store.pushToStore("user", {
      name: "text",
      checkbox: "text",
      password: "text",
    });
  };

  useEffect(() => {
    login();
  }, []);


  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">
        Login In
      </h5>
      <Formik
        initialValues={initialFormState()}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          console.log({ values });
        }}
      >
        {(props) => (
          <Form className="mt-2">
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
                name="password"
                className="form-control"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <ErrorMsg name={'password'} />
            </div>

            <div className="form-group mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox-signin"
                  value = {checkBox}
                  onChange={(e)  => setCheckBox(e.currentTarget.value)}
                />
              
                <label className="custom-control-label" for="checkbox-signin">
                  Remember me
                </label>
            
              </div>
            </div>

            <div className="form-group text-center">
              <button
                className="btn btn-success btn-block waves-effect waves-light"
                type="submit"
              >
                {" "}
                Log In{" "}
              </button>
            </div>

            <Link to="#" className="text-muted">
              <i className="mdi mdi-lock mr-1"></i> Forgot your password?
            </Link>

            <div className="form-group">
              <Link to="/auth/register" className="text-muted">
                {" "}
                Don't have an account Yet?Register
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default Login;
