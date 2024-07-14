import { Dashboard } from "../../../layouts"
import { BasicInput, SideBar, BasicSelect, BasicButton, BasicLabel, CheckBox} from "../../../components"
import { MenuItem, Grid } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import client from "../../../api/client"
import { toast, ToastContainer } from "react-toastify"
export default function CreateTask(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get('edit');
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [choose, setChoose] = useState(false)
    const [values, setValues] = useState({
        task:"",
        assignee:"",
        priority:"",
        budget:"",
        status:"",
        start:"",
        due:"",
        repeat:"",
        description:"",
        attachment:""
    });
    const handleChange = (e) => {
        setValues((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (id) {
             //update logic from backend
             console.log('waiting for backend update route....')
        } else {
        try {
            const response = await client.post('/tasks/create',
                values,
                { headers: { Authorization: `${token}` } }
            );
            if (response.data.acknowledged) {
                toast.success('Task created!')
                setTimeout(()=>{
                    navigate('/tasks')
                }, 2000)
            }
        } catch (error) {
            console.error(error)
        }
      }
    }
    useEffect(()=>{
        //if updating, use id to get the task 
    },[id])
    return <Dashboard sidebar={<SideBar/>}>
   <Grid item xs={10} sm={10}>
    <form onSubmit={handleSubmit} className="p-4 space-y-6">
    <ToastContainer/>
    <h2 className="font-bold text-xl">{id ? 'Update Task' : 'Create Task'}</h2>
    <div>
    <BasicLabel title="Task Name"/>
    <BasicInput name="task" onChange={handleChange} custom="w-full grey" required/>
    </div>
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2">
        <div>
           <BasicLabel title="Appy To"/>
          <div onClick={()=>setChoose(!choose)} className="grey w-full text-zinc-300 flex justify-between  px-4 py-2"> 
            <p>{values.assignee ? values.assignee : 'Add Assignee'}</p>
            <i className="bi bi-plus-square"></i>
          </div>
            <div className={`bg-white p-4 text-black text-sm ${choose ? 'flex' : 'hidden'} flex-col mt-2`}>
            <CheckBox label="Rebecca" name="assignee"  value="Rebecca" checked={values.assignee === 'Rebecca'} onChange={handleChange}/>
            <CheckBox label="Ishmael" name="assignee"  value="Ishmael" checked={values.assignee === 'Ishmael'} onChange={handleChange}/>
            </div>
        </div>
        <div>
            <BasicLabel title="Priority"/>
            <BasicSelect name="priority" value={values.priority} onChange={handleChange} custom="w-full grey">
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
            </BasicSelect>
        </div>
    </div>

    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2">
        <div>
            <BasicLabel title="Budget"/>
            <BasicInput name="budget" onChange={handleChange} placeholder="Ksh."  custom="w-full grey" phcolor="grey" phweight={100} type='number' required />
        </div>
        <div>
            <BasicLabel title="Status"/>
            <BasicSelect name="status" value={values.status} onChange={handleChange} custom="w-full grey">
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="Under review">Under review</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
            </BasicSelect>
        </div>
    </div>
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2">
        <div>
            <BasicLabel title="Start Date"/>
            <BasicInput name="start" onChange={handleChange} type="date"  custom="w-full grey" phcolor="grey" phweight={100}  required />
        </div>
        <div>
            <BasicLabel title="Due Date"/>
            <BasicInput name="due" onChange={handleChange} type="date" custom="w-full grey" phcolor="grey" phweight={100}  required />
        </div>
    </div>
    <div>
    <BasicLabel title="Repeat Task"/>
    <BasicSelect name="repeat" value={values.repeat} onChange={handleChange} custom="w-full grey">
        <MenuItem value="Daily">Daily</MenuItem>
        <MenuItem value="Weekly">Weekly</MenuItem>
        <MenuItem value="Monthly">Monthly</MenuItem>
        <MenuItem value="Yearly">Yearly</MenuItem>
    </BasicSelect>
    </div>
     <div>
    <BasicLabel title="Task Description"/>
    <BasicInput name="description" onChange={handleChange} multiline rows={4} phcolor="grey" phweight={100} type='text'  required custom="w-full grey"/>
     </div>
    <div>
    <BasicLabel title="Attachment"/>
    <div className="w-full h-48 flex flex-col space-y-4 cursor-pointer justify-center items-center border-dashed border-2 border-orange-700 rounded-md">
    <i className="bi bi-file-earmark-arrow-up orange text-black rounded-full px-3 py-2 font-bold text-2xl"></i>
    <input type="file" id="files"  accept=".png, .jpg, .jpeg , .pdf"  className="hidden"/>
    <label className="text-sm text-zinc-100 mb-2" for="files">Click to Upload</label>
    </div>
    </div>
    <div className="flex justify-end space-x-4">
        <button onClick={()=>navigate('/tasks')} className="border border-zinc-500 text-zinc-400 py-2 px-8 rounded-sm text-sm hover:scale-90">Cancel</button>
        <BasicButton title={id ? 'Update Task' : '+ Create Task'}/>
    </div>
    </form>
    </Grid>
    </Dashboard>
}