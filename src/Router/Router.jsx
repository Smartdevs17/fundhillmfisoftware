import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import HomeRoute from "./HomeRoute/HomeRoute"
import ErrorRoutes from "./ErrorRoutes/ErrorRoutes";
import AdminRoute from "./AdminRoute/AdminRoute";
import StaffRoute from "./StaffRoute/StaffRoute"
import StaffAuthRoute from "./StaffAuthRoute/StaffAuthRoute";
import MFIRoute from "./MFIRoute/MFIRoute";
// import MFIAuth from "./MFIAuth/MFIAuth";
import EmailConfirmRoute from "./ErrorRoutes/EmailConfirmRoute";
import EsusuRoute from "./EsusuRoute/EsusuRoute";
import { ContextProvider } from "../context/Context"

const Router = () => {
  return (
    <BrowserRouter  >
    <ContextProvider>
    <Routes >
      {AdminRoute()}
      {HomeRoute()}
      {AuthRoutes()}
      {/* {StaffRoute()}
      {StaffAuthRoute()}
      {MFIRoute()} */}
      {EmailConfirmRoute()}
      {EsusuRoute()}
      </Routes>    
    </ContextProvider>
     
    </BrowserRouter>
  );
};

export default Router;
