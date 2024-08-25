import {useState, useEffect, useContext} from 'react';
import { campaignsGet } from '../../../api/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, MenuItem,LinearProgress } from '@mui/material';
import { Dashboard } from '../../../layouts';
import { SideBar, BasicInput, BasicSelect, BasicLabel, BasicButton } from '../../../components';
import { ToastContainer,toast } from 'react-toastify';
import bg from '../../../assets/images/profile.jpg'
import { Milestone } from '../Tasks/components';
import { DashContext } from '../../../context/AuthContext';
import { campaignsPut } from '../../../api/client';
import client from "../../../api/client";
import {TaskContent} from '../Tasks/components';
export default function CampaignDetail(){
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {account, user} = useContext(DashContext)
    const {id} = useParams()
    const [addMil, setAddMil] = useState(false);
    const [campaign,setCampaign] = useState({})
    const permission = campaign.createdby === (account.creatorname || account.company || user.email);
    const [objectives, setObjectives] = useState([])
    const [data, setData] = useState([])
    const [tab,setTab] = useState('Description')
    const [tab2,setTab2] = useState('Milestones')
    const [mile, setMile] = useState({
        title:"",
        description:"",
        objectives:objectives,
        category:"Major Milestone",
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
    const handleSave = async () => {
        try {
            const response = await campaignsPut(`/campaigns/${id}`,{milestones:miles});
            if (response.data) {
                toast.success('Changes saved!')
                setAddMil(false)
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

    useEffect(()=>{
    //get campaigns route
    const getCampaign = async () => {
        try {
          const response = await campaignsGet(`/campaigns/${id}`);
          setCampaign(response.data)
          setMiles(response.data.milestones)
        } catch (error) {
          console.error("Failed to fetch campaigns:", error);
        }
      };
      getCampaign();
    },[id]);

    useEffect(()=>{
      client.get('/tasks', { headers: { Authorization: `${token}` } }).then((response)=>{
        setData(response.data.filter((item)=> item.campaignId === id))
      })
    },[data])
    return (
        <Dashboard sidebar={<SideBar/>}>
        <Grid item xs={10} sm={10} position="relative">
          <ToastContainer/>
    
         <div className='h-52 w-full rounded-md'>
         <img src={bg} alt="background" className="w-full h-full object-cover"/>
         </div>
         
         <div className='grid grid-cols-3 gap-2 -mt-8 mx-2'>
        <div className="col-span-2 p-2 space-y-4 grey">
         <h2 className="font-bold text-2xl">{campaign.title}</h2>
         <div className="flex space-x-2 text-xs">
            <p className="bg-green-800 rounded-lg px-4">Open</p>
            <p className="text-zinc-500">posted a month ago</p>
            </div>
        <div className="flex space-x-8 text-sm text-zinc-300 font-bold">
            <p onClick={()=>setTab('Description')} className={`${tab === 'Description' && 'text-orange-700'} cursor-pointer`}>Description</p>
            <p onClick={()=>setTab('Tasks')} className={`${tab === 'Tasks' && 'text-orange-700'} cursor-pointer`}>Tasks</p>
            <p className={`${tab === 'Schedule' && 'text-orange-700'} cursor-pointer'}`}>Schedule</p>
        </div>
        {tab === 'Description' && <div>
            <p className='text-sm leading-loose tracking-wide text-zinc-300'>{campaign.description}</p>
            <div className="text-sm mt-2">
                <p className='underline tracking-wider leading-loose'>Objectives</p>
                {campaign.goals && campaign.goals.length > 0 && campaign.goals.map((item, index) => {
                    return <p className='text-white font-semibold'>{index+1} . {item}</p>
                })}
            </div>
        
        </div>}
        {tab === 'Tasks' && <div className='bg-black p-4'>
            <div className='flex items-center justify-between text-sm'>
           <p className="font-bold text-lg">Campaign Tasks</p>
           <BasicButton title="+ New" handleClick={()=>navigate(`/newtask?campaign=${id}`)}/>
           </div>
           {data.length === 0 ? <p className="text-zinc-400 text-sm my-4"><i className="bi bi-folder2-open mx-2"></i> No tasks</p>:
           <TaskContent data={data} display="hidden"/>}
        </div>}
        </div>
        <div className='col-span-1 space-y-8 text-sm text-zinc-300 px-2 pt-12'>
        <div className="flex space-x-1 font-semibold text-white items-center">
        <p>Completion:</p>
        <LinearProgress sx={{height:5, width:"50%", borderRadius:10}} color="success" variant="determinate" value= {percentage}/> 
        <p className="text-white font-bold">{Math.round(percentage)} %</p>
        </div>
        <p>Deadline: 23/08/2024</p>
        <div className="flex justify-between font-bold cursor-pointer leading-loose">
            <p className={`${tab2 === 'Milestones' && 'border-b-2 border-orange-700'}`}>Milestones</p>
            <p className={`${tab2 === 'Teams' && 'border-b-2 border-orange-700'}`}>Teams</p>
            <p className={`${tab2 === 'Comments' && 'border-b-2 border-orange-700'}`}>Comments</p>
         </div>
         {tab2 === 'Milestones' && <div className="space-y-6">
            {!addMil && permission && 
        <div className="flex items-center flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-between">
        <button onClick={()=>{setAddMil(true); setMile({title:"",description:"", budget:"", start:"", end:"", status:"In Progress"})}} className="text-zinc-300 font-semibold cursor-pointer hover:text-orange-700 hover:scale-90"> + Create</button>
      <button onClick={handleSave} className="text-orange-700 font-bold hover:scale-90"><i className="bi bi-floppy mr-2"></i>Save Changes</button>
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
            <BasicLabel title="Category"/> 
            <BasicSelect name="category" value={mile.category} onChange={handleChange2}  custom="w-full grey">
            <MenuItem value="Major Milestone">Major Milestone</MenuItem>
            <MenuItem value="Minor Milestone">Minor Milestone</MenuItem>
           </BasicSelect>
           </div>
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
           <div>
           <BasicLabel title="Status"/> 
           <BasicSelect name="status" value={mile.status} onChange={handleChange2}  custom="w-full grey">
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
           </BasicSelect>
           </div>
           <div className="flex justify-end items-center space-x-4 cursor-pointer my-2">
          <button onClick={()=>{setAddMil(false); if(!Object.values(mile).some(value => value === "")) {
            setMiles((prev)=> [...prev, mile])}
          }} className="text-zinc-300 border border-zinc-500 py-2 px-4"> Cancel</button>
          <button type="submit" className="bg-orange-700 py-2 px-4 text-black rounded-md font-bold hover:bg-white hover:scale-90">+ Submit</button>
          </div>
        </form> : 
           <div className='space-y-12'>
            {(miles && miles.length > 0) ? miles.map((item, index)=>{
            return <div key={index} className='flex items-center'>
            <p className="font-bold text-white w-1/3">{item.start}</p>
           <Milestone status={item.status} title={item.title} description={item.description} category={item.category}/>
            {permission && 
           <div className="inline-flex space-x-2 mx-2 cursor-pointer">
           <i className="bi bi-pen-fill text-green-500" onClick={()=>{setAddMil(true); setMile(item); setMiles((prev) =>  prev.filter(item => item !== miles[index])) }} ></i>
           <i className="bi bi-trash-fill text-red-500" onClick={()=>setMiles((prev) =>  prev.filter(item => item !== miles[index]))}></i>
            </div>}

            </div>
            }) : <p className="text-zinc-400"><i className="bi bi-folder2-open mx-2"></i> No milestones</p>}
           </div>}
        </div>}
        </div>
        </div>
       </Grid>
      </Dashboard>
    )
}