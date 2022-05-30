import { Fragment, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Country, State, City }  from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city'
import {Formik,Form,Field} from "formik";
import {object as yupObject, string as yupString} from "yup";
import {ErrorMsg} from "../../../layouts/components"
import {api} from "../../../services";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import {DotLoader} from "react-spinners";
import {Context} from "../../../context/Context";



function NewCustomer() {
  const [isLoading, setLoading] = useState(false);
  const [loading,setIsLoading] = useState(true)
  const [color,setColor] = useState("#ADD8E6");
  const navigate = useNavigate();


  // console.log(Country.getAllCountries())
  // console.log(State.getAllStates())
  const countries = Country.getAllCountries();
  const states = State.getAllStates()
  // console.log(states);

  const initialFormState = () => ({
    title: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    dob: "",
    avatar: "",
    id_document: "",
    email: "",
    residential_address: "",
    business_address: "",
    currency: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    user_role: "CUSTOMER",
  });

  const validationSchema = yupObject().shape({
    title: yupString()
    .required("The title is required"),
    first_name: yupString()
    .required("First name is required"),
    middle_name: yupString(),
    last_name: yupString()
    .required("Last name is required"),
    gender: yupString(),
    dob: yupString(),
    email: yupString(),
    avatar: yupString()
    .required("Profile Picture is required"),
    id_document: yupString(),
    utility_bill: yupString(),
    residential_address: yupString(),
    business_address: yupString(),
    currency: yupString(),
    country: yupString()
    .required("Please Select your country"),
    state: yupString()
    .required("Please select your state"),
    city: yupString()
    .required("Please select your city")
  })
   
const new_customer = async(values) => {
    setIsLoading(true);
    console.log(values);

    const response = await api.service().push("/accounts/manage/signup/",values,true);

    if(api.isSuccessful(response)){
      setTimeout(() => {
        toast.success("New customer registration was successfully");
        navigate("/admin/dashboard/quick_customer",{replace: true});
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
                      <li className="breadcrumb-item active">Customer</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Register New Customer</h4>
                </div>
              </div>
            </div>
            {/* end page title */}

            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title mb-4">New Customer</h4>
                  <Formik
                    initialValues={initialFormState()}
                    validationSchema= {validationSchema}
                    onSubmit = { async (values,actions) => {
                        await new_customer(values)
                    }}
                 
                  >
                  {(props) => (
                        <Form>
                              <div className="form-group row">
                              <label
                                htmlFor="example-text-input"
                                className="col-lg-2 col-form-label"
                              >
                                Title
                              </label>
                              <div className="col-lg-10">
                                <Field
                                  as= {"input"}
                                  className="form-control"
                                  type="text"
                                  placeholder="Mr"
                                  name="title"
                                />
                                <ErrorMsg name={"title"} />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                htmlFor="example-text-input"
                                className="col-lg-2 col-form-label"
                              >
                                First Name
                              </label>
                              <div className="col-lg-10">
                                <Field
                                  as= {"input"}
                                  className="form-control"
                                  type="text"
                                  placeholder="John"
                                  name="first_name"
                                />
                                <ErrorMsg name={"first_name"} />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                htmlFor="example-text-input"
                                className="col-lg-2 col-form-label"
                              >
                                Middle Name
                              </label>
                              <div className="col-lg-10">
                                <Field
                                  as= {"input"}
                                  className="form-control"
                                  type="text"
                                  placeholder="Bulus"
                                  name = "middle_name"
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
                                  as= {"input"}
                                  className="form-control"
                                  type="text"
                                  placeholder="Deo"
                                  name = "last_name"
                                />
                                <ErrorMsg name={"last_name"} />
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
                                  as= {"input"}
                                  className="form-control"
                                  type="email"
                                  placeholder="smartdevs17@gmail.com"
                                  name = "email"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                            <label
                              htmlFor="example-tel-input"
                              className="col-lg-2 col-form-label"
                            >
                              Gender
                            </label>
                            <div className="col-lg-10">
                                <Field as="select" name="gender" className="form-control">
                                <option>Select One</option>
                                <option value={"M"} >Male</option>
                                <option value={"F"} >Female</option>
                                </Field>
                            </div>
                          </div>


                          <div className="form-group row">
                              <label
                                htmlFor="example-text-input"
                                className="col-lg-2 col-form-label"
                              >
                              Date of Birth
                              </label>
                              <div className="col-lg-10">
                                <Field
                                  as= {"input"}
                                  className="form-control"
                                  type="date"
                                  name = "dob"
                                />
                              </div>
                            </div>



                          <div className="form-group row">
                          <label
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                          >
                            Profile Photo
                          </label>
                          <div className="col-lg-10">
                            <Field
                              as = {"input"}
                              type="file"
                              className="dropify"
                              name = "avatar"
                            />
                            <ErrorMsg name={"avatar"} />
                          </div>
                        </div>

                        

                        <div className="form-group row">
                          <label
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                          >
                            Identification Card
                          </label>
                          <div className="col-lg-10">
                            <Field
                              as = {"input"}
                              type="file"
                              className="dropify"
                              name = "id_document"
                             
                            />
                          </div>
                        </div>


                        <div className="form-group row">
                          <label
                            htmlFor="example-search-input"
                            className="col-lg-2 col-form-label"
                          >
                            Utilty Bill
                          </label>
                          <div className="col-lg-10">
                            <Field
                              as = {"input"}
                              type="file"
                              className="dropify"
                              name = "utility_bill"
                            />
                          </div>
                        </div>

                          <div className="form-group row">
                            <label
                              htmlFor="example-tel-input"
                              className="col-lg-2 col-form-label"
                            >
                              Currency
                            </label>
                            <div className="col-lg-10">
                                <Field as="select" name="curency" className="form-control">
                                <option>Select One</option>
                                <option value={"NGN"} >NGN</option>
                                <option value={"USD"} >USD</option>
                                </Field>
                            </div>
                          </div>

                          <div className="form-group row">
                              <label
                                htmlFor="example-text-input"
                                className="col-lg-2 col-form-label"
                              >
                              Residential Address
                              </label>
                              <div className="col-lg-10">
                                <Field
                                  as= {"input"}
                                  className="form-control"
                                  type="text"
                                  placeholder="Rantya"
                                  name = "residential_address"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                htmlFor="example-text-input"
                                className="col-lg-2 col-form-label"
                              >
                              Business Address
                              </label>
                              <div className="col-lg-10">
                                <Field
                                  as= {"input"}
                                  className="form-control"
                                  type="text"
                                  placeholder="Terminus"
                                  name = "business_address"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                            <label
                              htmlFor="example-tel-input"
                              className="col-lg-2 col-form-label"
                            >
                              Country
                            </label>
                            <div className="col-lg-10">
                                <Field as="select" name="country" className="form-control">
                                <option>Select One</option>
                                {
                                  countries.map((country) => (
                                    <>
                                    <option value={country.isoCode} > {country.name} </option>
                                    </>
                                  ))
                                }
                                </Field>
                            </div>
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
                                  states.map((state) => (
                                    <>
                                    <option value={state.countryCode} > {state.name} </option>
                                    </>
                                  ))
                                }
                                </Field>
                            </div>
                          </div>

                          <div className="form-group row">
                            <label
                              htmlFor="example-tel-input"
                              className="col-lg-2 col-form-label"
                            >
                              City
                            </label>
                            <div className="col-lg-10">
                                <Field as="select" name="city" className="form-control">
                                <option>Select One</option>
                                <option value={"jos"} >Jos</option>
                                <option value={"bukuru"} >Bukuru</option>
                                </Field>
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



                  {/* <form action="" onSubmit={handleSubmit} >
                  <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-lg-2 col-form-label"
                      >
                        Title
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="John"
                          id="example-text-input"
                          value = {Fname}
                            onChange={(e)  => setFname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-text-input"
                        className="col-lg-2 col-form-label"
                      >
                        First Name
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="John"
                          id="example-text-input"
                          value = {Fname}
                            onChange={(e)  => setFname(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                      >
                        Middle Name
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Mikel"
                          id="example-search-input"
                          value = {Mname}
                            onChange={(e)  => setMname(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                      >
                        Last Name
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Doe"
                          id="example-search-input"
                          value = {Lname}
                            onChange={(e)  => setLname(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                      >
                        Profile Photo
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="file"
                          className="dropify"
                          value = {PPFile}
                            onChange={(e)  => setPPFile(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                      >
                        ID
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="file"
                          className="dropify"
                          value = {IDFile}
                        onChange={(e)  => setIDFile(e.target.value)}                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                        value = {UBFile}
                        onChange={(e)  => setUBFile(e.target.value)}
                      >
                        Utility Bill
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="file"
                          className="dropify"
                          value = {UBFile}
                            onChange={(e)  => setUBFile(e.target.value)}                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                      >
                        BVN
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="number"
                          placeholder="10 digit number"
                          id="example-search-input"
                          value = {Bvn}
                            onChange={(e)  => setBvn(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-email-input"
                        className="col-lg-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="smartdeveloper@yahoo.com"
                          id="example-email-input"
                          value = {Email}
                            onChange={(e)  => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="example-url-input"
                        className="col-lg-2 col-form-label"
                      >
                        Residential Address
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Tudun Wada"
                          id="example-url-input"
                          value = {RA}
                            onChange={(e)  => setRA(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-url-input"
                        className="col-lg-2 col-form-label"
                        value = {BA}
                        onChange={(e)  => setBA(e.target.value)}
                      >
                        Business Address
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Hwolshe"
                          id="example-url-input"
                        />
                      </div>
                    </div>

                    
                    <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Telephone Number
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="tel"
                          placeholder="234-(222)-333-4445"
                          id="example-tel-input"
                          value = {TN}
                          onChange={(e)  => setTN(e.target.value)}
                        />
                      </div>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block">
                      Create Account
                    </button>
                  </form> */}

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

export default NewCustomer;
