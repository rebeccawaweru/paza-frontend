import { Dashboard } from "../../../layouts"
import { SideBar } from "../../../components"
import { Grid } from "@mui/material"
export default function TaskDetail(){
    return <Dashboard sidebar={<SideBar/>}>
   <Grid item xs={10} sm={10}>
   <div className="p-4">
     <p>geey</p>
    </div>
   </Grid>
 
   </Dashboard>
}