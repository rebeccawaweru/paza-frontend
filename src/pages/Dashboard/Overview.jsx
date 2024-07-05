import { Dashboard } from "../../layouts";
import { SummaryCard, Transaction } from "./components";
import { GroupAvatars, SideBar } from "../../components";
import { CircularProgress,Grid } from "@mui/material";
export default function OverView(){
    const date = new Date();
    const today = date.toDateString()
    return <Dashboard sidebar={<SideBar/>}>
           <Grid item xs={10} sm={10}>
      <div className="grid grid-cols-1 gap-4 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-0 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  py-2 text-zinc-300">
            <div className="space-y-4 px-4">
            <p className="text-xl font-bold">Overview</p>
                <div className="grid block 2xl:flex xl:flex lg:flex md:flex gap-2">
                <SummaryCard title="Total earnings" amount="Ksh.100,500" caption="increase" icon="bi-arrow-up-right" color="text-green-500"/>
                <SummaryCard title="Total spending" amount="Ksh.100,500" caption="decrease" icon="bi-arrow-down-right" color="text-red-500"/>
                </div>
                <p className="text-xl font-bold">Recent Transactions</p>
                <div className="divide-y divide-zinc-800">
                <Transaction/>
                <Transaction/>
                </div>
                <p className="orange-text underline font-bold text-center text-sm">View more</p>
                <div className="flex justify-between">
                <p className="text-xl font-bold">Latest Task</p>
                <p className="orange-text underline font-bold text-center text-sm">View all</p>
                </div>
                <div className="grey p-4 space-y-2 rounded-md">
                    <p className="font-bold text-lg">Majimbo Project</p>
                    <p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur.</p>
                    <div>
                    <GroupAvatars/>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                    <p className="orange-text font-bold text-xs">See all</p>
                    </div>                    
                    <div className="flex justify-between font-semibold">
                    <p>Progress</p>
                    <p>70%</p>
                    </div>
               
                    <div className="w-full  rounded-md bg-zinc-500">
                        <div className="w-3/4 rounded-md orange py-1"></div>
                    </div>
                </div>
            </div>
            <div className="text-zinc-300 space-y-4 px-4">
                <div className="flex justify-between font-bold">
                <p className="text-lg underline">My Campaigns <i className="bi bi-chevron-right text-sm mx-2"></i></p>
                <p className="orange-text underline">view more</p>
                </div>
                <div className="grey flex justify-center items-center space-x-2 2xl:space-x-24 xl:space-x-24 lg:space-x-24 md:space-x-12 p-4 space-y-2 rounded-md">
                    <div className="relative inline-flex">
                    <CircularProgress size={100} variant="determinate" sx={{color:"whitesmoke"}} value={100} />
                    <CircularProgress size={100} variant="determinate" sx={{color:"#FB5607",left:0,position:"absolute"}} value={65} />
                    <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 font-bold">
                        <p>65%</p>
                     </div>
                    </div>
                    <div className="font-semibold space-y-8">
                        <p>Majimbo Project <i className="bi bi-chevron-right  text-sm"></i></p>
                        <p className="text-orange-300 font-bold">1 Task Ongoing</p>
                        <p>02/06/2024 - </p>
                    </div>
                </div>
                <p className="font-bold">{today}</p>
                <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-zinc-500">Today</p>
                <button className="grey text-sm p-2 rounded-md hover:scale-90">+ Add Task</button>
                </div>
            </div>
      </div>
      </Grid>
    </Dashboard>
}