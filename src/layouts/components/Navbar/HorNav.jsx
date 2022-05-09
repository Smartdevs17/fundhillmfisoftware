import { Fragment } from 'react'
import { NavLink} from "react-router-dom";
// import { FaAlignJustify} from "react-icons/fa";
// import {IoMdNotificationsOutline,IoIosArrowDropdownCircle} from "react-icons/io"
// import {MdOutlineSearch,MdOutlineEmail,MdArrowDropDownCircle} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {MdOutlineSearch} from "react-icons/md"
// import {RiArrowDropDownLine} from "react-icons/ri"



function HorNav() {
  return (
    <Fragment>
        {/* Navigation Bar*/}
            <div id="topnav">
       

      


            <div className="topbar-menu">
                <div className="container-fluid">
                    <div id="navigation">
                        <ul className="navigation-menu">
                        <li className="has-submenu">
                            <NavLink to="index.html">
                                <i className="mdi mdi-view-dashboard" />Dashboard
                            </NavLink>
                        </li>







                        </ul>





                    <div className="clearfix" />
                    </div>
                </div>
                {/* end container */}
                </div>
                {/* end navbar-custom */}



            </div>
            {/* End Navigation Bar*/}

    </Fragment>
  )
}

export default HorNav