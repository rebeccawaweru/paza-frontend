import { BasicButton, SideBar } from "../../../components";
import { Dashboard } from "../../../layouts";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Detail, TaskCard } from "./components";
import { useNavigate } from "react-router-dom";
import client from "../../../api/client";
export default function Tasks(){
    const [tab, setTab] = useState('tasks')
    const token = localStorage.getItem('token')
    const [data, setData] = useState([])
    const [view, setView] = useState(false)
    const [item,setItem] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
      client.get('/tasks', { headers: { Authorization: `${token}` } }).then((response)=>{
        setData(response.data)
      })
    },[data])
    return <Dashboard sidebar={<SideBar/>}>
           <Grid item xs={10} sm={10}>
            <div className="w-full">
            <Detail view={view} close={()=>setView(false)} {...item}/>
            <div className="p-4 space-y-6">
            <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-between">
            <h2 className="font-bold text-2xl">Tasks</h2>
            <BasicButton handleClick={()=>navigate('/newtask')} title="+ Create Task" custom="text-white hover:text-black"/>
            </div>
            <div className="flex space-x-12 cursor-pointer text-sm">
                <p className={`${tab === 'tasks' ? 'text-orange-700' : 'text-zinc-300'}`}><i className="bi bi-grid mr-2"></i>Tasks</p>
                <p className={`${tab === 'calender' ? 'text-orange-700' : 'text-zinc-300'}`}><i className="bi bi-calendar mr-2"></i>Calender</p>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-4">
            <div className="space-y-4">
            <p className="font-semibold text-lg text-zinc-300">Under review <span className="rounded-full grey py-2 px-4 mx-8">{data && data.length > 0 && data.filter(item=>item.status === 'Under review').length}</span></p>
              {data && data.length > 0 && data.filter(item => item.status === 'Under review').map((item) => {
                return  <TaskCard key={item._id} id={item._id} task={item.task} status={item.status} start={item.start} due={item.due} handleView={()=>{setView(true); setItem(item)}}/>
              })}
              </div>
              <div className="space-y-4">
              <p className="font-semibold text-lg text-zinc-300">In Progress <span className="rounded-full grey py-2 px-4 mx-8">{data && data.length > 0 && data.filter(item=>item.status === 'In Progress').length}</span></p>
              {data && data.length > 0 && data.filter(item => item.status === 'In Progress').map((item) => {
                 return  <TaskCard key={item._id} id={item._id} task={item.task} status={item.status} start={item.start} due={item.due} handleView={()=>{setView(true); setItem(item)}}/>
              })}
              </div>
              <div className="space-y-4">
              <p className="font-semibold text-lg text-zinc-300">Completed<span className="rounded-full grey py-2 px-4 mx-8">{data && data.length > 0 && data.filter(item=>item.status === 'Completed').length}</span></p>
              {data && data.length > 0 && data.filter(item => item.status === 'Completed').map((item) => {
                return  <TaskCard key={item._id} id={item._id} task={item.task} status={item.status} start={item.start} due={item.due} handleView={()=>{setView(true); setItem(item)}}/>

              })}
              </div>
            </div>
            </div>
            </div>
           </Grid>
    </Dashboard>
}