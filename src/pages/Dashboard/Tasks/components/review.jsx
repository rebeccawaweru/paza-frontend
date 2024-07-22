import { DashContext } from "../../../../context/AuthContext"
import { useContext } from "react"
export default function Review(props){
    const {account, user} = useContext(DashContext)
    const edit = props.addedby === (account.creatorname || account.company || user.email)
    return  <div className="flex justify-between border border-zinc-700 p-4 relative">
        {props.permission && <div className="absolute right-2 top-2">
        {props.status === 'Accepted' ? <i className="bi bi-check-circle-fill  text-green-500"></i> : props.status === 'Rejected' ? <i className="bi bi-x-circle-fill  text-red-500"></i> : 'Pending...' }
        </div>}
      
    <div className="space-y-4">
    <p className="text-white font-semibold text-lg">{props.title}</p>
      <p>{props.desc}</p>
      <div className="flex space-x-2">
      <p>Uploaded 2 files</p>
      <p className="text-orange-700 underline cursor-pointer">View files</p>
      </div>
    </div>
    {edit &&  <p>{props.status}</p>}
   
    {props.permission &&
    <div className="space-x-2 flex items-center">
     <button disabled={props.status === 'Accepted'} onClick={props.accept} className="bg-green-700 px-4 py-2 text-white hover:scale-90 disabled:opacity-50 disabled:bg-zinc-800 disabled:cursor-not-allowed rounded-md font-bold">Accept</button>
    <button disabled={props.status === 'Rejected'} onClick={props.reject} className="border border-red-500 px-4 py-2 hover:scale-90 disabled:opacity-50 disabled:bg-zinc-800 disabled:cursor-not-allowed rounded-md text-red-500 font-bold" >Reject</button>
    </div>}
    {edit &&
    <div className="flex space-x-2">
                     <i className="bi bi-pen-fill text-green-500" ></i>
                     <i className="bi bi-trash-fill text-red-500"></i>
    </div>}
  </div>
}