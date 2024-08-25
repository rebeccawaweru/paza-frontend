import { BasicButton, SideBar } from "../../../components";
import { Dashboard } from "../../../layouts";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { TaskContent } from "./components";
import { useNavigate } from "react-router-dom";
import client from "../../../api/client";
export default function Tasks(){
    const [tab, setTab] = useState('tasks')
    const token = localStorage.getItem('token')
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
      client.get('/tasks', { headers: { Authorization: `${token}` } }).then((response)=>{
        setData(response.data)
      })
    },[data])
    return <Dashboard sidebar={<SideBar/>}>
           <Grid item xs={10} sm={10}>
            <div className="w-full">
        
            <div className="p-4 space-y-6">
            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-between">
            <h2 className="font-bold text-2xl">Tasks</h2>
            <BasicButton handleClick={()=>navigate('/newtask')} title="+ Create Task" custom="text-white hover:text-black"/>
            </div>
            <div className="flex space-x-12 cursor-pointer text-sm">
                <p className={`${tab === 'tasks' ? 'text-orange-700' : 'text-zinc-300'}`}><i className="bi bi-grid mr-2"></i>Tasks</p>
                <p className={`${tab === 'calender' ? 'text-orange-700' : 'text-zinc-300'}`}><i className="bi bi-calendar mr-2"></i>Calender</p>
            </div>
             <TaskContent data={data} display="block"/>
            </div>
            </div>
           </Grid>
    </Dashboard>
}