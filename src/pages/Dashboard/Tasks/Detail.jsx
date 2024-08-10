import { Dashboard } from "../../../layouts"
import { BasicButton, BasicInput, BasicLabel, BasicSelect, CheckBox, GroupAvatars, SideBar } from "../../../components"
import { Grid, MenuItem, LinearProgress } from "@mui/material"
import { useEffect, useState, useContext } from "react";
import client from "../../../api/client";
import { useNavigate, useParams } from "react-router-dom";
import { Todo, Milestone, GridBox, Review } from "./components";
import { toast, ToastContainer } from "react-toastify";
import { DashContext } from "../../../context/AuthContext";
import axios from "axios";
export default function Detail(){
    const {account, user} = useContext(DashContext)
    const [title, setTitle] = useState('')
    const [obj,setObj] = useState({})
    const [objective, setObjective] = useState('')
    const [objectives, setObjectives] = useState([])
    const [description, setDescription] = useState('')
    const [tab, setTab] = useState('Comments');
    const [active, setActive] = useState('Overview')
    const [add, setAdd] = useState(false)
    const [addMil, setAddMil] = useState(false)
    const [reviews,setReviews] = useState(true);
    const [indx,setIndx] = useState(0)
    const [selectedFiles, setSelectedFiles] = useState([])

    const [todo, setTodo] = useState({
        title:"",
        time:"",
        assignee:"",
        reviews:[],
        status:"In Progress"

    });
    const handleChange = (e) => {
       setTodo((prev) => ({...prev, [e.target.name]:e.target.value}))
    }
    const [mile, setMile] = useState({
        title:"",
        description:"",
        objectives:objectives,
        category:"",
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
                setAdd(false)
            } 
        } catch (error) {
            console.log(error)
        }
    }
    const handleSave2 = (e) => {
        e.preventDefault();
        setMiles((prev) => [...prev,  {...mile, objectives:objectives}])
        setAddMil(false)
    };
    const permission = values.createdby === (account.creatorname || account.company || user.email);
    // const permission = false;
    const handleUpload = async (e)=>{
      const files = e.target.files;
      setSelectedFiles((prev) => [...prev, ...Array.from(files)])
   }
   async function upload(){
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("attachments", file);
    });
    const res = await axios.post(
      "http://54.163.27.140:5000/uploads/attachments",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return res.data.attachmentUrls
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
     {permission && <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-2">
      <GridBox title="To-Do Lists Left" custom="border border-orange-700" caption={todos.filter(item =>item.status === 'In Progress' || item.status === 'On Review').length}/>
      <GridBox title={todos.filter(item=>item.status === 'Completed').length} caption="Done"/>
      <GridBox title={todos.filter(item=>item.status === 'In Progress').length} caption="In Progress"/>
      <GridBox title={todos.filter(item=>item.status === 'On Review').length} caption="On Review"/>
    </div>}
    {permission && 
    <div className="grid grid-cols-1 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-6 gap-6 border-b border-b-zinc-700">
      <div onClick={()=>setActive('Overview')} className="cursor-pointer">
      <p>Overview</p>
      <hr className={`${active === 'Overview' ? 'border border-orange-700 w-16 mt-2' : 'hidden'}`}></hr>
      </div>

        {tabs.map((item, index)=> {
            return  <div key={index} onClick={()=>setActive(item)}  className="cursor-pointer">
            <p>{item}</p>
            <hr className={`${active === item ? 'border border-orange-700 w-16 mt-2' : 'hidden'}`}></hr>
            </div>
        })}
        
          <div onClick={()=>setActive('Team Management')} className="cursor-pointer">
      <p>Team Management</p>
      <hr className={`${active === 'Team Management' ? 'border border-orange-700 w-32 mt-2' : 'hidden'}`}></hr>
      </div>
    </div>}
    {active === 'To-Do Lists' && !add && permission && <>
     <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-between">
        <button className="text-zinc-300 font-semibold cursor-pointer" onClick={()=>{setTodo({title:"",time:"",assignee:"",status:"In Progress"}); setAdd(true)}}>+ Add Item</button>
        <button onClick={handleSave} className="bg-green-700 p-2 rounded-md text-white hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-floppy mr-2"></i>Save Changes</button>
        </div>

    <table style={{tableLayout:"fixed",width:"100%"}}>
        <thead className="grid grid-cols-5 font-bold border-b border-zinc-700">
            <td>Lists</td>
            <td>Status</td>
            <td>Assigned To</td>
            <td>Action</td>
        </thead>
        <tbody>
          <td className="space-y-4">
            {todos.length > 0 ? todos.map((item, index)=>{
                return <tr className="grid grid-cols-5 pt-2 " key={index}>
                        <td> {item.title}</td>
                        <td className={`${item.status === 'Completed' ? 'text-green-700' : item.status === 'In Progress' ? 'text-orange-700' : 'text-red-500' } font-bold`}> {item.status}</td>
                        <td> {item.assignee}</td>
                        <td className="flex space-x-2 cursor-pointer"> 
                     <i className="bi bi-pen-fill text-green-500 " onClick={()=>{setAdd(true); setTodo(item); setTodos((prev) => prev.filter(item => item !== todos[index]))}}  ></i>
                     <i className="bi bi-trash-fill text-red-500" onClick={()=>handleDelete(index)}></i>
                     </td>
                 
                        <td>
                          {item.status !== 'Completed' ?
                        <button onClick={() => setTodos(prevTodos =>
                          prevTodos.map((todo, i) => 
                            i === index ? { ...todo, status: 'Completed' } : todo
                          )
                        )} className="p-2 border rounded-md hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-check-circle-fill mr-2 text-green-700"></i>Mark as complete</button>
                        : <i className="bi bi-check-circle-fill mr-2 text-green-700"></i>}
                        </td>
                    </tr>
            }) : <p>No todo list</p>}
              </td>
        </tbody>
    </table>
    <p className="text-white font-bold text-lg">On Review</p>
    <div className="space-y-2">
      {todos.map((item, index) => {
        return item.reviews.length > 0 && item.reviews.map((review, i) => {
                 return <Review title={review.title} addedby={review.addedby} permission={permission} status={review.status} desc={review.description} 
                 accept={() =>
                  setTodos((prev) =>
                    prev.map((todo) =>
                      ({
                        ...todo,
                        reviews: todo.reviews.map((t) =>
                          t === review ? { ...t, status: 'Accepted' } : t
                        )
                      })
                    )
                  )
                }
                reject={() =>
                  setTodos((prev) =>
                    prev.map((todo) =>
                      ({
                        ...todo,
                        reviews: todo.reviews.map((t) =>
                          t === review ? { ...t, status: 'Rejected' } : t
                        )
                      })
                    )
                  )
                }
                />
         })
      })}
    </div>
    </>}
    {active === 'To-Do Lists' && add && <form onSubmit={(e)=>{e.preventDefault(); setTodos((prev) => [...prev, todo]); setAdd(false)}}  className="space-y-4">
        <BasicInput name="title" value={todo.title} onChange={handleChange} placeholder="Title" phweight={100} required custom="w-full grey"/>
        <BasicInput name="time" value={todo.time} onChange={handleChange} type="time" required custom="w-full grey"/>
        <BasicInput name="assignee" value={todo.assignee} onChange={handleChange} type="text" placeholder="Assignee" phweight={100} required custom="w-full grey"/>
        <BasicSelect name="status" value={todo.status} onChange={handleChange}  custom="w-full grey">
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="On Review">On Review</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
           </BasicSelect>
        <div className="flex justify-end items-center space-x-4 cursor-pointer my-2">
        <button onClick={()=>{setAdd(false); if(!Object.values(todo).some(value => value === "")) {
            setTodos((prev)=> [...prev, todo])}
          }} className="text-zinc-300 border border-zinc-500 py-2 px-4"> Cancel</button>
        <BasicButton title="+ Submit"/>   
        </div> 
     </form> }

    {(active === 'Overview' || tab === 'Overview') && <>
    <p>Status: <span className={`${values.status === 'In Progress' ? 'bg-orange-700' : values.status === 'Completed' ? 'bg-green-800 ' : 'grey'} text-white text-sm mx-2 p-2`}>{values.status}</span></p>
    <div className="w-full flex space-x-2 items-center">
        <p>Milestone:</p> 
        <LinearProgress sx={{height:5, width:"50%", borderRadius:10}} color="success" variant="determinate" value= {percentage}/> 
        <p className="text-white font-bold">{Math.round(percentage)} %</p>
        </div>
    <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between w-full 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4">
    <p>Budget: <span className="font-bold text-white">Ksh. {values.budget && Number(values.budget).toLocaleString()}</span> </p>
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
    <div className="border border-zinc-800 rounded-md h-auto w-full flex justify-start flex-wrap space-x-2 p-4">
            {values.attachments && values.attachments.length > 0 && values.attachments.map((item, index) => {
                 return <a href={item} target="_blank" key={index} className="relative grey text-white text-sm font-semibold px-4 py-2 hover:scale-90 hover:text-white">
                 <div className="font-semibold cursor-pointer flex items-center space-x-2"><i className={`bi ${item.slice(-3) === 'png' || 'jpg' || 'jpeg' ? 'bi-image text-green-500' : item.slice(-3) === 'pdf' ? 'bi-file-pdf-fill text-red-500' : item.slice(-3) === 'docx' ? 'bi-file-earmark-word-fill text-blue-300' : item.slice(-3) === 'xlsx' ? 'bi-file-earmark-excel-fill text-green-500' : 'bi-folder'} text-5xl h-12`}></i><div><p>{(item.split('/attachments/')[1]).slice(0, -4)}</p> <p className="text-zinc-400 text-sm capitalize">{item.slice(-3) === 'png' || 'jpg' || 'jpeg' ? 'IMG' : item.slice(-3) === 'pdf' ? 'PDF' : item.slice(-3) === 'docx' ? 'Word Doc' : item.slice(-3) === 'xlsx' ? 'Excel' : 'upload'}<i className="bi bi-dot"></i><span className="text-blue-500 text-xs cursor-pointer">Download</span></p></div> </div>
                 </a>
            })}
           </div>
    {!permission && <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-4 border-b border-zinc-500 pb-2 w-full">
       {tabs.map((item,index)=>{
        return <p onClick={()=>{setTab(item);setAdd(false)}} className={`${tab == item ? 'text-orange-700 font-bold' : 'text-zinc-400'} cursor-pointer`} key={index}>{item}</p>
       })}
    </div>}
    </> }
    {active === 'Team Management' && <div className="space-y-4">
       <div className="flex item-center justify-between">
       <p className="text-white font-semibold text-lg">Members</p>
       <button className="py-2 px-4 border border-orange-700 hover:scale-90 text-zinc-300">+ Add Member</button>
       </div>
       <div className="flex item-center justify-between">
       <p className="text-white font-semibold text-lg">Teams</p>
       <button className="py-2 px-4 border border-orange-700 hover:scale-90 text-zinc-300">+ New Team</button>
       </div>
    </div>}
    {active === 'Comments' && <p><i className="bi bi-folder2-open mx-2"></i>No comments</p>}
    {active === 'Activity' && <p><i className="bi bi-folder2-open mx-2"></i>No activities</p>}
    
     {tab === 'To-Do Lists'  &&
     <div className="space-y-4">
      {/* {!add &&
      <div className="flex justify-end">
      <button onClick={handleSave} className="bg-green-700 p-2 rounded-md text-white hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-floppy mr-2"></i>Save Changes</button>
      </div>} */}
    {add &&
      <>
      <div className="flex justify-between cursor-pointer">
        <div className="flex items-center space-x-4">
        <button className={`${reviews && 'text-orange-700 font-bold'}`} onClick={()=>setReviews(true)}><i className="bi bi-folder2-open mx-2"></i> My Reviews  </button>
        {reviews ? <p  onClick={()=>setReviews(false)}>+ New </p> :<p className="text-orange-700 font-semibold"><span className="mx-2">&gt;</span> {title} Review</p>}
        </div> 
        {reviews && <button onClick={handleSave} className="bg-green-700 p-2 rounded-md text-white hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-floppy mr-2"></i>Save Changes</button>}
       </div> 

     {reviews ?   todos.map((item, index) =>{
      return item.reviews.map((itm, i) => {
          if (itm.addedby === (account.creatorname || account.company || user.email) && itm.title === title){
                return <Review title={itm.title} desc={itm.description} status={itm.status} addedby={itm.addedby} permission={permission} edit={()=>{setReviews(false); setDescription(itm.description); setTodos(prev =>
                  prev.map(item => ({
                    ...item,
                    reviews: item.reviews.filter(r => r !== itm)
                  }))
                )}} delete={() =>
                  setTodos(prev =>
                    prev.map(item => ({
                      ...item,
                      reviews: item.reviews.filter(r => r !== itm)
                    }))
                  )
                } />
         }
      })
   }) : <form onSubmit={(e)=>{e.preventDefault(); setTodos(prevTodos =>
                          prevTodos.map((todo, i) => 
                           todo.title === title ? { ...todo, reviews: [...(todo.reviews || []), {
                              title:title,
                              description:description,
                              uploads:upload(),
                              status:"Pending",
                              addedby: account.creatorname || account.company || user.email
                            }] } : todo
                          ));
                          // setAdd(false)
                          setReviews(true)
                          setDescription("")
                         }} className="space-y-4">
       <BasicLabel title="Description"/>
        <BasicInput custom="w-full grey" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} multiline rows={4} required/> 
        <div>
            <BasicLabel title="Attachment" />
            <div className="w-full h-48 flex flex-col space-y-4 cursor-pointer justify-center items-center border-dashed border-2 border-orange-700 rounded-md">
              <i className="bi bi-file-earmark-arrow-up orange text-black rounded-full px-3 py-2 font-bold text-2xl"></i>
              <input
                type="file"
                multiple
                id="files"
                className="hidden"
                onChange={handleUpload}
              />
              <label className="text-sm text-zinc-100 mb-2" for="files">
                Click to Upload
              </label>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-4 cursor-pointer my-2">
        <button onClick={()=>setAdd(false)} className="text-zinc-300 border border-zinc-500 py-2 px-4"> Cancel</button>
      <BasicButton title="+ Add"
        />   
        </div>
    
     </form>}</> }
  
     
     {!add && !permission && todos && todos.length > 0 && todos.map((item,index)=> {
          return <Todo key={index} {...item} add={()=>{setTitle(item.title);setObj(item); setAdd(true);}}/>
     })}
     </div>}
     {(tab === 'Milestones' || active === 'Milestones') && <div className="space-y-4">
        {!addMil && permission && 
        <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-between">
        <button onClick={()=>{setAddMil(true); setMile({title:"",description:"", budget:"", start:"", end:"", status:"In Progress"})}} className="text-zinc-300 font-semibold cursor-pointer mb-4 hover:text-orange-700 hover:scale-90"> + Create</button>
      <button onClick={handleSave} className="bg-green-700 p-2 rounded-md text-white hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-floppy mr-2"></i>Save Changes</button>
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
            <div className="mb-2">
            <BasicLabel title="Objectives"/> 
            {objectives.length > 0 && objectives.map((item,index)=>{
              return <div key={index} className="flex justify-between mb-2 pr-8"><div className="flex space-x-2"><i className="bi bi-check"></i><p>{item}</p></div><i onClick={()=>setObjectives(prev => prev.filter((ob, i) => i !== index))} className="bi bi-trash-fill text-red-500 cursor-pointer"></i></div>
            })}
            <div className="flex space-x-2">
            <BasicInput name="objective" value={objective} onChange={(e)=>setObjective(e.target.value)} custom="w-full grey"/>
            <i onClick={()=>{setObjectives(prev => [...prev, objective]);  setObjective("")}} className="bi bi-plus-circle-fill cursor-pointer text-lg mt-1 text-white"></i>
            </div>
         
            </div>
           <BasicLabel title="Budget (Ksh)"/>
           <BasicInput name="budget" value={mile.budget} onChange={handleChange2}  custom="w-full grey" type="number" />
           </div>
           <BasicSelect name="category" value={mile.category} onChange={handleChange2}  custom="w-full grey">
            <MenuItem value="Main Objective">Main Objective</MenuItem>
            <MenuItem value="Sub-Objective">Sub-Objective</MenuItem>
           </BasicSelect>
           <div className="grid grid-cols-2 gap-2">
           <div>
           <BasicLabel title="Start Date"/>
           <BasicInput name="start" value={mile.start} onChange={handleChange2}  custom="w-full grey py-1" type="date" />
           </div>
           <div>
           <BasicLabel title="Due Date"/>
           <BasicInput name="end" value={mile.end} onChange={handleChange2}  custom="w-full grey py-1" type="date" />
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
                     {permission &&
                     <div className="flex space-x-2">
                     <i className="bi bi-pen-fill text-green-500" onClick={()=>{setAddMil(true); setMile(item); setMiles((prev) =>  prev.filter(item => item !== miles[index])) }} ></i>
                     <i className="bi bi-trash-fill text-red-500" onClick={()=>setMiles((prev) =>  prev.filter(item => item !== miles[index]))}></i>
                     </div>}

                    </div>
                <p>Start Date: <span className="text-white font-bold mr-2">{item.start}</span>  </p>
                <p>End Date: <span className="text-white font-bold mr-2"> {item.end}</span> </p>
                
                <p>Description: <br></br> <br></br><span className="font-bold text-zinc-300">{item.description}</span></p>
                {item.objectives && item.objectives.length > 0 && <p>Objectives:</p>}
                {item.objectives && item.objectives.length > 0 && item.objectives.map((item,index)=>{
                  return <div key={index} className="flex justify-between mb-2 pr-8 text-zinc-200"><div className="flex space-x-2"><i className="bi bi-check"></i><p>{item}</p></div></div>
               })}
              
                <div className="flex space-x-8 text-zinc-400">
                    <p><i className="bi bi-cash-stack"></i> <span className="text-white font-bold">Ksh {Number(item.budget).toLocaleString()}</span></p>
                
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