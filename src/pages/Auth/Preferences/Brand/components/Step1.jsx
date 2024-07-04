import AccountBtn from "../../components/AccountBtn"
import { useNavigate } from "react-router-dom"
export default function Step1({dispatch}){
    const navigate = useNavigate()
    return <div className="w-full flex flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap gap-4">
            <AccountBtn onClick={()=>dispatch({type:"Next"})} title="Create Brand Account" caption="Individuals & Collectives" border="border-orange-500"/>
            <AccountBtn onClick={()=>navigate('/join')} title="Join Existing Brand Account" caption="Companies & Groups" border="border-zinc-600"/>
    </div>
}