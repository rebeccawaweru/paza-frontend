import { Route, Routes } from "react-router-dom";
import { Signup, Login, ForgotPassword, ResetPassword, AccountType, Creator, Brand, OverView, Profile, Join, CreateTask} from "../pages";
import PrivateRoute from "./PrivateRoute";
export default function NavigationRoutes(){
    return <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        {/* Protected Routes */}
        <Route element={<PrivateRoute/>}>
           <Route path="/accountype" element={<AccountType/>}/>
           <Route path="/creator" element={<Creator/>}/>
           <Route path="/brand" element={<Brand/>}/>
            <Route path="/join" element={<Join/>}/>
           <Route path="/overview" element={<OverView/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/newtask" element={<CreateTask/>}/>
        </Route>
    </Routes>
}