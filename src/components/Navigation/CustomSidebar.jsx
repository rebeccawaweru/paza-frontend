import { Avatar, Grid } from "@mui/material";
import { Card, Skill } from "./components";
import { useContext } from "react";
import { DashContext } from "../../layouts/Dashboard";
export default function CustomSidebar(){
  const {user} = useContext(DashContext)
  const skills = ['Videography','Content Creation', 'Beauty']
    return <Grid item xs={12} sm={4} lg={3}><div className="space-y-2 flex flex-col items-center p-2 text-sm">
    <Avatar src={user.account.avatar} sx={{ width: 56, height: 56 }}/>
    <p className="font-semibold">{user.firstname} {user.lastname}</p>
    <p>Category</p>
    <div className="grey w-full px-4 py-8 flex flex-col items-start text-center space-y-4 rounded-md">
    <div className="w-full bg-zinc-400 h-2 rounded-md self-center">
    <div className="bg-orange-500 w-1/4 h-full rounded-md"></div>
    </div>
      <p className="font-bold self-center">Profile 30% complete</p>
      <p className="text-orange-500 self-center font-bold cursor-pointer">Edit Profile</p>
      <p className="font-semibold">Skills</p>
      <div className="block 2xl:flex xl:flex lg:flex md:block w-full justify-between items-center cursor-pointer overflow-hidden relative">
      {skills.map((skill)=>{
        return <Skill key={skill} skill={skill}/>
      })}
      <div className="rounded-full h-6 w-6 text-center border border-zinc-500 hover:bg-orange-500 flex items-center justify-center text-xs absolute right-0 grey">&gt;</div>
      </div>
      <div className="grid grid-cols-1 gap-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 w-full">
      <Card title="Availability" caption="Fulltime"/>
      <Card title="Rates (Ksh)" caption="30k - 50k"/>
      <Card title="City" caption={user.city}/>
      </div>
    </div>
    <div className="grey w-full h-full p-4 rounded-md">
    <p className="font-bold text-lg">ACTIVITY FEED</p>
    </div>

    </div>
    </Grid>
}