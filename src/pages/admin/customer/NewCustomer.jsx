import { Fragment, useState,useEffect,useContext } from "react";
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
// import "./newcustomer.css";



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


// CONTEXT
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;













function NewCustomer() {

  const [isLoading, setIsLoading] = useState(false);
  const [loading,setLoading] = useState(true)
  const [color,setColor] = useState("#ADD8E6");
  const navigate = useNavigate();
  const {user} = useContext(Context);
  const [marketers,setMarketers] = useState([]);



  const [first_name, setFirstName] = useState("");
  const [FnameError,setFnameError] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [MnameError,setMnameError] = useState("");
  const [last_name, setLastName] = useState("");
  const [LnameError,setLnameError] = useState("");
  const [avatar, setAvatar] = useState(null);
  // const [PPFileError,setPPFileError] = useState(null);
  const [id_document, setIdDocument] = useState(null);
  const [utility_bill, setUtilityBill] = useState(null);
  // const [IDFileError,setIDFileError] = useState("");    
  // const [UBFile, setUBFile] = useState("");
  // const [UBFileError,setUBFileError] = useState("");  
  // const [Bvn, setBvn] = useState("");
  // const [BvnError,setBvnError] = useState("");    
  const [dob,setDob] = useState("");
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");
  const [country,setCountry] = useState("");
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const [currency,setCurrency] = useState("");
  const [marketer,setMarketer] = useState("");
  const [email, setEmail] = useState("");
  const [EmailError,setEmailError] = useState("");    
  const [residential_address, setResidentialAddress] = useState("");
  const [RAError,setRAError] = useState("");    
  const [BA, setBA] = useState("");
  const [BAError,setBAError] = useState("");    
  const [TN, setTN] = useState("");
  const [TNError,setTNError] = useState("");  

  // console.log(Country.getAllCountries())
  // console.log(State.getAllStates())
  const countries = Country.getAllCountries();
  const states = State.getAllStates()
  // console.log(states);
  useEffect(() => {
    setIsLoading(true)

    const allMarketer = async() => {
      const res = await api.service().fetch("/accounts/manage/?is_staff=True",true);
      // console.log(res.data)
      if(api.isSuccessful(res)){
        //   console.log(res)
        setMarketers(res.data.results)
      }

      setIsLoading(false);

    }

    allMarketer();
  },[])
  
  
  const new_customer = async(values) => {
    setIsLoading(true);
    console.log(values);

    // const response = await api.service().push(`/accounts/manage/signup/?org_id=${user.data.organisation}`,values,true,true);

    // if(api.isSuccessful(response)){
    //   setTimeout(() => {
    //     toast.success("Customer registration was successfully");
    //     navigate("/admin/dashboard/quick_customer",{replace: true});
    //   },0);
    // }
    // setIsLoading(false);

  }

  const handleAvatarOnChange = (file) => {
    setAvatar(file[0])
  }


  const handleUtilityOnChange = (file) => {
    setUtilityBill(file[0])
  }


  const handleDocOnChange = (file) => {
    setIdDocument(file[0])
  }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        // setLoading(false)
        let data = new FormData(e.target);
        data.append("user_role","CUSTOMER");
        data.append("password",genPassword());
        data.append("avatar",avatar);
        data.append("id_document",id_document);
        data.append("utility_bill",utility_bill);
        console.log(data)



        let values = Object.fromEntries(data.entries())
        // let remains = {
        //   user_role: "CUSTOMER",
        //   password: genPassword()
        // }
        // let values = Object.assign(data,remains)
        // values.append("user_role","CUSTOMER");
        // values.append("password",genPassword());

        console.log(values);

    const response = await api.service().push(`/accounts/manage/signup/?org_id=${user.data.organisation}`,data,true,true);

    if(api.isSuccessful(response)){
      setTimeout(() => {
        
        toast.success("Customer registration was successfully");
        setIsLoading(false)

      },0);
    }

        setIsLoading(false)
        // setLoading(false)

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
                      <li className="breadcrumb-item active">New Customer</li>
                    </ol>
                  </div>
                  <h4 className="page-title">Add New Customer</h4>
                </div>
              </div>
            </div>
            {/* end page title */}

            <div className="row">
              <div className="col-12">
                <div className="card-box">
                  <h4 className="header-title mb-4">New Customer</h4>
                  <form action="" onSubmit={handleSubmit} >


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
                          name = "title"
                          type="text"
                          placeholder="Mr"
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
                          name="first_name"
                          type="text"
                          placeholder="John"
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
                          name="middle_name"
                          type="text"
                          placeholder="Mikel"
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
                          name="last_name"
                          type="text"
                          placeholder="Doe"
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
                                <select  name="gender" className="form-control">
                                <option>Select One</option>
                                <option value={"M"} >Male</option>
                                <option value={"F"} >Female</option>
                                </select>
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
                                <input
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
                        <input
                          type="file"
                          className="dropify"
                          // name='avatar'
                          onChange={(e)  => handleAvatarOnChange(e.target.files)}
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
                          // name="id_document"
                          onChange={(e)  => handleDocOnChange(e.target.files)}

                            />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-search-input"
                        className="col-lg-2 col-form-label"
                      >
                        Utility Bill
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="file"
                          className="dropify"
                          // name = "utitity_bill"
                          onChange={(e)  => handleUtilityOnChange(e.target.files)}
                           />
                      </div>
                    </div>

                    {/* <div className="form-group row">
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
                    </div> */}


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
                          name="email"
                          type="email"
                          placeholder="smartdeveloper@yahoo.com"
         
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
                                <select  name="currency" className="form-control">
                                <option>Select One</option>
                                <option value={"NGN"} >NGN</option>
                                <option value={"USD"} >USD</option>
                                </select>
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
                          name = "residential_address"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="example-url-input"
                        className="col-lg-2 col-form-label"
                      >
                        Business Address
                      </label>
                      <div className="col-lg-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Hwolshe"
                          name = "business_address"                        />
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
                          name = "phone"
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
                                <select  name="country" className="form-control">
                                <option>Select One</option>
                                {
                                  countries.map((country) => (
                                    <>
                                    <option key={country.isoCode} value={country.name} > {country.name} </option>
                                    </>
                                  ))
                                }
                                </select>
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
                                <select  name="state" className="form-control">
                                <option>Select One</option>
                                {
                                  states.map((state) => (
                                    <>
                                    <option key={state.isoCode} value={state.countryCode} > {state.name} </option>
                                    </>
                                  ))
                                }
                                </select>
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
                                <select  name="city" className="form-control">
                                <option>Select One</option>
                                <option value={"jos"} >Jos</option>
                                <option value={"bukuru"} >Bukuru</option>
                                </select>
                            </div>
                          </div>


                          <div className="form-group row">
                            <label
                              htmlFor="example-tel-input"
                              className="col-lg-2 col-form-label"
                            >
                              Marketer
                            </label>
                            <div className="col-lg-10">
                            <select  name="agent_id" className="form-control">
                                <option>Select One</option>
                                {
                                  marketers.map((marketer) => (
                                    <>
                                    <option key={marketer.id} value={marketer.id} > {marketer.first_name} </option>
                                    </>
                                  ))
                                }
                                </select>
                            </div>
                          </div>            

               
{/* 
                    <div className="form-group row">
                      <label
                        htmlFor="example-tel-input"
                        className="col-lg-2 col-form-label"
                      >
                        Choose Staff
                      </label>
                      <div className="col-lg-10">
                        <select className="form-control" data-toggle="select2" value = {Staff} onChange={(e)  => setStaff(e.target.value)}>
                          <option>Select One</option>
                          <option value={"Marketer One"}>Staff 1</option>
                          <option value={"Marketer Two"}>Staff 2</option>
                          <option value={"Marketer Three"}>Staff 3</option>
                        </select>
                      </div>
                    </div> */}

                    {/* <button type="submit" className="btn btn-primary btn-block">
                      Create Account
                    </button> */}

                    <div className="form-group text-center">
                                    {
                                        isLoading ? 
                                        ( <div className="sweet-loading">
                                            <DotLoader color={color} loading={loading} css={override}  size={80} />
                                            </div>)
                                        : (
                                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                            Create Account
                                            </button>
                                        )
                                    }
                      </div>
                  </form>

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
