import { Navigate,Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const ProtectedRoute = () => {
     const {token,isLoggedOut} = useAuthStore();

     if(!token){
         if (isLoggedOut)  return <Navigate to="/"/>;

         return <Navigate to="/signin"/>
     }
     return <Outlet/>
}

export default ProtectedRoute