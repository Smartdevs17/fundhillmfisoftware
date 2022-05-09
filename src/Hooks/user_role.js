import { ReactElement,useContext } from "react";
import { Navigate } from "react-router";
import {Context} from ".././context/Context";

const UserRole = ({children: ReactElement}) => {
    const {user} = useContext(Context);

    const isManager = user?.user_role === "ADMIN";
    const isAgent = user?.user_role === "AGENT";
    const isTellar = user?.user_role === "TELLAR";

    if(isManager) window.location.href = "/mfi/dashboard";
    else if(isAgent) window.location.href = "/staff/dashboard"
    else if(isTellar) window.location.href = "/tellar/dashboard"
    
    return isManager ? (
        children
    ) : (
        <Navigate to="/admin/dashboard" replace={true} state={{ path: '/admin/dashboard' }} />
    )

}

export default UserRole;
