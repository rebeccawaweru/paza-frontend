import AuthWrapper from "../../../../layouts/AuthWrapper";
import { IconButton } from "../../../../components";
import { Step1, Step2, Step3, Step4 } from "./components";
import { reducer, initialState } from "../../../../utils/helpers";
import { useReducer } from "react";
export default function Brand(){
    const options = ['Art','Design','Fashion & Wearables', 'Film','Music','Photography','Other']
    const [state, dispatch] = useReducer(reducer,initialState)
    return <AuthWrapper>
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
    {state.step === 4 && <Step4/>}
    </div>
    <IconButton handleClick={()=>dispatch({type:"Next"})} custom="orange font-semibold text-black hover:bg-white" title="Next" icon={<i className="bi bi-arrow-right-short mx-2"></i>}/>
    </div>
    </AuthWrapper>
}