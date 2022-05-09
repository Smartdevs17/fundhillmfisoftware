import { Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import {AdminLayout} from "../../layouts"
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import { AuthLayout } from "../../layouts"

// PAGES
import {
  Login,
  Register,
} from  "../../pages/admin/auth";

function HomeRoute() {
  return (
    <Route path="/" className="" element={<Home />} />
    // <Route path="/" >
    //     <Route path="/" className="" element={<Home />} />

    //     <Route path="auth" element={<AuthLayout />}>
    //       <Route path="login" element={<Login />}></Route>
    //       <Route path="register" element={<Register />}></Route>
    //     </Route>

    //     <Route path="admin" element={<AdminLayout />} >
    //       <Route path="dashboard" className="" element={<Dashboard />} />
    //     </Route>

    // </Route>
  )
}

export default HomeRoute

