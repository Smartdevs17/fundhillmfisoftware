import { Route } from "react-router-dom";

// LAYOUTS
import { StaffAuthLayout } from "../../layouts";
import {Login,Register} from "../../pages/staff/auth"

function StaffAuthRoute() {
    return (
        <Route path="auth/staff" element={<StaffAuthLayout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        
      );
}

export default StaffAuthRoute