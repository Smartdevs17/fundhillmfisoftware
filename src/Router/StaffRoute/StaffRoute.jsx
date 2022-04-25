import {Route} from "react-router-dom";
import {StaffLayout} from "../../layouts";

import {
  Login,
  Register,
  NewCustomer,
  AllCustomer,
  EditCustomer,
  Transactions,
  DepositRecipt,
  WithdrawRecipt,
  History,
  AccountStatement,
  DailyReport,
  DepositReport,
  FixedReport,
  RegularReport,
  TargetedReport,
  WithdrawalReport,
  AllDeposit,
  AllFixedSaving,
  AllRegularSaving,
  AllTargetedSaving,
  AllWithdrawalSaving,
  TotalCustomer,
  NewMarketer,
  ViewCustomer,
  MarketerAccount,
  EsusPerform,
  QuickCustomer,
  EsusuDReciept,
  EsusuWReciept,
  Dashboard,
  AllExpenses,
  NewExpenses,
} from "../../pages/staff"

function StaffRoute() {
  return (
    <Route path="staff" element={<StaffLayout />}>

            {/* Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />



        {/* Customers */}
        <Route path="dashboard/newcustomer" element={<NewCustomer />} />
        <Route path="dashboard/allcustomer" element={<AllCustomer />} />
        <Route path="dashboard/updatecustomer" element={<EditCustomer />} />
        <Route path="dashboard/quick_customer" element={<QuickCustomer />} />


          {/* Savings */}
        <Route path="dashboard/savings" element={<Transactions />} />
        <Route path="dashboard/allcustomer" element={<AllCustomer />} />
        <Route path="dashboard/updatecustomer" element={<EditCustomer />} />
        <Route path="dashboard/deposit_receipt" element={<DepositRecipt />} />
        <Route path="dashboard/withdrawal_receipt" element={<WithdrawRecipt />} />
        <Route path="dashboard/statement_of_account" element={<AccountStatement />} />
        <Route path="dashboard/account_history" element={<History />} />

            {/* Reports */}
        <Route path="dashboard/daily_report" element={<DailyReport />} />
        <Route path="dashboard/regular_savings_report" element={<RegularReport />} />
        <Route path="dashboard/targeted_savings_report" element={<TargetedReport />} />
        <Route path="dashboard/fixed_savings_report" element={<FixedReport />} />
        <Route path="dashboard/withdrawal_report" element={<WithdrawalReport />} />
        <Route path="dashboard/deposit_report" element={<DepositReport />} />


          {/* Accounting         */}
        <Route path="dashboard/all_deposit" element={<AllDeposit />} />
        <Route path="dashboard/all_fixedsavings" element={<AllFixedSaving />} />
        <Route path="dashboard/all_regsavings" element={<AllRegularSaving />} />
        <Route path="dashboard/all_targsavings" element={<AllTargetedSaving />} />
        <Route path="dashboard/all_withdrawsavings" element={<AllWithdrawalSaving />} />
        <Route path="dashboard/total_customers" element={<TotalCustomer />} />


        {/* Marketer */}
        <Route path="dashboard/new_marketer" element={<NewMarketer />} />
        <Route path="dashboard/marketer_account" element={<MarketerAccount />} />
        <Route path="dashboard/view_customer" element={<ViewCustomer />} />
  

        {/* Esusu Management */}
        <Route path="dashboard/esusu_perform" element={<EsusPerform />} />
        <Route path="dashboard/esusu_withdraw_receipt" element={<EsusuWReciept />} />
        <Route path="dashboard/esusu_deposit_receipt" element={<EsusuDReciept />} />
        {/* <Route path="dashboard/view_customer" element={<ViewCustomer />} /> */}


        {/* Expenses Management */}
        <Route path="dashboard/new_expenses" element={<NewExpenses />} />
        <Route path="dashboard/all_expenses" element={<AllExpenses />} />




    </Route>
  )
}

export default StaffRoute