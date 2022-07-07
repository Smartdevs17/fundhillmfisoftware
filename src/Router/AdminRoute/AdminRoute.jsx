// import {Fragment} from 'react'
import {Route} from "react-router-dom"
import {NewBranch,AllBranch, UpdateBranch,NewCustomer,AllCustomer,EditCustomer,
        Transactions,DepositRecipt,WithdrawRecipt,History,AccountStatement,
        DailyReport,RegularReport,TargetedReport,FixedReport,DepositReport,WithdrawalReport,
        LoanReport,
        AllDeposit,
        AllFixedSaving,
        AllLoan,
        AllRegularSaving,
        AllTargetedSaving,
        AllWithdrawalSaving,
        TotalCustomer,
        NewMarketer,
        AllMarketer,
        ViewCustomer,
        MarketerAccount,
        EsusPerform,QuickCustomer,
        EsusuDReciept,
        EsusuWReciept,
        EsusuTransaction,
        NewProduct,
        AddBorrower,
        PendingLoan,
        DisbursedLoan,
        InvoiceLoan,
        OngoingLoan,
        Dashboard,
        NewExpenses,
        AllExpenses,
        Profile,
        PendingCustomer} from "../../pages/admin/"
import { AdminLayout } from '../../layouts'


function AdminRoute() {
  return (
    <Route path="admin" element={<AdminLayout />}>

            {/* Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />


        {/* Branches */}
        <Route path="dashboard/newbranch" element={<NewBranch />} />
        <Route path="dashboard/allbranch" element={<AllBranch />} />
        <Route path="dashboard/updatebranch:branch_id" element={<UpdateBranch />} />

        {/* Customers */}
        <Route path="dashboard/newcustomer" element={<NewCustomer />} />
        <Route path="dashboard/pendingcustomer" element={<PendingCustomer />} />
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
        <Route path="dashboard/loan_report" element={<LoanReport />} />


          {/* Accounting         */}
        <Route path="dashboard/all_deposit" element={<AllDeposit />} />
        <Route path="dashboard/all_fixedsavings" element={<AllFixedSaving />} />
        <Route path="dashboard/all_Loan" element={<AllLoan />} />
        <Route path="dashboard/all_regsavings" element={<AllRegularSaving />} />
        <Route path="dashboard/all_targsavings" element={<AllTargetedSaving />} />
        <Route path="dashboard/all_withdrawsavings" element={<AllWithdrawalSaving />} />
        <Route path="dashboard/total_customers" element={<TotalCustomer />} />


        {/* Marketer */}
        <Route path="dashboard/new_marketer" element={<NewMarketer />} />
        <Route path="dashboard/all_marketer" element={<AllMarketer />} />
        <Route path="dashboard/marketer_account" element={<MarketerAccount />} />
        <Route path="dashboard/view_customer" element={<ViewCustomer />} />
  

        {/* Esusu Management */}
        <Route path="dashboard/esusu_perform" element={<EsusPerform />} />
        <Route path="dashboard/esusu_withdraw_receipt" element={<EsusuWReciept />} />
        <Route path="dashboard/esusu_deposit_receipt" element={<EsusuDReciept />} />
        <Route path="dashboard/esusu_transaction" element={<EsusuTransaction />} />

        {/* Loan Management */}
        <Route path="dashboard/new_product" element={<NewProduct />} />
        <Route path="dashboard/add_borrower" element={<AddBorrower />} />
        <Route path="dashboard/pending_loan" element={<PendingLoan />} />
        <Route path="dashboard/disburse_loan" element={<DisbursedLoan />} />
        <Route path="dashboard/invoice" element={<InvoiceLoan />} />
        <Route path="dashboard/ongoing_loan" element={<OngoingLoan />} />

        {/* Expenses Management */}
        <Route path="dashboard/new_expenses" element={<NewExpenses />} />
        <Route path="dashboard/all_expenses" element={<AllExpenses />} />

        {/* Profile Management */}
        <Route path="dashboard/update_profile" element={<Profile />} />


    </Route>
  )
}

export default AdminRoute