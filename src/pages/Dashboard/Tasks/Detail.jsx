import { Dashboard } from "../../../layouts"
import { BasicButton, BasicInput, BasicLabel, BasicSelect, CheckBox, GroupAvatars, SideBar } from "../../../components"
import { Grid, MenuItem, LinearProgress } from "@mui/material"
import { useEffect, useState } from "react";
import client from "../../../api/client";
import { useNavigate, useParams } from "react-router-dom";
import { Todo, Milestone } from "./components";
import { toast, ToastContainer } from "react-toastify";

export default function Detail(){
    const [tab, setTab] = useState('Comments');
    const [add, setAdd] = useState(false)
    const [addMil, setAddMil] = useState(false)
    const [indx,setIndx] = useState(0)
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
    const percentage = miles.length > 0 && miles.filter((item) => item.status === 'Completed').length / miles.length * 100 || 0
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
            const response = await client.put(`/tasks/${id}`,{todos:todos, milestones:miles}, {
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
    <div className="p-4 space-y-6 text-sm text-zinc-400">
    <div className="flex justify-between">
    <h2 className="font-bold text-2xl text-white">{values.task}</h2>
    <i className="bi bi-x-lg cursor-pointer" onClick={()=>navigate('/tasks')}></i>
    </div>
    <p>Status: <span className={`${values.status === 'In Progress' ? 'bg-orange-700' : values.status === 'Completed' ? 'bg-green-800 ' : 'grey'} text-white text-sm mx-2 p-2`}>{values.status}</span></p>
    <div className="w-full flex space-x-2 items-center">
        <p>Milestone:</p> 
        <LinearProgress sx={{height:5, width:"50%", borderRadius:10}} color="success" variant="determinate" value= {percentage}/> 
        <p className="text-white font-bold">{Math.round(percentage)} %</p>
        </div>
    <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between w-full 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4">
    <p>Budget: <span className="font-bold text-white">Ksh. {values.budget && Number(values.budget.toLocaleString())}</span> </p>
    <p>Spent: <span className="font-bold text-red-500">Ksh. {miles && miles.length > 0 && miles.filter(item => item.status === 'Completed').reduce((acc, item) => acc + Number(item.budget), 0).toLocaleString()}</span> </p>
    </div>
    <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between w-full 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4">
    <p>Start Date: <span className="font-bold text-white">{values.start}</span></p>
    <p>End Date: <span className="font-bold text-white">{values.due}</span></p>
    </div>
    <p>Priority: <span className={`${values.priority === 'High' ? 'text-red-500 font-bold': 'text-zinc-400'}`}>{values.priority}</span></p>
    <div className="block 2xl:flex xl:flex lg:flex md:flex w-full 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 items-center  justify-between">
    <p>Created by: <span className="font-bold text-white">{values.createdby}</span> </p>
    <p className="flex items-center"><span className="mr-2">Teams:</span> <GroupAvatars/></p>
    </div>
    <div>
    <p className="mb-2">Description </p>
    <p className="text-zinc-300 font-bold">{values.description}</p>
    </div>

    <p className="text-zinc-200 font-semibold">Attachments: </p>
    <div className="border border-zinc-500 rounded-md h-24 w-full"></div>
    <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-4 border-b border-zinc-500 pb-2 w-full">
       {tabs.map((item,index)=>{
        return <p onClick={()=>setTab(item)} className={`${tab == item ? 'text-orange-700 font-bold' : 'text-zinc-400'} cursor-pointer`} key={index}>{item}</p>
       })}
    </div>
     {tab === 'To-Do Lists' &&
     <div className="space-y-4">
     {!add &&  <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-between">
        <button className="text-zinc-300 font-semibold cursor-pointer" onClick={()=>{setTodo({title:"",time:"",assignee:"",status:"In Progress"}); setAdd(true)}}>+ Add Item</button>
        <button onClick={handleSave} className="bg-green-700 p-2 rounded-md text-white hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-floppy mr-2"></i>Save Changes</button>
        </div>}
    {add && <form onSubmit={(e)=>{e.preventDefault(); setTodos((prev) => [...prev, todo]); setAdd(false)}}  className="space-y-4">
        <BasicInput name="title" value={todo.title} onChange={handleChange} placeholder="Title" phweight={100} required custom="w-full grey"/>
        <BasicInput name="time" value={todo.time} onChange={handleChange} type="time" required custom="w-full grey"/>
        <BasicInput name="assignee" value={todo.assignee} onChange={handleChange} type="text" placeholder="Assignee" phweight={100} required custom="w-full grey"/>
        
        <div className="flex justify-end items-center space-x-4 cursor-pointer my-2">
        <button onClick={()=>{setAdd(false); if(!Object.values(todo).some(value => value === "")) {
            setTodos((prev)=> [...prev, todo])}
          }} className="text-zinc-300 border border-zinc-500 py-2 px-4"> Cancel</button>
        <BasicButton title="+ Submit"/>   
        </div> 
     </form> }
     {!add && todos && todos.length > 0 && todos.map((item,index)=> {
          return <Todo key={index} {...item} edit={()=>{setAdd(true); setTodo(item); setTodos((prev) => prev.filter(item => item !== todos[index]))}} delete={()=>handleDelete(index)} complete={() => setTodos(prevTodos =>
            prevTodos.map((todo, i) => 
              i === index ? { ...todo, status: 'Completed' } : todo
            )
          )}/>
     })}
     </div>}
     {tab === 'Milestones' && <div className="space-y-4">
        {!addMil && 
        <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-between">
        <button onClick={()=>{setAddMil(true); setMile({title:"",description:"", budget:"", start:"", end:"", status:"In Progress"})}} className="text-zinc-300 font-semibold cursor-pointer mb-4 hover:text-orange-700 hover:scale-90"> + Create</button>
        {miles.length > 0 && <button onClick={handleSave} className="bg-green-700 p-2 rounded-md text-white hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-floppy mr-2"></i>Save Changes</button>}
        </div>}
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
          <button onClick={()=>{setAddMil(false); if(!Object.values(mile).some(value => value === "")) {
            setMiles((prev)=> [...prev, mile])}
          }} className="text-zinc-300 border border-zinc-500 py-2 px-4"> Cancel</button>
          <button type="submit" className="bg-orange-700 py-2 px-4 text-black rounded-md font-bold hover:bg-white hover:scale-90">+ Submit</button>
          </div>
        </form> : 
        <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2"><div className="space-y-4">
            {(miles && miles.length > 0) ? miles.map((item,index)=>{
                return <Milestone key={index} status={item.status} title={item.title} description={item.description} onClick={()=>setIndx(index)}/>
            }) : <p className="text-zinc-400"><i className="bi bi-folder2-open mx-2"></i> No milestones</p>}
      </div>
      {miles.length > 0 && miles.map((item, index) => {
            if (index === indx) {
                return  <div className="h-auto grey text-sm text-zinc-400 font-semibold space-y-8 cursor-pointer p-4">
                    <div className="flex justify-between">
                    <button className={`${item.status === 'Completed' ? 'bg-green-700' : 'bg-orange-700'} flex font-semibold rounded-lg p-2 text-white`}>{item.status}</button>
                     <div className="flex space-x-2">
                     <i className="bi bi-pen-fill text-green-500" onClick={()=>{setAddMil(true); setMile(item); setMiles((prev) =>  prev.filter(item => item !== miles[index])) }} ></i>
                     <i className="bi bi-trash-fill text-red-500" onClick={()=>setMiles((prev) =>  prev.filter(item => item !== miles[index]))}></i>
                     </div>
                    </div>
                <p>Start Date: <span className="text-white font-bold mr-2">{item.start}</span>  </p>
                <p>End Date: <span className="text-white font-bold mr-2"> {item.end}</span> </p>
                <p className="font-bold text-zinc-300">{item.description}</p>
                <div>
                <p className="font-bold text-zinc-300 text-lg"><i className="bi bi-paperclip text-orange-700 rotate-20"></i>Media And Docs</p>
                <p className="text-zinc-400">16 Attached</p>
                </div>
                <div className="flex space-x-8 text-zinc-400">
                    <p><i className="bi bi-cash-stack"></i> <span className="text-white font-bold">Ksh {Number(item.budget).toLocaleString()}</span></p>
                    <p>10 creators</p>
                </div>
              </div>
            }
      })}
      </div>
         }
      </div>}

    </div>
   </Grid>
   </Dashboard>
}