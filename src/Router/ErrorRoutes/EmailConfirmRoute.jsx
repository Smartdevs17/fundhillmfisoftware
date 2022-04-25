import { Route } from "react-router-dom";

// LAYOUTS

// PAGES
import {

    EmailConfirm
  } from  "../../pages/admin/auth";


function EmailConfirmRoute() {
    return (
        <Route path="conf_email" element={<EmailConfirm />} /> 
      );
}

export default EmailConfirmRoute