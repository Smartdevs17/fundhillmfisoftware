// STYLES
import { Formik, Form, Field } from "formik";
import { object as yupObject, string as yupString } from 'yup';
import { Fragment, useState,useContext } from "react";
import { api } from "../../../services";
import { ErrorMsg } from "../../../layouts/components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";
import {Context} from "../../../context/Context";



function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";
 for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        return password;
 }

// console.log(genPassword())
// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const initialFormState = () => (
    {
  first_name: "",
  last_name: "",
//   dob: "",
  phone: "",
  email: "",
  user_role: "",
  password: genPassword(),

});

const validationSchema = yupObject().shape({
  first_name: yupString()
  .required("first name is required"),
  last_name: yupString()
  .required("last name is require"),
//   organisation_name: yupString()
//   .required("organisation name is required"),
  email: yupString()
  .required("email is required"),
  phone: yupString()
  .required("phone is required"),
  user_role: yupString()
  .required("Marketer role is required")
})

function NewMarketer() {

    const [isLoading, setIsLoading] = useState(false);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ADD8E6");
    let {user} = useContext(Context);
    // #90EE90
    const navigate = useNavigate();
  
    // console.log(user.data)
  
    const marketer = async(values) => {
          setIsLoading(true);
          console.log(values)
          const response = await api
                .service()
                .push(`/accounts/manage/signup/?org_id=${user.data.organisation}`,values,true)
  
          if(api.isSuccessful(response)){
            setTimeout(() => {
              toast.success('New marketer added successfully!');
              navigate("/admin/dashboard/new_marketer",{replace: true})
            }, 0);
          }
          setIsLoading(false);
    }


    return (
        <Fragment>
        <div className='content-page'>
        <div className="content">
                     {/* Start Content*/}
                     <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="#">FundHill</Link ></li>
                                <li className="breadcrumb-item"><Link to="#">Admin</Link ></li>
                                <li className="breadcrumb-item active">Marketer</li>
                            </ol>
                            </div>
                            <h4 className="page-title">Add New Marketer</h4>
                        </div>
                        </div>
                    </div>     
                    {/* end page title */} 



                    <div className="row">
                        <div className="col-12">
                        <div className="card-box">
                            <h4 className="header-title mb-4">New Marketer</h4>
                            <Formik 
                                enableReinitialize={true}
                                initialValues={initialFormState()}
                                validationSchema={validationSchema}
                                onSubmit={async (values,actions) => {
                                await marketer(values)
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
                                    <ErrorMsg name={'first_name'} />
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
                                        <ErrorMsg name={'last_name'} />
                                    </div>
                                    </div>



                                    <div className="form-group row">
                                    <label
                                        htmlFor="example-text-input"
                                        className="col-lg-2 col-form-label"
                                    >
                                        Email
                                    </label>
                                    <div className="col-lg-10">
                                        <Field
                                        as={"input"}
                                        name="email"
                                        type="text"
                                        className="form-control"
                                        />
                                    <ErrorMsg name={'email'} />
                                    </div>
                                    </div>


                                    {/* <div className="form-group row">
                                    <label
                                        htmlFor="example-tel-input"
                                        className="col-lg-2 col-form-label"
                                    >
                                        Organisation Name
                                    </label>
                                    <div className="col-lg-10">
                                    <Field 
                                        as={"input"}
                                        name="organisation_name"
                                        type="text"
                                        className="form-control"
                                        />
                                    <ErrorMsg name={'organisation_name'} />
                                    </div>
                                    </div> */}

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
                                        <ErrorMsg name={'phone'} />
                                    </div>
                                    </div>




                                    <div className="form-group row">
                                    <label
                                        htmlFor="example-tel-input"
                                        className="col-lg-2 col-form-label"
                                    >
                                        Marketer Role
                                    </label>
                                    <div className="col-lg-10">
                                        <Field as="select" name="user_role" className="form-control">
                                        <option>Select One</option>
                                        <option value="ADMIN" >Admin</option>
                                        <option value="MANAGER" >Manager</option>
                                        <option value="TELLER" >Teller</option>
                                        <option value="AGENT" >Agent</option>
                                        </Field>
                                        <ErrorMsg name={'user_role'} />
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
                                            New Marketer
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
    )
}

export default NewMarketer