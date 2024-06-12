import { pazadark } from "../assets"
export default function AuthWrapper({children,navbtn}){
    return <div className="min-h-screen w-full flex flex-col justify-center relative overflow-hidden ">
    <div className="w-full absolute top-0 p-3 flex  justify-between">
    <img src={pazadark} alt="pazalogo" className="w-36 object-contain" />
    {navbtn}
    </div>
    {children}
    </div>
}