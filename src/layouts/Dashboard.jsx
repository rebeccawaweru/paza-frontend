import { NavBar, SideBar } from "../components";
import { Grid } from "@mui/material";
export default function Dashboard({children}){
    return (
    <div className="min-h-screen w-full overflow-hidden">
    <NavBar/>
    <Grid container position="relative" minHeight="100vh">
    <SideBar/>
    <Grid item xs={10} sm={10}>
    {children}
    </Grid>
    </Grid>
    </div>
    )
}