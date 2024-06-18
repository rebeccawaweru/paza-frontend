import { BasicButton, BasicInput } from "../../../components"
import { AuthWrapper } from "../../../layouts";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import client from "../../../api/client";
import { toast, ToastContainer } from "react-toastify";
export default function ForgotPassword(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/resetpassword')
    }
    return <AuthWrapper navbtn={<BasicButton custom="px-8 text-sm" title="Sign up" handleClick={() => navigate('/signup')}/>}>
    <ToastContainer theme="dark"/>
    <div className="flex flex-col text-center items-center justify-center space-y-2 mt-8">
    <p className="font-bold text-xl">Forgot your password?</p>
    <p className="text-sm text-zinc-600 font-bold">Please enter your email to receive further instructions</p> 
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-4 pt-2 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
     <BasicInput type="email" name="email" onChange={(e)=>setEmail(e.target.value)} required placeholder="Email Address" start="bi bi-envelope text-white"/>
     <BasicButton title="Submit" custom="w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3 text-lg"/>
    </form>
    </div>
    </AuthWrapper>
}