import { BasicButton, BasicInput } from "../../../components"
import { facebook, google, pazadark} from "../../../assets"
import { useState } from "react";
export default function Login(){
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
        console.log(values)
    }
    return <div className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden ">
    <div className="w-full absolute top-0 flex justify-between p-3">
    <img src={pazadark} alt="pazalogo" className="w-36 object-contain" />
    <BasicButton title="Sign up"/>
    </div>
    <div className="flex flex-col text-center items-center justify-center space-y-2 mt-8">
    <p className="font-bold text-xl">How are you planning to use Paza?</p>
    <p className="text-sm text-zinc-600 font-bold">How are you planning to use Paza? We’ll fit the experience to your needs.</p> 
    <p className="text-sm text-zinc-600 font-bold"> Don’t worry, you’ll be able to change this later on</p>
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6 pt-4 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
     <BasicInput type="email" name="email" onChange={handleChange} required placeholder="Email Address" start="bi bi-envelope text-white"/>
     <BasicInput name="password" onChange={handleChange}  show={()=>setVisible(!visible)} type={visible ? "text" : "password"} required placeholder="Password" start="bi bi-search text-white" end={`${visible ? 'bi bi-eye' :'bi bi-eye-slash' }  text-white`}/>
     <p className="w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3 text-sm text-left text-zinc-600 cursor-pointer font-bold">Forgot password?</p>
     <BasicButton title="Log in" width="w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3"/>
    </form>
    <div className="grid grid-cols-3 gap-8 pt-4 cursor-pointer">
        <img src={google} alt="google" className="h-6 w-6 object-contain"/>
        <img src={facebook} alt="facebook" className="h-6 w-6 object-contain"/>
        <i className="bi bi-twitter-x text-lg"></i>
    </div>
    </div>
    </div>
}