import Swal from "sweetalert2"
import { DashContext } from "../../../../context/AuthContext"
import { useContext } from "react"
import client from "../../../../api/client"
import { toast } from "react-toastify"
export default function Review(props){
    const {account, user} = useContext(DashContext)
    const token = localStorage.getItem("token");
    const edit = props.addedby === (account.creatorname || account.company || user.email)
    const handleDispute = () => {
      //raise dispute for rejected review
      Swal.fire({
        text:"Briefly explain why you believe the review was unfair or incorrect. Provide any relevant details or evidence to support your claim.",
        input:"textarea",
        inputPlaceholder:"Type here...",
        showCancelButton:true,
        icon:"info",
        inputValidator:(value) => {
          return new Promise((resolve) => {
            if (!value) {
              resolve("Kindly fill the required field")
            } else {
              client.post('/emails/send', {
                to:"wawerur95@gmail.com",
                subject:`Attention: Dispute raised`,
                text:value
              },{
                headers: { Authorization: `${token}` },
              }).then((res) => {
                 if(res.statusText === 'OK') {
                    resolve();
                    toast.success('Your dispute has been raised successfully')
                 } else {
                  resolve();
                  toast.error('An error occurred. Please try again later')
                 }
              })
             
            }
          })
        }
      })
    }
    return  <div className="flex items-center justify-between border border-zinc-700 p-4 relative">
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
    {edit &&  <div className={`${props.status === 'Pending' ? 'grey' : props.status === 'Accepted' ? 'bg-green-500 ' : 'bg-red-500'} w-auto h-8 px-4 py-2 rounded-full flex items-center text-white `}>{props.status}</div>}
   
    {props.permission &&
    <div className="space-x-2 flex items-center">
     <button disabled={props.status === 'Accepted'} onClick={props.accept} className="bg-green-700 px-4 py-2 text-white hover:scale-90 disabled:opacity-50 disabled:bg-zinc-800 disabled:cursor-not-allowed rounded-md font-bold">Accept</button>
    <button disabled={props.status === 'Rejected'} onClick={props.reject} className="border border-red-500 px-4 py-2 hover:scale-90 disabled:opacity-50 disabled:bg-zinc-800 disabled:cursor-not-allowed rounded-md text-red-500 font-bold" >Reject</button>
    </div>}
    {props.status === 'Rejected' && <button className="cursor-pointer font-bold text-orange-700 hover:text-white hover:scale-90" onClick={handleDispute}><i className="bi bi-exclamation-triangle mr-1"></i>Dispute</button>}
    {edit &&
    <div className="flex space-x-4 cursor-pointer">
      {props.status === 'Pending' && <i className="bi bi-pen-fill text-green-500" onClick={props.edit}></i> }
    <i className="bi bi-trash-fill text-red-500"  onClick={props.delete}></i>
    </div>}
  </div>
}