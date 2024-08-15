import NavBtn from "./NavBtn"
import Btn from "./Btn"
import { Grid } from "@mui/material"
import { useLocation } from "react-router-dom"
export default function SideBar(){
  const location = useLocation()
    return  <Grid item xs={2} sm={2} position="relative" sx={{borderRight:"1px solid #221E1C",padding:2}}>
    <div className="space-y-4">
      <p className="text-zinc-500 text-xs font-bold">MAIN</p>
      <NavBtn icon="bi bi-grid-1x2-fill" name="overview" title="Overview" path="/overview"/>
      <NavBtn icon="bi bi-inbox-fill" title="Inbox"/>
      <NavBtn icon="bi bi-briefcase-fill" name="task" title="Tasks" path="/tasks"/>
      <NavBtn icon="bi bi-megaphone-fill" title="Campaigns" name="campaign" path="/campaigns"/>
      <NavBtn icon="bi bi-credit-card" title="Payments"/>
      <div className="hidden 2xl:flex xl:flex lg:flex md:flex items-center justify-between text-xs font-bold p-2">
        <p className="text-zinc-500 ">YOUR TEAMS</p>
        <i className="bi bi-plus-lg"></i>
      </div>
      <Btn title="Team1"/>
      <Btn title="Team2"/>
      </div>
      <div className="absolute bottom-0">
      <NavBtn icon="bi bi-plus-lg" title="Invite members"/>
      <NavBtn icon="bi-question-circle-fill" title="Help & Support"/>
      </div>
   </Grid>
}