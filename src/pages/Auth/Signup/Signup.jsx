import { Radio, FormControlLabel, RadioGroup } from "@mui/material";
import { BasicButton, BasicInput } from "../../../components"
import { AuthWrapper } from "../../../layouts";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import client from "../../../api/client";
import { ToastContainer, toast } from 'react-toastify';
export default function Signup(){
    const radiocls = {
        color: "gray",
        '&.Mui-checked': {
          color: "#FB5607",
        },
      }
    const navigate = useNavigate()
    const [visible,setVisible] = useState(false);
    const [confirmpassword,setConfirmPassword] = useState('')
    const [values,setValues] = useState({
        firstname:"",
        lastname:"",
        email:"",
        birthday:"",
        gender:"Female",
        phone:"",
        city:"",
        password:""
    });
    const handleChange = (e) => {
       setValues((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (confirmpassword !== values.password) {
            toast.error('Passwords do not match!')
        } else {
            client.post('/auth/signup', values).then((response) => {   
                console.log(response.data)        
                if (response.data === 'User created successfully'){
                    toast.success('Signup successful. Check email to verify account')
                    setTimeout(()=>{
                        navigate('/')
                    }, 2000)  
                }
            }).catch((err) => {
                toast.error(err.response.data.message)
            });
        }
    }
    return <AuthWrapper navbtn={<BasicButton custom="px-8 text-sm" title="Log in" handleClick={() => navigate('/')}/>}>
    <div className="flex flex-col text-center items-center justify-center space-y-2 mt-24 pb-8">
    <p className="text-xl">Please Fill Up These Details</p>
    <p className="text-zinc-600 font-bold">How are you planning to use Paza? We’ll fit the experience to your needs.</p> 
    <p className="text-zinc-600 font-bold"> Don’t worry, you’ll be able to change this later on</p>
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6 pt-2 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0">
    <ToastContainer theme="dark" />
    <BasicInput custom="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3" type="text" name="firstname" onChange={handleChange} required placeholder="First Name"/>
    <BasicInput custom="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3" type="text" name="lastname" onChange={handleChange} required placeholder="Last Name"/>
    <BasicInput custom="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3" type="email" name="email" onChange={handleChange} required placeholder="Email"/>
    <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 grid grid-cols-2 ">
    <BasicInput custom="w-full date-input" type="text"  onFocus={(e) => (e.target.type = "date")} name="birthday" onChange={handleChange} required placeholder="Birthday"/>
    <RadioGroup
        className="w-full mx-6 flex items-center justify-evenly"
        row
        aria-labelledby="demo-gender-label"
        defaultValue="Female"
        name="gender"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2 w-24 h-8" value="Male"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Male</span>}
    sx={{ alignItems: 'center'}} // ensure vertical alignment
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 w-26 h-8" value="Female"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Female</span>}
    sx={{ alignItems: 'center' }} // ensure vertical alignment
    />
    </RadioGroup>
    </div>
    <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 grid grid-cols-2 gap-2">
    <BasicInput custom="w-full" type="text" name="phone" onChange={handleChange} required placeholder="+254" start="bi bi-telephone text-white"/>
    <BasicInput custom="w-full" type="text" name="city" onChange={handleChange} required placeholder="City" start="bi bi-geo-alt-fill text-white"/>
    </div>
    <BasicInput custom="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3" name="password" onChange={handleChange}  show={()=>setVisible(!visible)} type={visible ? "text" : "password"} required placeholder="Password" start="bi bi-search text-white" end={`${visible ? 'bi bi-eye' :'bi bi-eye-slash' }  text-white`}/>
    <BasicInput custom="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3" name="confirmpassword" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}  show={()=>setVisible(!visible)} type={visible ? "text" : "password"} required placeholder="Confirm Password" start="bi bi-search text-white" end={`${visible ? 'bi bi-eye' :'bi bi-eye-slash' }  text-white`}/>
    <BasicButton title="Sign up" custom="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 text-lg"/>
    </form>
    </div>
    </AuthWrapper>
}