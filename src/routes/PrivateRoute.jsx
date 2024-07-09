import { Navigate, Outlet } from "react-router-dom"
import AuthProvider from "../context/AuthContext"
const PrivateRoute = () => {
    const token = localStorage.getItem('token')
    if (!token) {
       return <Navigate to="/" replace/>
    }
    return <AuthProvider><Outlet/></AuthProvider>
}

export default PrivateRoute