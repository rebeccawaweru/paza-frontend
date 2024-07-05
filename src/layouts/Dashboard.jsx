import { createContext } from "react";
import { NavBar, SideBar } from "../components";
import { Grid } from "@mui/material";
export const DashContext = createContext()
export default function Dashboard({children,sidebar}){
    const user = JSON.parse(localStorage.getItem('user'))
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