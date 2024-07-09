import { BasicInput, CustomSidebar } from "../../components";
import { Dashboard } from "../../layouts";
import { Card } from "./components";
import { Grid } from "@mui/material";
import { useContext, useState } from "react";
import { Bio, Feed } from "./sections";
import { DashContext } from "../../context/AuthContext";
export default function Profile(){
    const [tab,setTab] = useState('feed')
    const {account} = useContext(DashContext)
    
    return <Dashboard sidebar={<CustomSidebar/>}>
    <Grid item xs={12} sm={8} lg={9} sx={{padding:2}}>
        <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between items-center mb-4">
        <div className="block 2xl:flex xl:flex lg:flex md:flex">
        <p className="text-2xl"><span className="font-bold">Hi, {account.creatorname || account.company} </span></p>
        <p className="text-sm grey p-2 my-2 2xl:my-0 xl:my-0 lg:my-0 md:my-0 mx-0 2xl:mx-2 xl:mx-2 lg:mx-2 md:mx-2  tracking-wide cursor-pointer hover:bg-orange-700">+ Invite Members</p>
        </div>
        <p className="border hidden 2xl:block xl:block lg:block md:block border-orange-700 text-orange-700 text-xs p-2 cursor-pointer">+ New Project</p>
        </div>
    <div className="grey w-full grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 gap-2 text-zinc-400 rounded-md p-4">
       <div className="font-bold text-sm space-y-4 col-span-2">
       <p>Welcome back to</p>
        <p className="text-2xl text-white">Paza</p>
        <p>You now have access to our list of innovative jobs and thriving eco system of creators and brands. What are you gonna do today?</p>
        <BasicInput custom="bg-black" placeholder="type here..." phweight={100} end="bi bi-copy text-orange-700 font-bold"/>
        <p className="text-sm">3 down 7 more to go for you to get a month free!</p>
       </div>
       <Card title="Find your next job" caption="View all jobs"/>
       <Card title="Open Projects" caption="View all projects"/>
       <Card title="Open Campaigns" caption="Explore creators"/>
    </div>
    <div className="space-y-4 mt-4">
    <div className="flex space-x-12 cursor-pointer text-sm font-bold">
        <p onClick={()=>setTab('feed')} className={`${tab === 'feed' ? 'text-orange-700 border-b border-orange-700' : 'text-zinc-500'} px-4 py-2`}>Feed</p>
        <p onClick={()=>setTab('bio')} className={`${tab === 'bio' ? 'text-orange-700 border-b border-orange-700' : 'text-zinc-500'} px-4 py-2`}>Bio and Info</p>
        <p onClick={()=>setTab('works')} className={`${tab === 'works' ? 'text-orange-700 border-b border-orange-700' : 'text-zinc-500'} px-4 py-2`}>Works</p>
     </div>
     {tab === 'feed' &&  <Feed/>}
     {tab === 'bio' && <Bio/>}
    </div>
    </Grid>
    </Dashboard>
}