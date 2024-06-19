import { Route, Routes } from "react-router-dom";
import { Signup, Login, ForgotPassword, ResetPassword, AccountType, Creator, Brand} from "../pages";
export default function NavigationRoutes(){
    return <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/accountype" element={<AccountType/>}/>
        <Route path="/creator" element={<Creator/>}/>
        <Route path="/brand" element={<Brand/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
    </Routes>
}