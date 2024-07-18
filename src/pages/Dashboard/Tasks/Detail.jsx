import { Dashboard } from "../../../layouts"
import { BasicButton, BasicInput, GroupAvatars, IconButton, SideBar } from "../../../components"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import client from "../../../api/client";
import { useNavigate, useParams } from "react-router-dom";
import { Todo } from "./components";
import { toast, ToastContainer } from "react-toastify";
export default function Detail(){
    const [tab, setTab] = useState('Comments');
    const [add, setAdd] = useState(false)
    const [todo, setTodo] = useState({
        title:"",
        time:"",
        assignee:"",
        status:"In Progress"
    })
    const handleChange = (e) => {
       setTodo((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
 
    const tabs = ['Comments', 'Activity', 'To-Do Lists', 'Milestones']
    const navigate = useNavigate()
    const [values, setValues] = useState({})
    const [todos, setTodos] = useState([]);
    const token = localStorage.getItem('token')
    const {id} = useParams()
    async function getTask(){
        const response = await client.get(`/tasks/${id}`,
            { headers: { Authorization: `${token}` } }
        );
        setTodos(response.data.todos)
        setValues(response.data)
    }
    const handleEdit = (index) => {

    }
    const handleDelete = (index) => {
        setTodos((prev) => prev.filter(item => item !== todos[index]));
    }
    const handleSave = async () => {
        try {
            const response = await client.put(`/tasks/${id}`,{todos:todos}, {
                headers: { Authorization: `${token}` },
              });
            if (response.data) {
                toast.success('Changes saved!')
            } 
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
     getTask()
    },[id])
    return <Dashboard sidebar={<SideBar/>}>
    <Grid item xs={10} sm={10}>
    <ToastContainer/>
    <div className="p-4 space-y-6 text-sm">
    <div className="flex justify-between">
    <h2 className="font-bold text-2xl">{values.task}</h2>
    <i className="bi bi-x-lg cursor-pointer" onClick={()=>navigate('/tasks')}></i>
    </div>
    <p className="text-zinc-400">Status: <span className={`${values.status === 'In Progress' ? 'bg-orange-700' : values.status === 'Completed' ? 'bg-green-800 ' : 'bg-black'} text-white text-sm mx-2 p-2`}>{values.status}</span></p>
    <p className="text-zinc-400">Milestone: </p>
    <div className="flex space-x-8">
    <p className="text-zinc-400">Budget: Ksh. {values.budget && values.budget.toLocaleString()} </p>
    <p className="text-zinc-400">Spent: </p>
    </div>
    <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between w-full 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4">
    <p className="text-zinc-400">Start Date: {values.start}</p>
    <p className="text-zinc-400">End Date: {values.due}</p>
    </div>
    <p className="text-zinc-400">Priority: </p>
    <p className="text-zinc-400">Labels: </p>
    <div className="block 2xl:flex xl:flex lg:flex md:flex w-full 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 items-center  justify-between">
    <p className="text-zinc-400">Created by: <span className="font-bold text-white">{values.createdby}</span> </p>
    <p className="text-zinc-400 flex items-center"><span className="mr-2">Teams:</span> <GroupAvatars/></p>
    </div>
    <div>
    <p className="text-zinc-200 font-bold mb-2">Description </p>
    <p className="text-zinc-400 text-semibold">{values.description}</p>
    </div>

    <p className="text-zinc-200 font-semibold">Attachments: </p>
    <div className="border border-zinc-500 rounded-md h-24 w-full"></div>
    <div className="flex space-x-8 border-b border-zinc-500 pb-2 w-full">
       {tabs.map((item,index)=>{
        return <p onClick={()=>setTab(item)} className={`${tab == item ? 'text-orange-700 font-semibold' : 'text-zinc-400'} cursor-pointer`} key={index}>{item}</p>
       })}
    </div>
     {tab === 'To-Do Lists' &&
     <div className="space-y-4">
     {!add && <div className="flex justify-between">
        <p className="text-zinc-300 font-semibold cursor-pointer" onClick={()=>{setTodo({title:"",time:"",assignee:"",status:"In Progress"}); setAdd(true)}}>+ Add Item</p>
        <button onClick={handleSave} className="bg-green-700 p-2 rounded-md hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-floppy mr-2"></i>Save Changes</button>
        </div>}
    {add && <form className="space-y-4">
        <BasicInput name="title" value={todo.title} onChange={handleChange} placeholder="Title" phweight={100} required custom="w-full grey"/>
        <BasicInput name="time" value={todo.time} onChange={handleChange} type="time" required custom="w-full grey"/>
        <BasicInput name="assignee" value={todo.assignee} onChange={handleChange} type="text" placeholder="Assignee" phweight={100} required custom="w-full grey"/>
        <BasicButton handleClick={()=>{setTodos((prev) => [...prev, todo]); setAdd(false)}} title="+ Submit"/>   
     </form> }
     {!add && todos && todos.length > 0 && todos.map((item,index)=> {
          return <Todo key={index} {...item} edit={()=>{setAdd(true); setTodo(item); handleDelete(index)}} delete={()=>handleDelete(index)} complete={() => setTodos(prevTodos =>
            prevTodos.map((todo, i) => 
              i === index ? { ...todo, status: 'Completed' } : todo
            )
          )}/>
     })}
     </div>}

    </div>
   </Grid>
   </Dashboard>
}