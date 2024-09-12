import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/auth"

export const PrivateRoutes = () => {
    const [auth] = useAuth();  
    const token = auth?.token || JSON.parse(localStorage.getItem("auth"))?.token;
    return token ? <Outlet /> : <Navigate to="/login" />;
  };