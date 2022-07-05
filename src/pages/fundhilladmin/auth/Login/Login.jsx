// STYLES
import "./Login.css";
import { Formik, Form, Field } from "formik";
import { object as yupObject, string as yupString } from 'yup';
import { Fragment, useState, useContext } from "react";
import { api } from "../../../../services";
import { ErrorMsg } from "../../../../layouts/components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";
// CONTEXT
import { Context } from "../../../../context/Context";



const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



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
  const[isLoading, setIsLoading] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ADD8E6");

  const navigate = useNavigate();
  const [checkBox, setCheckBox] = useState(false);
  const {dispatch,  } = useContext(Context)


  const login = async (values) => {
    setIsLoading(true);
    const response = await api
      .service()
      .push('/accounts/auth/signin/', values, true);

    if (api.isSuccessful(response)) {
      localStorage.setItem("token",response?.data?.data?.token)
      dispatch({type: "LOGIN_SUCCESS",payload: response?.data});
      setTimeout(() => {
        toast.success('Logged in successfully!');
        navigate("/admin/dashboard",{replace: true})
      }, 0);
    }

    setIsLoading(false);
  }

  return (
    <Fragment>
      <h5 className="text-muted text-center text-uppercase py-3 font-16">
        Login
      </h5>
      <Formik
        initialValues={initialFormState()}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await login(values);
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
                                  Log In
                                </button>
                              )
                          }
                        </div>

            <Link to="/auth/reset_password" className="text-muted">
              <i className="mdi mdi-lock mr-1"></i> Forgot your password?
            </Link>

            <div className="form-group">
              <Link to="/auth/register" className="text-muted">
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
