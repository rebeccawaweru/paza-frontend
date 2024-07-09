import { Avatar, Grid } from "@mui/material";
import { Card, Skill } from "./components";
import { useContext, useState } from "react";
import { DashContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export default function CustomSidebar(){
  const {account, user} = useContext(DashContext)
  const [label, setLabel] = useState('Copy Invitation Code')
  const copyText = () => {
    navigator.clipboard.writeText(account.code).then(()=>{
      setLabel('Copied')
    })
  }
    return <Grid item xs={12} sm={4} lg={3}><div className="h-full space-y-2 flex flex-col items-center p-2 text-sm">
    <Avatar src={account.preview} sx={{ width: 100, height: 100 }}/>
    <p className="font-semibold">{account.creatorname}</p>
    <p className="text-zinc-400">{account.category}</p>
    <div className="grey w-full px-4 py-8 flex flex-col items-start text-center space-y-4 rounded-md">
    <div className="w-full bg-zinc-400 h-2 rounded-md self-center">
    <div className="bg-orange-700 w-1/4 h-full rounded-md"></div>
    </div>
      <p className="font-bold self-center">Profile 30% complete</p>
      <Link to={account.type === 'Creator' ? "/creator?edit" : "/brand?edit"} className="text-orange-700 self-center font-bold cursor-pointer">Edit Profile</Link>
      {account.type === 'Brand' && <p className="text-orange-700 text-xs self-center font-semibold">{label} <i onClick={copyText} className="bi bi-copy mx-2 cursor-pointer"></i></p>}
      <p className="font-semibold">Skills</p>
      <div className="block 2xl:flex xl:flex lg:flex md:block w-full justify-between items-center cursor-pointer overflow-hidden relative">
      {account.subCategory && account.subCategory.length > 0 && account.subCategory.slice(0,3).map((skill)=>{
        return <Skill key={skill} skill={skill}/>
      })}
      <div className="rounded-full h-6 w-6 text-center border border-zinc-500 hover:bg-orange-700 flex items-center justify-center text-xs absolute right-0 grey">&gt;</div>
      </div>
      <div className="grid grid-cols-1 gap-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 w-full">
      <Card title="Availability" caption="Fulltime"/>
      <Card title="Rates (Ksh)" caption="30k - 50k"/>
      <Card title="City" caption={user.city}/>
      </div>
    </div>
    <div className="grey flex flex-col items-center justify-center w-full h-full p-4 relative rounded-md">
    <p className="font-bold text-zinc-300 absolute top-4 left-4">ACTIVITY FEED</p>
    <p className="text-center flex justify-center items-center"><i className="bi bi-folder2-open mx-2"></i>Empty</p>
    </div>

    </div>
    </Grid>
}