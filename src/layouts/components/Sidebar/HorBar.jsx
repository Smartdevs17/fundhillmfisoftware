import { Fragment } from 'react'
import { Link} from "react-router-dom";
import { GoCalendar} from "react-icons/go";
// MdOutlineSpaceDashboard,MdContentCopy,MdPages
import {MdOutlineDashboard,} from "react-icons/md"

function HorBar() {
  return (
    <Fragment>
        <div className="topbar-menu">
            <div className="container-fluid">
                <div id="navigation">
                {/* Navigation Menu*/}
                <ul className="navigation-menu">
                    <li className="has-submenu">
                    <a href="index.html">
                        <i className="mdi mdi-view-dashboard" />Dashboard
                    </a>
                    </li>
                    <li className="has-submenu">
                    <a href="#">
                        <i className="mdi mdi-format-underline" />User Interface <div className="arrow-down" />
                    </a>
                    <ul className="submenu megamenu">
                        <li>
                        <ul>
                            <li><a href="ui-buttons.html">Buttons</a></li>
                            <li><a href="ui-cards.html">Cards</a></li>
                            <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                            <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                            <li><a href="ui-navs.html">Navs</a></li>
                            <li><a href="ui-progress.html">Progress</a></li>
                            <li><a href="ui-modals.html">Modals</a></li>
                        </ul>
                        </li>
                        <li>
                        <ul>
                            <li><a href="ui-notification.html">Notification</a></li>
                            <li><a href="ui-alerts.html">Alerts</a></li>
                            <li><a href="ui-carousel.html">Carousel</a></li>
                            <li><a href="ui-bootstrap.html">Bootstrap UI</a></li>
                            <li><a href="ui-typography.html">Typography</a></li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="has-submenu">
                    <a href="#"> <i className="mdi mdi-black-mesa" />Admin UI <div className="arrow-down" /></a>
                    <ul className="submenu">
                        <li><a href="adminui-grid.html">Grid</a></li>
                        <li><a href="adminui-range-sliders.html">Range sliders</a></li>
                        <li><a href="adminui-sweet-alert.html">Sweet Alerts</a></li>
                        <li><a href="adminui-ratings.html">Ratings</a></li>
                        <li><a href="adminui-treeview.html">Treeview</a></li>
                        <li><a href="adminui-tour.html">Tour</a></li>
                        <li><a href="adminui-calendar.html">Calendar</a></li>
                        <li className="has-submenu">
                        <a href="#">Widgets <div className="arrow-down" /></a>
                        <ul className="submenu">
                            <li>
                            <a href="widgets-tiles.html">Tile Box</a>
                            </li>
                            <li>
                            <a href="widgets-charts.html">Chart Widgets</a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="has-submenu">
                    <a href="#">
                        <i className="mdi mdi-package-variant-closed" />Components <div className="arrow-down" /></a>
                    <ul className="submenu">
                        <li className="has-submenu">
                        <a href="#">Icons <div className="arrow-down" /></a>
                        <ul className="submenu">
                            <li><a href="icons-materialdesign.html">Material Design</a></li>
                            <li><a href="icons-ionicons.html">Ion Icons</a></li>
                            <li><a href="icons-fontawesome.html">Font awesome</a></li>
                            <li><a href="icons-themify.html">Themify Icons</a></li>
                            <li><a href="icons-simple-line.html">Simple line Icons</a></li>
                            <li><a href="icons-weather.html">Weather Icons</a></li>
                            <li><a href="icons-pe7.html">PE7 Icons</a></li>
                            <li><a href="icons-typicons.html">Typicons</a></li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <a href="#">Forms <div className="arrow-down" /></a>
                        <ul className="submenu">
                            <li><a href="form-elements.html">General Elements</a></li>
                            <li><a href="form-advanced.html">Advanced Form</a></li>
                            <li><a href="form-validation.html">Form Validation</a></li>
                            <li><a href="form-pickers.html">Form Pickers</a></li>
                            <li><a href="form-wizard.html">Form Wizard</a></li>
                            <li><a href="form-mask.html">Form Masks</a></li>
                            <li><a href="form-uploads.html">Multiple File Upload</a></li>
                            <li><a href="form-xeditable.html">X-editable</a></li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <a href="#">Tables <div className="arrow-down" /></a>
                        <ul className="submenu">
                            <li><a href="tables-basic.html">Basic Tables</a></li>
                            <li><a href="tables-datatable.html">Data Tables</a></li>
                            <li><a href="tables-responsive.html">Responsive Table</a></li>
                            <li><a href="tables-tablesaw.html">Tablesaw</a></li>
                        </ul>
                        </li>
                        <li className="has-submenu">
                        <a href="#">Charts <div className="arrow-down" /></a>
                        <ul className="submenu">
                            <li><a href="charts-flot.html">Flot Charts</a></li>
                            <li><a href="charts-morris.html">Morris Charts</a></li>
                            <li><a href="charts-chartjs.html">Chartjs</a></li>
                            <li><a href="charts-peity.html">Peity Charts</a></li>
                            <li><a href="charts-chartist.html">Chartist Charts</a></li>
                            <li><a href="charts-c3.html">C3 Charts</a></li>
                            <li><a href="charts-sparkline.html">Sparkline Charts</a></li>
                            <li><a href="charts-knob.html">Jquery Knob</a></li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="has-submenu">
                    <a href="#"> <i className="mdi mdi-flip-horizontal" />Layouts <div className="arrow-down" /></a>
                    <ul className="submenu">
                        <li><a href="layouts-topbar-light.html">Topbar Light</a></li>
                        <li><a href="layouts-center-menu.html">Center Menu</a></li>
                        <li><a href="layouts-normal-header.html">Unsticky Header</a></li>
                        <li><a href="layouts-boxed.html">Boxed Layout</a></li>
                    </ul>
                    </li>
                    <li className="has-submenu">
                    <a href="#"> <i className="mdi mdi-google-pages" />Pages <div className="arrow-down" /></a>
                    <ul className="submenu">
                        <li><a href="pages-starter.html">Starter Page</a></li>
                        <li><a href="pages-login.html">Login</a></li>
                        <li><a href="pages-register.html">Register</a></li>
                        <li><a href="pages-recoverpw.html">Recover Password</a></li>
                        <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                        <li><a href="pages-404.html">Error 404</a></li>
                        <li><a href="pages-500.html">Error 500</a></li>
                    </ul>
                    </li>
                    <li className="has-submenu">
                    <a href="#"> <i className="mdi mdi-content-copy" />Extra Pages <div className="arrow-down" /></a>
                    <ul className="submenu">
                        <li><a href="pages-timeline.html">Timeline</a></li>
                        <li><a href="pages-invoice.html">Invoice</a></li>
                        <li><a href="pages-pricing.html">Pricing</a></li>
                        <li><a href="pages-gallery.html">Gallery</a></li>
                        <li><a href="pages-maintenance.html">Maintenance</a></li>
                        <li><a href="pages-comingsoon.html">Coming Soon</a></li>
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

    </Fragment>
  )
}

export default HorBar