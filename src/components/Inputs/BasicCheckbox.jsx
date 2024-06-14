import { FormControlLabel, Checkbox } from "@mui/material"
export default function CheckBox(props){
    return <FormControlLabel control={<Checkbox {...props} sx={{color:"grey", '&.Mui-checked': {
        color:"orangered",
      }}} color="success"/>} label={<span style={{color:"grey", fontSize:"small"}}>{props.label}</span>}/>
}