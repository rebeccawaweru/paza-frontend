import AuthWrapper from "../../../../layouts/AuthWrapper";
import { IconButton } from "../../../../components";
import { Step1, Step2, Step3 } from "./components";
import { reducer, initialState } from "../../../../utils/helpers";
import { createContext, useReducer, useState } from "react";
export const UserFormContext = createContext(null)
export default function Creator(){
    const [state, dispatch] = useReducer(reducer,initialState)
    const [values,setValues] = useState({
        creatorname:"",
        about:""
    })
    const handleChange = (e) => {
       setValues(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    const [sub,setSub] = useState([])
    const [category,setCategory] = useState('')
   return <AuthWrapper>
    <UserFormContext.Provider value={{values,handleChange,sub,setSub,category,setCategory}}>
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
        <IconButton handleClick={()=>dispatch({type:"Next"})} custom="orange font-bold text-black hover:bg-white" title="Next"/>
    </div>
    : <IconButton handleClick={()=>dispatch({type:"Next"})} custom="orange font-bold text-black hover:bg-white" title="Next"/>
    }

    </div>
    </UserFormContext.Provider>
    </AuthWrapper>
}