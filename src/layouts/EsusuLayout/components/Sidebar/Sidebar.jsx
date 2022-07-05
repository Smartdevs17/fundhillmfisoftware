import { Fragment,useState} from 'react'
import { Link} from "react-router-dom";
// MdOutlineSpaceDashboard,MdContentCopy,MdPages
import {GiBlackBook,GiExpense,GiMoneyStack} from "react-icons/gi";
import {AiOutlineBranches,AiOutlineUser} from "react-icons/ai";
import {FiUsers,FiChevronRight,FiChevronDown} from "react-icons/fi";
import {HiOutlineDocumentReport} from "react-icons/hi"
import {IoMdBusiness} from "react-icons/io" 
import {MdOutlineDashboard,MdOutlineSavings} from "react-icons/md"
import "./sidebar.css"
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {

    const [arrow,setArrow] = useState(false);
    // const [active,setActive] = useState("");

  return (
    <Fragment>
            <div className="left-side-menu">

                <div className="slimscroll-menu">

                    <div id="sidebar-menu">

                        <ul className="metismenu" id="side-menu">

                            <li className="menu-title">Navigation</li>

                            <li>
                                <Link to="/esusu/dashboard">
                                    <i ><MdOutlineDashboard /></i>
                                    
                                    <span> Dashboard </span>
                                </Link>
                                {/* <ul className="nav-second-level" >
                                    <li><Link to="#">Dashboard</Link></li>
                                    <li><Link to="#">Daily History</Link></li>
                                    <li><Link to="#">Report</Link></li>
                                </ul> */}
                            </li>

{/*                          
                            <li onClick={() => setArrow(true)} >
                                <Link  to="#">
                                    <i > <GiBlackBook  /> </i>
                                    <span> Accounting </span>
                                    <span className="menu-arrow"></span>
                                  
                                
                                </Link>
                                <ul className="nav-second-level"  aria-expanded={"false"} >
                                    <li><Link to="/esusu/dashboard/all_deposit">Deposit</Link></li>
                                    <li><Link to="/esusu/dashboard/all_withdrawsavings">Withdrawal</Link></li>
                                    <li><Link to="/esusu/dashboard/all_regsavings">Regular Savings</Link></li>
                                    <li><Link to="/esusu/dashboard/all_targsavings">Targeted Savings</Link></li>
                                    <li><Link to="/esusu/dashboard/all_targsavings">FixedSavings Savings</Link></li>
                                    <li><Link to="/esusu/dashboard/total_customers">Customers</Link></li>
                             

                                </ul>
                            </li> */}
                        
                            {/* <li>
                                <Link to="#">
                                    <i > <AiOutlineBranches  /> </i>
                                    <span> Branch </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level"  aria-expanded={"false"} >
                                    <li><Link to="/esusu/dashboard/newbranch">New Branch</Link></li>
                                    <li><Link to="/esusu/dashboard/allbranch">All Branches</Link></li>
                                </ul>
                            </li> */}

                                
                            <li>
                                <Link to="#">
                                    <i > <FiUsers  /> </i>
                                    <span> Membership </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level"  aria-expanded={false} >
                                    <li><Link to="/esusu/dashboard/newcustomer">New Memebers</Link></li>
                                    <li><Link to="/esusu/dashboard/quick_customer">Pending Verification</Link></li>
                                    <li><Link to="/esusu/dashboard/allcustomer">All Memebers</Link></li>
                                    {/* List of Tasks to be performed in all membership
                                    i: Password Recover
                                    ii: View Membership
                                    iii. Edit Member
                                    iv. Change Password
                                    v. Activate/Delete Member  */}
                                </ul>
                            </li>

                            <li>
                                <Link to="#">
                                    <i > <AiOutlineUser  /> </i>
                                    <span> Payout </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level"  aria-expanded={"false"} >
                                    <li><Link to="/esusu/dashboard/new_marketer">Investment Payout</Link></li>
                                    <li><Link to="/esusu/dashboard/all_marketer">All Marketers</Link></li>
                                    <li><Link to="/esusu/dashboard/marketer_account">Marketer Account</Link></li>
                                </ul>
                            </li>
                                   
                            <li>
                                <Link to="#">
                                    <i > <MdOutlineSavings  /> </i>
                                    <span> Transaction </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" >
                                    <li><Link to="/esusu/dashboard/savings">Deposit And WithDrawal</Link></li>
                                    <li><Link to="/esusu/dashboard/deposit_receipt">Fixed Deposit</Link></li>
                                    <li><Link to="/esusu/dashboard/withdrawal_receipt">Targeted Savings</Link></li>
                                    <li><Link to="/esusu/dashboard/statement_of_account">Regular Savings</Link></li>
                                    <li><Link to="/esusu/dashboard/account_history">Statment Account</Link></li>
                                    <li><Link to="">My Transaction History</Link></li>
{/*  */}
                                </ul>
                            </li>


                                   
                            <li>
                                <Link to="#">
                                    <i > <HiOutlineDocumentReport  /> </i>
                                    <span> Report </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level" aria-expanded={false} >
                                    <li><Link to="/esusu/dashboard/daily_report">Daily Report</Link></li>
                                    <li><Link to="/esusu/dashboard/fixed_savings_report">Fixed Deposit</Link></li>
                                    <li><Link to="/esusu/dashboard/targeted_savings_report">Targeted Savings</Link></li>
                                    <li><Link to="/esusu/dashboard/regular_savings_report">Regular Savings</Link></li>
                                    <li><Link to="/esusu/dashboard/marketer_account">Marketer Report</Link></li>

                            

                                </ul>
                            </li>

                            <li>
                                <Link to="#">
                                    <i > <IoMdBusiness  /> </i>
                                    <span> Esusu Management </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level"  aria-expanded={"false"}>
                                    <li><Link to="/esusu/dashboard/esusu_transaction">Esusu Transaction</Link></li>
                                    <li><Link to="/esusu/dashboard/esusu_perform">Esus Performance</Link></li>
                                    
                                </ul>
                            </li>


                            <li>
                                <Link to="#">
                                    <i > <GiMoneyStack  /> </i>
                                    <span> Loan Management </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level"  aria-expanded={"false"}>
                                    <li><Link to="/esusu/dashboard/new_product">New Loan Product</Link></li>
                                    <li><Link to="/esusu/dashboard/add_borrower">Add Borrower</Link></li>
                                    <li><Link to="/esusu/dashboard/pending_loan">Pending Loan</Link></li>
                                    <li><Link to="/esusu/dashboard/disburse_loan">Disbured Loan</Link></li>
                                    <li><Link to="/esusu/dashboard/invoice">Invoice</Link></li>
                                    <li><Link to="/esusu/dashboard/ongoing_loan">Ongoing Loan</Link></li>

                                </ul>
                            </li>



                            <li>
                                <Link to="#">
                                    <i > <GiExpense  /> </i>
                                    <span> Expenses </span>
                                    <span className="menu-arrow"></span>
                                </Link>
                                <ul className="nav-second-level"  aria-expanded={"false"}>
                                    <li><Link to="/esusu/dashboard/new_expenses">New Expenses</Link></li>
                                    <li><Link to="/esusu/dashboard/all_expenses">All Expenses</Link></li>
        

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
