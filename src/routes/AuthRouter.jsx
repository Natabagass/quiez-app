import { Navigate, Outlet } from "react-router";

export default function AuthRoute() {
    if(localStorage.getItem('auth'))
        return <Navigate to='/dashboard'/>

    return <Outlet/>
}