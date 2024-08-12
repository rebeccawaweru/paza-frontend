import { useState } from "react"
import { useNavigate } from "react-router-dom"
import client from "../../../../api/client";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
export default function TaskCard(props){
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const handleDelete = () => {
   Swal.fire({
    title:"Are you sure ?",
    text:"This task will be deleted",
    icon:"warning",
    showConfirmButton:true,
    showCancelButton:true,
    confirmButtonText:"Delete",
   }).then((result)=>{
      if (result.isConfirmed) {
        client.delete(`/tasks/${props.id}`, { headers: { Authorization: `${token}` } } ).then((response)=>{
         Swal.fire('Success',response.data,'success')
        })
      }
   })
  }

    return  <div key={props.key} className="grey p-4 text-sm space-y-6 text-zinc-300 rounded-md relative">
    <div className="flex space-x-2 items-center ">
    <i className="bi bi-circle"></i>
    <p className="font-semibold">{props.task}</p>
    <i className="bi bi-three-dots-vertical absolute right-2 cursor-pointer" onMouseOver={()=>setShow(true)}></i>
    <ul onMouseLeave={()=>setShow(false)} className={`absolute grey py-4 px-8 bottom-0 right-0 space-y-4 cursor-pointer ${show ? 'block' : 'hidden'}`}>
      <li onClick={()=>navigate(`/newtask?edit=${props.id}`)}>Edit</li>
      <li>Reminder</li>
      <li onClick={()=>navigate(`/taskdetails/${props.id}`)}>View Activity</li>
      {props.status === 'Completed' ? <li className="text-red-500" onClick={handleDelete}>Delete</li> : null}
    </ul>
    </div>
    <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row items-center justify-between">
    <div className={`${props.status === 'In Progress' ? 'bg-orange-700' : props.status === 'Completed' ? 'bg-green-800' : 'bg-black'} rounded-full text-xs p-2`}>{props.status}</div>
    <hr className="w-full mx-2  2xl:w-52 xl:w-32 lg:w-24 md:w-24 sm:w-48 h-2 border-none bg-green-800 rounded-md"></hr>100%
    </div>
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4  text-xs">
    <div><i className="bi bi-calendar mr-2"></i>Start date: {props.start}</div>
    <div><i className="bi bi-calendar mr-2"></i>End date: {props.due}</div>
    </div>
  </div>
}