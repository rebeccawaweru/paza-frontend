import { BasicButton, SideBar } from "../../../components";
import { Dashboard } from "../../../layouts";
import { Grid } from "@mui/material";
import { useState } from "react";
import { TaskCard } from "./components";
import { useNavigate } from "react-router-dom";
export default function Tasks(){
    const [tab, setTab] = useState('tasks')
    const navigate = useNavigate()
    return <Dashboard sidebar={<SideBar/>}>
           <Grid item xs={10} sm={10}>
            <div className="p-4 space-y-8">
            <div className="flex justify-between">
            <h2 className="font-bold text-2xl">Tasks</h2>
            <BasicButton handleClick={()=>navigate('/newtask')} title="+ Create Task" custom="text-white hover:text-black"/>
            </div>
            <div className="flex space-x-12 cursor-pointer text-sm">
                <p className={`${tab === 'tasks' ? 'text-orange-700' : 'text-zinc-300'}`}><i className="bi bi-grid mr-2"></i>Tasks</p>
                <p className={`${tab === 'calender' ? 'text-orange-700' : 'text-zinc-300'}`}><i className="bi bi-calendar mr-2"></i>Calender</p>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-4">
            <div className="space-y-4">
            <p className="font-semibold text-xl">Under review <span className="rounded-full grey py-2 px-4 mx-8">6</span></p>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              </div>
              <div className="space-y-4">
              <p className="font-semibold text-xl">In Progress <span className="rounded-full grey py-2 px-4 mx-8">6</span></p>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              </div>
              <div className="space-y-4">
              <p className="font-semibold text-xl">Completed<span className="rounded-full grey py-2 px-4 mx-8">6</span></p>
              <TaskCard/>
              <TaskCard/>
              <TaskCard/>
              </div>
            </div>

            </div>

           </Grid>
    </Dashboard>
}