import { useLocation, useNavigate } from "react-router-dom"

export default function NavBtn(props){
    const navigate = useNavigate()
    const location = useLocation()
    return <button onClick={()=>navigate(props.path)} className={`${location.pathname.includes(props.name) ? 'bg-none text-orange-700 2xl:text-zinc-300 xl:text-zinc-300 lg:text-zinc-300 md:text-zinc-300  2xl:bg-orange-700 xl:bg-orange-700 lg:bg-orange-700 md:bg-orange-700': null} ${props.custom} items-center justify-center py-2 px-0 2xl:px-4 xl:px-4 lg:px-4 md:px-4 rounded-sm flex  space-x-2 hover:scale-90`}>
    <i className={props.icon}></i>
    <p className="text-sm font-bold hidden 2xl:block xl:block lg:block md:block">{props.title}</p>
    <i className={props.icon2}></i>
    </button>
}