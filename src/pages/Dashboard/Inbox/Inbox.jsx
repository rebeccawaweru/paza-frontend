import { useState } from "react";
import { BasicButton, BasicInput, BasicLabel, SideBar } from "../../../components";
import { Dashboard } from "../../../layouts";
import { Avatar, Grid } from "@mui/material";
export default function Inbox(){
    const [send, setSend] = useState(false)
    return <Dashboard sidebar={<SideBar/>}>
    <Grid item xs={10} sm={10}>
    <div className="p-4 space-y-6 tracking-wide text-sm relative">
     <div className="flex justify-between">
     <p>Messages</p>
     {!send && <BasicButton handleClick={()=>setSend(true)} title="+ New Message"/>}
     </div>
     {!send && 
     <div className="flex items-center space-x-4">
     <Avatar/>
     <div className="w-full border border-zinc-400 h-20 p-4 space-y-2">
        <p className="font-semibold">Rebecca Waweru</p>
        <p className="text-zinc-400">Message content here.....</p>
     </div>
     </div>}
     
     {send && <>
        <div>
     <BasicLabel title="Send To"/>
     <BasicInput name="to" custom="w-full grey" end="bi bi-plus text-white"/>
     </div>
 
    <BasicInput name="message" custom="w-full grey" multiline rows={4} placeholder="Write a message"/>
    <div className="flex space-x-8">
        <BasicButton title="Send"/>
        <button onClick={()=>setSend(false)}>Cancel</button>
    </div>
     </>}
   
    </div>
    </Grid>
    </Dashboard>
}