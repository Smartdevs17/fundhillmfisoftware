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
            <header id="topnav">
            {/* Topbar Start */}
            <div className="navbar-custom">
                <div className="container-fluid">

                <ul className="list-unstyled topnav-menu float-right mb-0">
                    <li className="dropdown notification-list">
                        {/* Mobile menu toggle*/}
                        <NavLink to={"#"} className="navbar-toggle nav-link">
                        <div className="lines">
                            <span />
                            <span />
                            <span />
                        </div>
                        </NavLink>
                        {/* End mobile menu toggle*/}
                    </li>
          
                    <li className="dropdown notification-list">
                        <NavLink className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i className="mdi mdi-bell-outline noti-icon" />
                        <span className="noti-icon-badge" />
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                        {/* item*/}
                        <div className="dropdown-item noti-title">
                            <h5 className="font-16 text-white m-0">
                            <span className="float-right">
                                <NavLink to={"#"} className="text-white">
                                <small>Clear All</small>
                                </NavLink>
                            </span>Notification
                            </h5>
                        </div>
                        <div className="slimscroll noti-scroll">
                            {/* item*/}
                            <NavLink to={"#"} className="dropdown-item notify-item">
                            <div className="notify-icon bg-success">
                                <i className="mdi mdi-settings-outline" />
                            </div>
                            <p className="notify-details">New settings
                                <small className="text-muted">There are new settings available</small>
                            </p>
                            </NavLink>
                            {/* item*/}
                            <NavLink to={"#"} className="dropdown-item notify-item">
                            <div className="notify-icon bg-info">
                                <i className="mdi mdi-bell-outline" />
                            </div>
                            <p className="notify-details">Updates
                                <small className="text-muted">There are 2 new updates available</small>
                            </p>
                            </NavLink>
                            {/* item*/}
                            <NavLink to={"#"} className="dropdown-item notify-item">
                            <div className="notify-icon bg-danger">
                                <i className="mdi mdi-account-plus" />
                            </div>
                            <p className="notify-details">New user
                                <small className="text-muted">You have 10 unread messages</small>
                            </p>
                            </NavLink>
                            {/* item*/}
                            <NavLink to={"#"} className="dropdown-item notify-item">
                            <div className="notify-icon bg-info">
                                <i className="mdi mdi-comment-account-outline" />
                            </div>
                            <p className="notify-details">Caleb Flakelar commented on Admin
                                <small className="text-muted">4 days ago</small>
                            </p>
                            </NavLink>
                            {/* item*/}
                            <NavLink to={"#"} className="dropdown-item notify-item">
                            <div className="notify-icon bg-secondary">
                                <i className="mdi mdi-heart" />
                            </div>
                            <p className="notify-details">Carlos Crouch liked
                                <b>Admin</b>
                                <small className="text-muted">13 days ago</small>
                            </p>
                            </NavLink>
                        </div>
                        {/* All*/}
                        <NavLink to={"#"} className="dropdown-item text-primary notify-item notify-all">
                            View all
                            <i className="fi-arrow-right" />
                        </NavLink>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <NavLink className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <i className="mdi mdi-email-outline noti-icon" />
                        <span className="noti-icon-badge" />
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                        {/* item*/}
                        <div className="dropdown-item noti-title">
                            <h5 className="font-16 text-white m-0">
                            <span className="float-right">
                                <NavLink to={"#"} className="text-white">
                                <small>Clear All</small>
                                </NavLink>
                            </span>Messages
                            </h5>
                        </div>
   
                        <NavLink to={"#"} className="dropdown-item text-primary notify-item notify-all">
                            View all
                            <i className="fi-arrow-right" />
                        </NavLink>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <NavLink className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" to={"#"} role="button" aria-haspopup="false" aria-expanded="false">
                        <img src="/assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle" />
                        <span className="d-none d-sm-inline-block ml-1 font-weight-medium">Alex M.</span>
                        <i className="mdi mdi-chevron-down d-none d-sm-inline-block" />
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                        {/* item*/}
                        <div className="dropdown-header noti-title">
                            <h6 className="text-overflow text-white m-0">Welcome !</h6>
                        </div>
                        {/* item*/}
                        <NavLink to={"#"} className="dropdown-item notify-item">
                            <i className="mdi mdi-account-outline" />
                            <span>Profile</span>
                        </NavLink>
                        {/* item*/}
                        <NavLink to={"#"} className="dropdown-item notify-item">
                            <i className="mdi mdi-settings-outline" />
                            <span>Settings</span>
                        </NavLink>
                        {/* item*/}
                        <NavLink to={"#"} className="dropdown-item notify-item">
                            <i className="mdi mdi-lock-outline" />
                            <span>Lock Screen</span>
                        </NavLink>
                        <div className="dropdown-divider" />
                        {/* item*/}
                        <NavLink to={"#"} className="dropdown-item notify-item">
                            <i className="mdi mdi-logout-variant" />
                            <span>Logout</span>
                        </NavLink>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <NavLink to={"#"} className="nav-link right-bar-toggle waves-effect waves-light">
                        <i className="mdi mdi-settings-outline noti-icon" />
                        </NavLink>
                    </li>
                    </ul>



                    {/* LOGO */}
                    <div className="logo-box">
                    <NavLink to="index.html" className="logo text-center logo-dark">
                        <span className="logo-lg">
                        <img src="/assets/images/logo.png" alt="" height={22} />
                        {/* <span class="logo-lg-text-dark">Uplon</span> */}
                        </span>
                        <span className="logo-sm">
                        {/* <span class="logo-lg-text-dark">U</span> */}
                        <img src="/assets/images/logo-sm.png" alt="" height={24} />
                        </span>
                    </NavLink>
                    <NavLink to="index.html" className="logo text-center logo-light">
                        <span className="logo-lg">
                        <img src="/assets/images/logo-light.png" alt="" height={22} />
                        {/* <span class="logo-lg-text-dark">Uplon</span> */}
                        </span>
                        <span className="logo-sm">
                        {/* <span class="logo-lg-text-dark">U</span> */}
                        <img src="/assets/images/logo-sm-light.png" alt="" height={24} />
                        </span>
                    </NavLink>
                    </div>



                    <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li className="d-none d-md-block">
                        <form className="app-search">
                        <div className="app-search-box">
                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <div className="input-group-append">
                                <button className="btn" type="submit">
                                <i className="fas fa-search" />
                                </button>
                            </div>
                            </div>
                        </div>
                        </form>
                    </li>
                    <li className="dropdown dropdown-mega d-none d-lg-block">
                        <NavLink className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                        Mega Menu
                        <i className="mdi mdi-chevron-down" /> 
                        </NavLink>
                        <div className="dropdown-menu dropdown-megamenu p-0">
                        <div className="row">
                            <div className="col-sm-5">
                            <div className="p-4">
                                <div className="row">
                                <div className="col-md-6">
                                    <h5 className="font-16 mt-0"><i className="mdi mdi-toolbox-outline mr-1" /> UI Components</h5>
                                    <ul className="list-unstyled megamenu-list">
                                    <li>
                                        <NavLink to={"#"}>Widgets</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Calendar</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Range Sliders</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Sweet Alerts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Ratings</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Treeview Page</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Tour Page</NavLink>
                                    </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="font-16 mt-0"><i className="mdi mdi-flip-horizontal mr-1" /> Layouts</h5>
                                    <ul className="list-unstyled megamenu-list">
                                    <li>
                                        <NavLink to={"#"}>Dark Sidebar</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Small Sidebar</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Sidebar Collapsed</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Unsticky Layout</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Boxed Layout</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"#"}>Topbar Light</NavLink>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-7">
                            <div className="row">
                                <div className="col-md-7">
                                <div className="p-4">
                                    <div className="row">
                                    <div className="col-md-4">
                                        <div className="text-center">
                                        <div>
                                            <i className="fab fa-bootstrap text-purple h2 mb-0" />
                                        </div>
                                        <h5 className="font-16">Bootstrap</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center mt-4 mt-md-0">
                                        <div>
                                            <i className="fab fa-npm text-danger h2 mb-0" />
                                        </div>
                                        <h5 className="font-16">Npm</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center mt-4 mt-md-0">
                                        <div>
                                            <i className="fab fa-sass text-pink h2 mb-0" />
                                        </div>
                                        <h5 className="font-16">Sass support</h5>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-4">
                                        <div className="text-center mt-4">
                                        <div>
                                            <i className="fas fa-tablet-alt text-dark h2 mb-0" />
                                        </div>
                                        <h5 className="font-16">Responsive</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center mt-4">
                                        <div>
                                            <i className="fab fa-gulp text-primary h2 mb-0" />
                                        </div>
                                        <h5 className="font-16">Gulp Support</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center mt-4">
                                        <div>
                                            <i className="far fa-file-code text-warning h2 mb-0" />
                                        </div>
                                        <h5 className="font-16">Free Landing</h5>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-5">
                                <div className="text-center">
                                    <div className="p-4">
                                    <h4 className="mt-0">Special Discount Sale!</h4>
                                    <h5 className="mt-4">Save up to <span className="text-primary">60%</span> off.</h5>
                                    <p className="text-muted">Get free updates lifetime</p>
                                    <NavLink to="https://1.envato.market/XY7j5" target="_blank" className="btn btn-primary btn-rounded">Download Now</NavLink>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    </ul>





          
                </div> {/* end container-fluid*/}
            </div>
            {/* end Topbar */}

      


            <div className="topbar-menu">
                <div className="container-fluid">
                    <div id="navigation">


                    {/* Navigation Menu*/}
                    <ul className="navigation-menu">
                        <li className="has-submenu">
                        <NavLink to="index.html">
                            <i className="mdi mdi-view-dashboard" />Dashboard
                        </NavLink>
                        </li>


                        <li className="has-submenu">
                        <NavLink to="#">
                            <i className="mdi mdi-format-underline" />User Interface <div className="arrow-down" />
                        </NavLink>


                        <ul className="submenu megamenu">
                            <li>
                            <ul>
                                <li><NavLink to="ui-buttons.html">Buttons</NavLink></li>
                                <li><NavLink to="ui-cards.html">Cards</NavLink></li>
                                <li><NavLink to="ui-dropdowns.html">Dropdowns</NavLink></li>
                                <li><NavLink to="ui-checkbox-radio.html">Checkboxs-Radios</NavLink></li>
                                <li><NavLink to="ui-navs.html">Navs</NavLink></li>
                                <li><NavLink to="ui-progress.html">Progress</NavLink></li>
                                <li><NavLink to="ui-modals.html">Modals</NavLink></li>
                            </ul>
                            </li>
                            <li>
                            <ul>
                                <li><NavLink to="ui-notification.html">Notification</NavLink></li>
                                <li><NavLink to="ui-alerts.html">Alerts</NavLink></li>
                                <li><NavLink to="ui-carousel.html">Carousel</NavLink></li>
                                <li><NavLink to="ui-bootstrap.html">Bootstrap UI</NavLink></li>
                                <li><NavLink to="ui-typography.html">Typography</NavLink></li>
                            </ul>
                            </li>
                        </ul>
                        </li>

                        <li className="has-submenu">
                        <NavLink to="#"> <i className="mdi mdi-black-mesa" />Admin UI <div className="arrow-down" /></NavLink>
                        <ul className="submenu">
                            <li><NavLink to="adminui-grid.html">Grid</NavLink></li>
                            <li><NavLink to="adminui-range-sliders.html">Range sliders</NavLink></li>
                            <li><NavLink to="adminui-sweet-alert.html">Sweet Alerts</NavLink></li>
                            <li><NavLink to="adminui-ratings.html">Ratings</NavLink></li>
                            <li><NavLink to="adminui-treeview.html">Treeview</NavLink></li>
                            <li><NavLink to="adminui-tour.html">Tour</NavLink></li>
                            <li><NavLink to="adminui-calendar.html">Calendar</NavLink></li>
                            <li className="has-submenu">
                            <NavLink to="#">Widgets <div className="arrow-down" /></NavLink>
                            <ul className="submenu">
                                <li>
                                <NavLink to="widgets-tiles.html">Tile Box</NavLink>
                                </li>
                                <li>
                                <NavLink to="widgets-charts.html">Chart Widgets</NavLink>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <NavLink to="#">
                            <i className="mdi mdi-package-variant-closed" />Components <div className="arrow-down" /></NavLink>
                        <ul className="submenu">
                            <li className="has-submenu">
                            <NavLink to="#">Icons <div className="arrow-down" /></NavLink>
                            <ul className="submenu">
                                <li><NavLink to="icons-materialdesign.html">Material Design</NavLink></li>
                                <li><NavLink to="icons-ionicons.html">Ion Icons</NavLink></li>
                                <li><NavLink to="icons-fontawesome.html">Font awesome</NavLink></li>
                                <li><NavLink to="icons-themify.html">Themify Icons</NavLink></li>
                                <li><NavLink to="icons-simple-line.html">Simple line Icons</NavLink></li>
                                <li><NavLink to="icons-weather.html">Weather Icons</NavLink></li>
                                <li><NavLink to="icons-pe7.html">PE7 Icons</NavLink></li>
                                <li><NavLink to="icons-typicons.html">Typicons</NavLink></li>
                            </ul>
                            </li>
                            <li className="has-submenu">
                            <NavLink to="#">Forms <div className="arrow-down" /></NavLink>
                            <ul className="submenu">
                                <li><NavLink to="form-elements.html">General Elements</NavLink></li>
                                <li><NavLink to="form-advanced.html">Advanced Form</NavLink></li>
                                <li><NavLink to="form-validation.html">Form Validation</NavLink></li>
                                <li><NavLink to="form-pickers.html">Form Pickers</NavLink></li>
                                <li><NavLink to="form-wizard.html">Form Wizard</NavLink></li>
                                <li><NavLink to="form-mask.html">Form Masks</NavLink></li>
                                <li><NavLink to="form-uploads.html">Multiple File Upload</NavLink></li>
                                <li><NavLink to="form-xeditable.html">X-editable</NavLink></li>
                            </ul>
                            </li>
                            <li className="has-submenu">
                            <NavLink to="#">Tables <div className="arrow-down" /></NavLink>
                            <ul className="submenu">
                                <li><NavLink to="tables-basic.html">Basic Tables</NavLink></li>
                                <li><NavLink to="tables-datatable.html">Data Tables</NavLink></li>
                                <li><NavLink to="tables-responsive.html">Responsive Table</NavLink></li>
                                <li><NavLink to="tables-tablesaw.html">Tablesaw</NavLink></li>
                            </ul>
                            </li>
                            <li className="has-submenu">
                            <NavLink to="#">Charts <div className="arrow-down" /></NavLink>
                            <ul className="submenu">
                                <li><NavLink to="charts-flot.html">Flot Charts</NavLink></li>
                                <li><NavLink to="charts-morris.html">Morris Charts</NavLink></li>
                                <li><NavLink to="charts-chartjs.html">Chartjs</NavLink></li>
                                <li><NavLink to="charts-peity.html">Peity Charts</NavLink></li>
                                <li><NavLink to="charts-chartist.html">Chartist Charts</NavLink></li>
                                <li><NavLink to="charts-c3.html">C3 Charts</NavLink></li>
                                <li><NavLink to="charts-sparkline.html">Sparkline Charts</NavLink></li>
                                <li><NavLink to="charts-knob.html">Jquery Knob</NavLink></li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <NavLink to="#"> <i className="mdi mdi-flip-horizontal" />Layouts <div className="arrow-down" /></NavLink>
                        <ul className="submenu">
                            <li><NavLink to="layouts-topbar-light.html">Topbar Light</NavLink></li>
                            <li><NavLink to="layouts-center-menu.html">Center Menu</NavLink></li>
                            <li><NavLink to="layouts-normal-header.html">Unsticky Header</NavLink></li>
                            <li><NavLink to="layouts-boxed.html">Boxed Layout</NavLink></li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <NavLink to="#"> <i className="mdi mdi-google-pages" />Pages <div className="arrow-down" /></NavLink>
                        <ul className="submenu">
                            <li><NavLink to="pages-starter.html">Starter Page</NavLink></li>
                            <li><NavLink to="pages-login.html">Login</NavLink></li>
                            <li><NavLink to="pages-register.html">Register</NavLink></li>
                            <li><NavLink to="pages-recoverpw.html">Recover Password</NavLink></li>
                            <li><NavLink to="pages-lock-screen.html">Lock Screen</NavLink></li>
                            <li><NavLink to="pages-404.html">Error 404</NavLink></li>
                            <li><NavLink to="pages-500.html">Error 500</NavLink></li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <NavLink to="#"> <i className="mdi mdi-content-copy" />Extra Pages <div className="arrow-down" /></NavLink>
                        <ul className="submenu">
                            <li><NavLink to="pages-timeline.html">Timeline</NavLink></li>
                            <li><NavLink to="pages-invoice.html">Invoice</NavLink></li>
                            <li><NavLink to="pages-pricing.html">Pricing</NavLink></li>
                            <li><NavLink to="pages-gallery.html">Gallery</NavLink></li>
                            <li><NavLink to="pages-maintenance.html">Maintenance</NavLink></li>
                            <li><NavLink to="pages-comingsoon.html">Coming Soon</NavLink></li>
                        </ul>
                        </li>
                      

                        
                    </ul>
                    {/* End navigation menu */}



                    <div className="clearfix" />
                    </div>
                    {/* end #navigation */}
                </div>
                {/* end container */}
                </div>
                {/* end navbar-custom */}



            </header>
            {/* End Navigation Bar*/}

    </Fragment>
  )
}

export default HorNav