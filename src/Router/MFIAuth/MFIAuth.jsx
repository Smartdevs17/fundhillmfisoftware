import {Route} from "react-router-dom";


// LAYOUTS
import { MFILayout } from "../../layouts"

// PAGES
import {
  Login,
  Register,
} from  "../../pages/mfi/auth";


function MFIAuth() {
    return (
        <Route path="auth" element={<MFILayout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        
      );
}

export default MFIAuth