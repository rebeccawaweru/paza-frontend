import { Link, useLocation } from "react-router-dom"
import { pazadark, profile } from "../../assets"
import { Avatar } from "@mui/material"
import { useContext } from "react";
import { DashContext } from "../../layouts/Dashboard";
export default function NavBar(){
    const location = useLocation();
    const {user} = useContext(DashContext)
    const account = JSON.parse(localStorage.getItem('account'))
    console.log(account.type)
    const menu = [
        {id:1, title:"Profile", path:`${account.type === 'Creator' ? '/creator/overview' : '/overview'}`},
        {id:2, title:"Job Board"},
        {id:3, title:"Showcase"},
        {id:3, title:"Dashboard", path:"/overview"}
    ]
    return <nav className="flex items-center justify-between text-white px-4 py-3 text-sm border-b border-zinc-800">
    <img src={pazadark} alt="pazalogo" className="w-36 object-contain" />
    <div className="hidden 2xl:flex xl:flex lg:flex md:hidden justify-center space-x-8 2xl:space-x-24 cursor-pointer text-zinc-300 font-bold">
    {menu.map((item)=>{
        return <Link to={item.path} key={item.id} className={`${location.pathname === item.path ? 'text-orange-700':null} hover:scale-90 hover:text-orange-700`}>{item.title}</Link>
    })}
    </div>
    <div className="hidden 2xl:flex xl:flex lg:flex md:flex items-center space-x-4 2xl:space-x-8 cursor-pointer ">
    <i className="bi bi-search"></i>
    <i className="bi bi-chat-dots-fill"></i>
    <i className="bi bi-bell-fill"></i>
    <i className="bi bi-gear"></i>
    <Avatar src={profile} alt="profile" variant="rounded" sx={{border:"2px solid #FB5607",borderStyle:"double", width: 30, height: 26}}/> 
    <p className="text-zinc-300 font-semibold">{user.firstname} {user.lastname}</p>
    <i className="bi bi-caret-down-fill text-orange-700 text-xs"></i>
    </div>
    </nav>
}