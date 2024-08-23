import {useState, useEffect} from 'react';
import { campaignsGet } from '../../../api/client';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Dashboard } from '../../../layouts';
import { SideBar } from '../../../components';
import { ToastContainer } from 'react-toastify';
import bg from '../../../assets/images/profile.jpg'
export default function CampaignDetail(){
    const {id} = useParams()
    const [campaign,setCampaign] = useState({})
    const [tab,setTab] = useState('Description')
    const [tab2,setTab2] = useState('Milestones')
    useEffect(()=>{
    //get campaigns route
    const getCampaign = async () => {
        try {
          const response = await campaignsGet(`/campaigns/${id}`);
          setCampaign(response.data)
        } catch (error) {
          console.error("Failed to fetch campaigns:", error);
        }
      };
      getCampaign();
    },[])
    return (
        <Dashboard sidebar={<SideBar/>}>
        <Grid item xs={10} sm={10} position="relative">
          <ToastContainer/>
         <img src={bg} alt="background" className="w-full h-1/6 object-cover relative"/>
         <div className='grid grid-cols-2 gap-4'>

        <div className="p-4 space-y-8 grey">
         <h2 className="font-bold text-2xl">{campaign.title}</h2>
         <div className="flex space-x-2 text-xs">
            <p className="bg-green-800 rounded-lg px-4">Open</p>
            <p className="text-zinc-500">posted a month ago</p>
            </div>
        <div className="flex space-x-8 text-sm text-zinc-300 font-bold">
            <p className={`${tab === 'Description' && 'text-orange-700'}`}>Description</p>
            <p className={`${tab === 'Tasks' && 'text-orange-700'}`}>Tasks</p>
            <p className={`${tab === 'Schedule' && 'text-orange-700'}`}>Schedule</p>
        </div>
         <p className='text-sm leading-loose tracking-wide text-zinc-300'>{campaign.description}</p>
        </div>
        <div className='space-y-8 text-sm text-zinc-300 px-4 mt-4'>
        <div className="flex space-x-8 font-semibold text-white space-x-2 items-center">
        <p>Completion:</p>
        <hr className='border-2 border-green-500 rounded-md w-full'></hr>
        <p>100%</p>
  
        </div>
        <p>Deadline: 23/08/2024</p>
        <div className="flex justify-between font-bold cursor-pointer leading-loose">
            <p className={`${tab2 === 'Milestones' && 'border-b-2 border-orange-700'}`}>Milestones</p>
            <p className={`${tab2 === 'Teams' && 'border-b-2 border-orange-700'}`}>Teams</p>
            <p className={`${tab2 === 'Comments' && 'border-b-2 border-orange-700'}`}>Comments</p>
         </div>
        <p></p>
        </div>
      
  

        </div>
     
       </Grid>
      </Dashboard>
    )
}