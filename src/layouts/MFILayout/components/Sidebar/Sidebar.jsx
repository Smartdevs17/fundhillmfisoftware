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
                                <Link to="/admin/dashboard">
                                    <i ><MdOutlineDashboard /></i>
                                    
                                    <span> Dashboard </span>
                                </Link>
                                {/* <ul className="nav-second-level" >
                                    <li><Link to="#">Dashboard</Link></li>
                                    <li><Link to="#">Daily History</Link></li>
                                    <li><Link to="#">Report</Link></li>
                                </ul> */}
                            </li>

                         
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Accounting </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/all_deposit">Deposit</Link></li>
                                    <li><Link to="/admin/dashboard/all_withdrawsavings">Withdrawals</Link></li>
                                    <li><Link to="/admin/dashboard/all_regsavings">Regular Savings</Link></li>
                                    <li><Link to="/admin/dashboard/all_targsavings">Targeted Savings</Link></li>
                                    <li><Link to="/admin/dashboard/all_targsavings">FixedSavings Savings</Link></li>
                                    <li><Link to="/admin/dashboard/total_customers">Customers</Link></li>
                             

                                </ul>
                            </li>
                        
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Branch </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/newbranch">New Branch</Link></li>
                                    <li><Link to="/admin/dashboard/allbranch">All Branches</Link></li>
                                </ul>
                            </li>

                                
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Customer </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/newcustomer">New Customer</Link></li>
                                    <li><Link to="/admin/dashboard/quick_customer">Quick Customer</Link></li>
                                    <li><Link to="/admin/dashboard/allcustomer">All Customers</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Marketer </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/new_marketer">New Marketer</Link></li>
                                    <li><Link to="/admin/dashboard/all_marketer">All Marketers</Link></li>
                                    <li><Link to="/admin/dashboard/marketer_account">Marketer Account</Link></li>
                                </ul>
                            </li>
                                   
                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Savings Plan </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/savings">Deposit And WithDrawal</Link></li>
                                    <li><Link to="/admin/dashboard/deposit_receipt">Fixed Deposit</Link></li>
                                    <li><Link to="/admin/dashboard/withdrawal_receipt">Targeted Savings</Link></li>
                                    <li><Link to="/admin/dashboard/statement_of_account">Regular Savings</Link></li>
                                    <li><Link to="/admin/dashboard/account_history">Statment Account</Link></li>
                                    <li><Link to="">My Transaction History</Link></li>
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
                                    <li><Link to="/admin/dashboard/daily_report">Daily Report</Link></li>
                                    <li><Link to="/admin/dashboard/deposit_receipt">Fixed Deposit</Link></li>
                                    <li><Link to="/admin/dashboard/withdrawal_receipt">Targeted Savings</Link></li>
                                    <li><Link to="/admin/dashboard/statement_of_account">Regular Savings</Link></li>
                                    <li><Link to="/admin/dashboard/account_history">Statment Account</Link></li>
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
                                    <li><Link to="/admin/dashboard/esusu_perform">Esus Performance</Link></li>
                                    <li><Link to="/admin/dashboard/all_marketer">All Marketers</Link></li>
                                    <li><Link to="/admin/dashboard/marketer_account">Marketer Account</Link></li>
                                </ul>
                            </li>


                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Loan Management </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/new_product">New Loan Product</Link></li>
                                    <li><Link to="/admin/dashboard/pending_loan">Pending Loan</Link></li>
                                    <li><Link to="/admin/dashboard/disburse_loan">Disbured Loan</Link></li>
                                    <li><Link to="/admin/dashboard/invoice">Invoice</Link></li>
                                    <li><Link to="/admin/dashboard/ongoing_loan">Ongoing Loan</Link></li>

                                </ul>
                            </li>



                            <li>
                                <Link to="#">
                                    <i > <GoCalendar  /> </i>
                                    <span> Expenses </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/admin/dashboard/new_expenses">New Expenses</Link></li>
                                    <li><Link to="/admin/dashboard/all_expenses">All Expenses</Link></li>
        

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
