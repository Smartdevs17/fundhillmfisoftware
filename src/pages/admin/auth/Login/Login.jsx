// STYLES
import "./Login.css";
import { Formik, Form, Field } from "formik";
import Yup from 'yup'; 
import { Fragment, useState, useContext } from "react";
import { api } from "../../../../services";
import { ErrorMsg } from "../../../../layouts/components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
// CONTEXT
import { Context } from "../../../../context/Context";


const initialFormState = () => ({
  email: "",
  password: "",
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [checkBox, setCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatch,  } = useContext(Context)


  const login = async (values) => {
    setIsLoading(true);
    const response = await api
      .service()
      .push('/accounts/auth/signin', values, true);

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
        Login In
      </h5>
      <Formik
        initialValues={initialFormState()}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await login(values);
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
              {
                isLoading ? 
                  (<div>Loading, Please wait...</div>)
                  : (
                    <button
                      className="btn btn-success btn-block waves-effect waves-light"
                      type="submit"
                    >
                      {" "}
                      Log In{" "}
                    </button>
                  )
              }
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
