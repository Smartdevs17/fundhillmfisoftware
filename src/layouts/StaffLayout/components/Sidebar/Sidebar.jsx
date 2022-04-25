import { Fragment } from 'react'
import { Link} from "react-router-dom";
import { GoCalendar} from "react-icons/go";
// MdOutlineSpaceDashboard,MdContentCopy,MdPages
import {MdOutlineDashboard,} from "react-icons/md"
import "./sidebar.css"

function Sidebar() {
  return (
    <Fragment>
            <div className="left-side-menu">

                <div className="slimscroll-menu">

                    <div id="sidebar-menu">

                        <ul className="metismenu" id="side-menu">

                            <li className="menu-title">Navigation</li>

                            <li>
                                <Link to="/staff/dashboard">
                                    <i ><MdOutlineDashboard /></i>
                                    
                                    <span> Dashboard </span>
                                </Link>
                    
                            </li>

                         
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Accounting </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/staff/dashboard/all_deposit">Deposit</Link></li>
                                    <li><Link to="/staff/dashboard/all_withdrawsavings">Withdrawals</Link></li>
                                    <li><Link to="/staff/dashboard/all_regsavings">Regular Savings</Link></li>
                                    <li><Link to="/staff/dashboard/all_targsavings">Targeted Savings</Link></li>
                                    <li><Link to="/staff/dashboard/all_targsavings">FixedSavings Savings</Link></li>
                                    <li><Link to="/staff/dashboard/total_customers">Customers</Link></li>
                             

                                </ul>
                            </li>
                        


                                
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Customer </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/staff/dashboard/newcustomer">New Customer</Link></li>
                                    <li><Link to="/staff/dashboard/quick_customer">Quick Customer</Link></li>
                                    <li><Link to="/staff/dashboard/allcustomer">All Customers</Link></li>
                                </ul>
                            </li>

                                   
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Savings Plan </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/staff/dashboard/savings">Deposit And WithDrawal</Link></li>
                                    <li><Link to="/staff/dashboard/deposit_receipt">Fixed Deposit</Link></li>
                                    <li><Link to="/staff/dashboard/withdrawal_receipt">Targeted Savings</Link></li>
                                    <li><Link to="/staff/dashboard/statement_of_account">Regular Savings</Link></li>
                                    <li><Link to="/staff/dashboard/account_history">Statment Account</Link></li>
                                    {/* <li><Link to="">My Transaction History</Link></li> */}
                                    {/* <li><Link to="">Targeted Savings</Link></li> */}

                                </ul>
                            </li>


                                   
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Report </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/staff/dashboard/daily_report">Daily Report</Link></li>
                                    <li><Link to="/staff/dashboard/deposit_receipt">Fixed Deposit</Link></li>
                                    <li><Link to="/staff/dashboard/withdrawal_receipt">Targeted Savings</Link></li>
                                    <li><Link to="/staff/dashboard/statement_of_account">Regular Savings</Link></li>
                                    <li><Link to="/staff/dashboard/account_history">Statment Account</Link></li>
                                    <li><Link to="">My Transaction History</Link></li>
                                    {/* <li><Link to="">Targeted Savings</Link></li> */}

                                </ul>
                            </li>

                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Esusu Management </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/staff/dashboard/esusu_perform">Esus Performance</Link></li>
                                    <li><Link to="/staff/dashboard/all_marketer">All Marketers</Link></li>
                                    <li><Link to="/staff/dashboard/marketer_account">Marketer Account</Link></li>
                                </ul>
                            </li>




                        </ul>

                    </div>

                    <div className="clearfix"></div>

                </div>

            </div>
    </Fragment>
    )
}

export default Sidebar
