import AuthWrapper from "../../../../layouts/AuthWrapper";
import { BasicButton, IconButton } from "../../../../components";
import { Step1, Step2, Step3 } from "./components";
import { reducer, initialState } from "../../../../utils/helpers";
import { createContext, useReducer, useState } from "react";
import client from "../../../../api/client";
export const UserFormContext = createContext(null)
export default function Creator(){
    const [state, dispatch] = useReducer(reducer,initialState)
    const [values,setValues] = useState({
        creatorname:"",
        about:"",
        experience:"",
        main:"",
        followers:"",
        instagram:"",
        tiktok:"",
        twitter:"",
        youtube:"",
        linkedin:"",
        facebook:"",
        milestones:"",
    })
    const handleChange = (e) => {
       setValues(prev => ({...prev, [e.target.name]:e.target.value}))
    }
  
    const [sub,setSub] = useState([])
    const [category,setCategory] = useState('')
    const [social,setSocial] = useState('')
    const [corre, setCore] = useState([])
    const [subcore,setSubCore] = useState([])
    const [topics,setTopics] = useState([])
    const [collabs,setCollabs] = useState([])

    const handleUpdate = async()=>{
        const user = localStorage.getItem('user')
        await client.put(`/user/${user._id}`, {
            account:{topic:topics,collab:collabs,subCore:subcore,core:corre,main:social,cat:category,subcat:sub,values}
        })
    }
   return <AuthWrapper>
    <UserFormContext.Provider value={{values,handleChange,sub,setSub,category,setCategory,social,setSocial,corre,setCore,subcore,setSubCore,topics,setTopics,collabs,setCollabs}}>
    <div className="flex flex-col mt-24 pb-8 items-center justify-center space-y-6 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0 ">
    <div className="space-y-2 text-center">
    <p className="text-xl">Please Fill Up These Details</p>
    <p className="text-sm text-zinc-600 font-bold">How are you planning to use Paza? We’ll fit the experience to your needs.</p> 
    <p className="text-sm text-zinc-600 font-bold"> Don’t worry, you’ll be able to change this later on</p>
    </div>
    <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 space-y-4">
    {state.step === 1 && <Step1/>}
    {state.step === 2 && <Step2/>}
    {state.step === 3 && <Step3/>}
    </div>
    {state.step > 1 ? <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 flex justify-between">
        <IconButton handleClick={()=>dispatch({type:"Prev"})} custom="grey font-bold text-zinc-400 hover:bg-white hover:text-black" title="Previous"/>
        {state.step < 3 ?
        <IconButton handleClick={()=>dispatch({type:"Next"})} custom="orange font-bold text-black hover:bg-white" title="Next"/>
          : <IconButton handleClick={handleUpdate} custom="orange font-bold text-black hover:bg-white" title="Save"/>
}
        </div>
    : <IconButton handleClick={()=>dispatch({type:"Next"})} custom="orange font-bold text-black hover:bg-white" title="Next"/>
    }

    </div>
    </UserFormContext.Provider>
    </AuthWrapper>
}