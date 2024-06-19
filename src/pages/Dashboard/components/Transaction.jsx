import { Avatar } from "@mui/material"
export default function Transaction(){
    return   <div className="flex justify-between text-sm py-4  font-semibold">
    <div className="inline-flex space-x-2 ">
    <Avatar variant="rounded" sx={{width: 50, height: 50}}/> 
       <div className="space-y-2">
       <p>Campaign Name</p>
       <p>Client Name</p>
       </div>
    </div>
       <p>13 Jan 4:32 PM</p>
       <p className="font-bold">Ksh. 72, 000</p>
   </div>
   
}