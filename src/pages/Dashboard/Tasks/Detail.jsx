import { Dashboard } from "../../../layouts"
import { GroupAvatars, SideBar } from "../../../components"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import client from "../../../api/client";
import { useNavigate, useParams } from "react-router-dom";
export default function Detail(){
    const navigate = useNavigate()
    const [values, setValues] = useState({})
    const token = localStorage.getItem('token')
    const {id} = useParams()
    async function getTask(){
        const response = await client.get(`/tasks/${id}`,
            { headers: { Authorization: `${token}` } }
        );
        setValues(response.data)
    }
    useEffect(()=>{
     getTask()
    },[id])
    return <Dashboard sidebar={<SideBar/>}>
    <Grid item xs={10} sm={10}>
    <div className="p-4 space-y-6 text-sm">
    <div className="flex justify-between">
    <h2 className="font-bold text-2xl">{values.task}</h2>
    <i className="bi bi-x-lg cursor-pointer" onClick={()=>navigate('/tasks')}></i>
    </div>
    <p className="text-zinc-400">Status: <span className={`${values.status === 'In Progress' ? 'bg-orange-700' : values.status === 'Completed' ? 'bg-green-500 ' : 'bg-black'} text-white text-sm mx-2 p-2`}>{values.status}</span></p>
    <p className="text-zinc-400">Milestone: </p>
    <div className="flex space-x-8">
    <p className="text-zinc-400">Budget: Ksh. {values.budget && values.budget.toLocaleString()} </p>
    <p className="text-zinc-400">Spent: </p>
    </div>
    <div className="flex space-x-8">
    <p className="text-zinc-400">Start Date: {values.start}</p>
    <p className="text-zinc-400">End Date: {values.due}</p>
    </div>
    <p className="text-zinc-400">Priority: </p>
    <p className="text-zinc-400">Labels: </p>
    <div className="flex w-1/2 justify-between">
    <p className="text-zinc-400">Created by: </p>
    <p className="text-zinc-400 flex items-center"><span className="mx-2">Teams:</span> <GroupAvatars/></p>
    </div>
    <div>
    <p className="text-zinc-200 font-bold mb-2">Description </p>
    <p className="text-zinc-400 text-semibold">{values.description}</p>
    </div>

    <p className="text-zinc-200 font-semibold">Attachments: </p>
    <div className="border border-zinc-500 rounded-md h-24 w-3/4"></div>
    <div className="flex space-x-8 border-b border-zinc-500 pb-2 w-3/4">
        <p>Comments</p>
        <p>Activity</p>
        <p>To-Do Lists</p>
        <p>Milestones</p>
    </div>
    </div>
   </Grid>
   </Dashboard>
}