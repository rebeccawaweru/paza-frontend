import { Dashboard } from "../../../layouts"
import { BasicButton, BasicInput, BasicLabel, BasicSelect, CheckBox, GroupAvatars, SideBar } from "../../../components"
import { Grid, MenuItem } from "@mui/material"
import { useEffect, useState } from "react";
import client from "../../../api/client";
import { useNavigate, useParams } from "react-router-dom";
import { Todo, Milestone } from "./components";
import { toast, ToastContainer } from "react-toastify";
export default function Detail(){
    const [tab, setTab] = useState('Comments');
    const [add, setAdd] = useState(false)
    const [addMil, setAddMil] = useState(false)
    const [todo, setTodo] = useState({
        title:"",
        time:"",
        assignee:"",
        status:"In Progress"
    });
    const handleChange = (e) => {
       setTodo((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
    const [mile, setMile] = useState({
        title:"",
        description:"",
        budget:"",
        start:"",
        end:"",
        status:"In Progress"
    });
    const [miles, setMiles] = useState([])
    const handleChange2 = (e) => {
        setMile((prev) => ({...prev, [e.target.name]:e.target.value}))
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
        setMiles(response.data.milestones)
        setValues(response.data)
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
    const handleSave2 = (e) => {
        e.preventDefault();
        setMiles((prev) => [...prev, mile])
        setAddMil(false)
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
    {add && <form onSubmit={(e)=>{e.preventDefault(); setTodos((prev) => [...prev, todo]); setAdd(false)}}  className="space-y-4">
        <BasicInput name="title" value={todo.title} onChange={handleChange} placeholder="Title" phweight={100} required custom="w-full grey"/>
        <BasicInput name="time" value={todo.time} onChange={handleChange} type="time" required custom="w-full grey"/>
        <BasicInput name="assignee" value={todo.assignee} onChange={handleChange} type="text" placeholder="Assignee" phweight={100} required custom="w-full grey"/>
        <BasicButton title="+ Submit"/>   
     </form> }
     {!add && todos && todos.length > 0 && todos.map((item,index)=> {
          return <Todo key={index} {...item} edit={()=>{setAdd(true); setTodo(item); handleDelete(index)}} delete={()=>handleDelete(index)} complete={() => setTodos(prevTodos =>
            prevTodos.map((todo, i) => 
              i === index ? { ...todo, status: 'Completed' } : todo
            )
          )}/>
     })}
     </div>}
     {tab === 'Milestones' && <div>
        <button onClick={()=>setAddMil(true)} className="text-zinc-300 font-semibold cursor-pointer mb-4 hover:text-orange-700 hover:scale-90"> + New</button>
        {addMil ? <form onSubmit={handleSave2} className="space-y-4">
            <div>
            <BasicLabel title="Title"/>
            <BasicInput name="title" value={mile.title} onChange={handleChange2}  custom="w-full grey" required/>
            </div>
            <div>
            <BasicLabel title="Description"/> 
            <BasicInput name="description" value={mile.description} onChange={handleChange2}  custom="w-full grey" multiline rows={4} required/>
            </div>
            <div>
           <BasicLabel title="Budget (Ksh)"/>
           <BasicInput name="budget" value={mile.budget} onChange={handleChange2}  custom="w-full grey" type="number" required />
           </div>
           <div className="grid grid-cols-2 gap-2">
           <div>
           <BasicLabel title="Start Date"/>
           <BasicInput name="start" value={mile.start} onChange={handleChange2}  custom="w-full grey py-1" type="date" required />
           </div>
           <div>
           <BasicLabel title="End Date"/>
           <BasicInput name="end" value={mile.end} onChange={handleChange2}  custom="w-full grey py-1" type="date" required />
           </div>
           </div>
           <BasicSelect name="status" value={mile.status} onChange={handleChange2}  custom="w-full grey">
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
           </BasicSelect>
         
           <div className="flex justify-end items-center space-x-4 cursor-pointer my-2">
          <button onClick={()=>setAddMil(false)} className="text-zinc-300 border border-zinc-500 py-2 px-4"> Cancel</button>
          <button type="submit" className="bg-orange-700 py-2 px-4 text-black rounded-md font-bold hover:bg-white hover:scale-90">Save</button>
          </div>
        </form> : 
        <div className="w-full grid grid-cols-2 gap-2"><div className="space-y-4">
            {(miles && miles.length > 0) ? miles.map((item,index)=>{
                return <Milestone key={index} title={item.title} description={item.description}/>
            }) : <p>No milestones</p>}
      </div>
      <div className="h-auto flex flex-col justify-center grey text-sm space-y-8 cursor-pointer p-4">
        <p>In progress</p>
        <p>Start Date: </p>
        <p>End Date: </p>
        <p>description</p>
        <div>
        <p className="font-bold text-lg"><i className="bi bi-paperclip text-orange-700 rotate-20"></i>Media And Docs</p>
        <p className="text-zinc-400">16 Attached</p>
        </div>
        <div className="flex space-x-8 text-zinc-400">
            <p><i className="bi bi-cash-stack"></i> Ksh 100, 000</p>
            <p>10 creators</p>
        </div>
      </div>
      </div>
         }
  
      </div>}

    </div>
   </Grid>
   </Dashboard>
}