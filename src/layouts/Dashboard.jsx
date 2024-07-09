import { NavBar } from "../components";
import { Grid } from "@mui/material";

export default function Dashboard({children,sidebar}){
    return (
    <div className="min-h-screen w-full overflow-hidden">
    <NavBar/>
    <Grid container position="relative" minHeight="100vh">
    {sidebar}
    {children}
    </Grid>
    </div>
    )
}