import { useEffect, useState } from "react";
import { SideBar } from "../../../components";
import { Dashboard } from "../../../layouts";
import { Grid } from "@mui/material";
import { Content, Modal } from "./components";
import client from "../../../api/client";
import { ToastContainer } from "react-toastify";
export default function Campaigns(){
    const token = localStorage.getItem("token");
    const [open, isOpen] = useState(false);
    const [campaigns,setCampaigns] = useState([])
    useEffect(()=>{
    //get campaigns route
    client.get('/campaigns',{
        headers: { Authorization: `${token}` },
    }).then((response)=>{
       setCampaigns(response.data)
    })
    },[])
    return (
        <Dashboard sidebar={<SideBar/>}>
          <Grid item xs={10} sm={10} position="relative">
            <ToastContainer/>
          <Modal open={open} close={()=>isOpen(false)}/>
          <div className="w-full p-4 space-y-4 ">
         <h2 className="font-bold text-2xl">Campaigns</h2>
         <div className="block 2xl:flex xl:flex lg:flex md:flex sm:flex w-full justify-between">
            <div className="flex space-x-4 cursor-pointer mb-4 sm:mb-0">
                <div className="flex space-x-2 text-orange-700 font-semibold border-b border-orange-700 px-4 py-2">
                <p className={``}>All Campaigns </p>
                <div className="grey px-2 hidden 2xl:flex xl:flex lg:flex md:flex sm:flex items-center text-xs rounded-md text-zinc-300">4</div>
                </div>
                <div className="flex space-x-2 font-semibold px-4 py-2">
                <p className={`text-zinc-400`}>Recommended </p>
                <div className="grey px-2 hidden 2xl:flex xl:flex lg:flex md:flex sm:flex items-center text-xs rounded-md text-zinc-300">5</div>
                </div>
            </div>
            <button onClick={()=>isOpen(true)} className="grey text-sm p-2 cursor-pointer hover:bg-orange-700 hover:scale-90">+ New Campaign</button>
         </div>
         {campaigns.length > 0 && campaigns.map((c) => {
            return <Content key={c._id} {...c}/>
         })}
     
         </div>
         </Grid>
        </Dashboard>
    )
}