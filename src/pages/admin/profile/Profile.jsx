import { Fragment, useState,useEffect,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
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


function Profile() {

  const [isCompanyLoading, setIsCompanyLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loading,setLoading] = useState(true)
  const [color,setColor] = useState("#ADD8E6");
  const navigate = useNavigate();
  const {user} = useContext(Context);





  const [avatar, setAvatar] = useState(null);
  const [photo, setPhoto] = useState(null);



  


  const handleAvatarOnChange = (file) => {
    setAvatar(file[0])
  }


  const handlePhotoOnChange = (file) => {
    setPhoto(file[0])
  }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
          setIsCompanyLoading(true)
          // setLoading(false)
          let data = new FormData(e.target);
          data.append("avatar",avatar);
    
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
      const response = await api.service().update(`/accounts/organisation/${user.data.organisation}`,data,true,true);
  
      if(api.isSuccessful(response)){
        setTimeout(() => {
          
          toast.success("Company logo update was successful");
          navigate("/admin/dashboard/update_profile",{replace: true})
          setIsCompanyLoading(false)
  
        },0);
      }
  
          setIsCompanyLoading(false)
          // setLoading(false)
        } catch (error) {
          console.log(error)
        }

    }


    const handleProfileSubmit = async(e) => {
      e.preventDefault()
      try {
        setIsLoading(true)
        // setLoading(false)
        let data = new FormData(e.target);
        data.append("user_role","CUSTOMER");
        data.append("avatar",photo);
        console.log(data)
  
  
    const response = await api.service().update(`/accounts/auth/${user.data.id}/`,data,true,true);
  
    if(api.isSuccessful(response)){
      setTimeout(() => {
        
        toast.success("Admin profile updated successfully");
        navigate("/admin/dashboard/update_profile",{replace: true})
        setIsLoading(false)
  
      },0);
    }
  
        setIsLoading(false)
        // setLoading(false)
      } catch (error) {
        console.log(error);
      }

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
              <div className="col-6">
                <div className="card-box">
                  <h4 className="header-title mb-4">Update Profile</h4>
                  <form action="" onSubmit={handleProfileSubmit} >


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
                          value={user.data.first_name}
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
                          value={user.data.last_name}
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
                          onChange={(e)  => handlePhotoOnChange(e.target.files)}
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
                          name="email"
                          type="email"
                          value={user.data.email}         
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
                          name = "phone"
                          value={user.data.phone}
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
                  </form>

                  <div className="form-group row"></div>
                </div>
              </div>

              <div className="col-6">
                <div className="card-box">
                  <h4 className="header-title mb-4">Update Company Profile</h4>
                  <form action="" onSubmit={handleSubmit} >

                

                    {/* <div className="form-group row">
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
                    </div> */}


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
       


                    <div className="form-group text-center">
                                    {
                                        isCompanyLoading ? 
                                        ( <div className="sweet-loading">
                                            <DotLoader color={color} loading={loading} css={override}  size={80} />
                                            </div>)
                                        : (
                                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                            Update Company logo
                                            </button>
                                        )
                                    }
                      </div>
                  </form>

                  <div className="form-group row"></div>
                </div>
              </div>

            </div>
          </div>
          {/* end container-fluid */}
          
        </div>
      </div>
    </Fragment>
      );
}

export default Profile