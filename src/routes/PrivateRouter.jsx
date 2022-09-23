import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
    if(localStorage.getItem('auth'))
        return <Outlet/>
        return <Navigate to='/'/>
}