import AuthWrapper from "../../../layouts/AuthWrapper";
import { IconButton } from "../../../components";
import AccountBtn from "./components/AccountBtn";
import { useNavigate } from "react-router-dom";
export default function AccountType(){
    const navigate = useNavigate()
    return <AuthWrapper>
    <div className="flex flex-col text-center items-center justify-center space-y-6 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0 ">
    <div className="space-y-2">
    <p className="font-bold text-xl">Please Select an Account Type</p>
    <p className="text-sm text-zinc-600 font-bold">How are you planning to use Paza? We’ll fit the experience to your needs.</p> 
    <p className="text-sm text-zinc-600 font-bold"> Don’t worry, you’ll be able to change this later on</p>
    </div>
    <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 flex space-x-2 ">
       <AccountBtn title="I'm Brand" caption="Companies & Groups" border="border-zinc-600"/>
       <AccountBtn title="I'm a Creator" caption="Individuals & Collectives" border="border-orange-500"/>
    </div>
    <IconButton handleClick={()=>navigate('/creator')} custom="orange font-bold hover:bg-white" title="Lets go" icon={<i className="bi bi-arrow-right-short mx-2"></i>}/>
    <IconButton custom="border border-orange-500 text-white hover:bg-white hover:text-black" title="Proceed if neither" icon={<i className="bi bi-arrow-right-short mx-3"></i>}/> 
    </div>
    </AuthWrapper>
}