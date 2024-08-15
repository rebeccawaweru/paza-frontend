import { NavBar } from "../components";
import { Grid } from "@mui/material";

export default function Dashboard({children,sidebar}){
    return (
    <div className="w-full min-h-screen relative">
    <NavBar/>
    <Grid container minHeight="100vh">
    {sidebar}
    {children}
    </Grid>
    </div>
    )
}