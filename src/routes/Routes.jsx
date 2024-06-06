import { Route, Routes } from "react-router-dom";
import { Signup, Login } from "../pages";
export default function NavigationRoutes(){
    return <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
}