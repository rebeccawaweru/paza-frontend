import { BasicButton, BasicInput } from "../../../components"
import { AuthWrapper } from "../../../layouts";
import { useState } from "react";
import {useNavigate,Link} from 'react-router-dom'
import client from "../../../api/client";
import { toast, ToastContainer } from "react-toastify";

export default function Login(){
    const navigate = useNavigate()
    const [visible,setVisible] = useState(false);
    const [values,setValues] = useState({
        email:"",
        password:""
    });
    const handleChange = (e) => {
       setValues((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        client.post('/auth/login', values).then((response) => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            const account = response.data.user.account || null
            if (account === null || Object.keys(account).length === 0) {
                navigate('/accountype')
            } else {
                navigate('/overview')
            }
         
        }).catch((err) => {
            toast.error(err.response.data.message || err.response)
        })
    }
    return <AuthWrapper navbtn={<BasicButton custom="px-8 text-sm" title="Sign up" handleClick={() => navigate('/signup')}/>}>
    <ToastContainer theme="dark"/>
    <div className="flex flex-col text-center items-center justify-center space-y-2 mt-8">
    <p className="font-bold text-xl">How are you planning to use Paza?</p>
    <p className="text-sm text-zinc-600 font-bold">How are you planning to use Paza? We’ll fit the experience to your needs.</p> 
    <p className="text-sm text-zinc-600 font-bold"> Don’t worry, you’ll be able to change this later on</p>
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-4 pt-4 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
     <BasicInput type="email" name="email" onChange={handleChange} required placeholder="Email Address" start="bi bi-envelope text-white"/>
     <BasicInput name="password" onChange={handleChange}  show={()=>setVisible(!visible)} type={visible ? "text" : "password"} required placeholder="Password" start="bi bi-search text-white" end={`${visible ? 'bi bi-eye' :'bi bi-eye-slash' }  text-white`}/>
     <Link to="/forgotpassword" className="w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3 text-sm text-left text-zinc-600 cursor-pointer font-bold">Forgot password?</Link>
     <BasicButton title="Log in" custom="w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3 text-lg"/>
    </form>
    {/* <div className="grid grid-cols-3 gap-8 pt-4 cursor-pointer">
        <img src={google} alt="google" className="h-6 w-6 object-contain"/>
        <img src={facebook} alt="facebook" className="h-6 w-6 object-contain"/>
        <i className="bi bi-twitter-x text-lg"></i>
    </div> */}
    </div>
    </AuthWrapper>
}