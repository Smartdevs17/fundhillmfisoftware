import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import AuthRoutes from "./AuthRoutes";
import HomeRoute from "./HomeRoute/HomeRoute"
import ErrorRoutes from "./ErrorRoutes/ErrorRoutes";
import AdminRoute from "./AdminRoute/AdminRoute";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

      {AdminRoute()}
      {HomeRoute()}
      {AuthRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
