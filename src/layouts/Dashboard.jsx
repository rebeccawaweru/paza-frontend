import { createContext, useEffect } from "react";
import { NavBar } from "../components";
import { Grid } from "@mui/material";
import client from "../api/client";
export const DashContext = createContext()
export default function Dashboard({children,sidebar}){
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem("token");
    useEffect(()=>{
      client.get(`/users/${user._id}`, { headers: { Authorization: `${token}` } }).then((res)=>{
        if (res.data.account.type) {
          localStorage.setItem('account', JSON.stringify(res.data.account))
        }
      
      })
   },[user])
    return (
    <DashContext.Provider value={{user}}>
    <div className="min-h-screen w-full overflow-hidden">
    <NavBar/>
    <Grid container position="relative" minHeight="100vh">
    {sidebar}

    {children}
 
    </Grid>
    </div>
    </DashContext.Provider>
    )
}