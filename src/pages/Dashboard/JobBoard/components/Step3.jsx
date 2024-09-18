import { useContext } from "react"
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";
import { BasicInput, BasicButton, OptionBtn } from "../../../../components"
import { JobContext } from "../Board"
export default function Step3(){
    const {handlePrev} = useContext(JobContext)
    const handleChange = {}
    const content = ['Video', 'Visual', 'Audio', 'Document', 'Written', 'Interactive']
    const platforms = ['Youtube', 'Instagram', 'Facebook', 'Tiktok', 'Linkedin', 'Twitter']
    const radiocls = {
        color: "gray",
        '&.Mui-checked': {
          color: "#FB5607",
        },
      }
    return <form className="space-y-6 p-4 text-center">
        <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-bold">What kind of creator are you looking for?</p>
        <p className="text-zinc-500 w-3/4 font-bold text-sm">Select from the variety of categories provided and also include their sub-category</p>
        </div>
        <div className="mx-2 space-y-2">
        <p className="text-left font-semibold text-zinc-400">Gender</p>
        <RadioGroup
        className="w-full flex justify-between"
        row
        aria-labelledby="demo-gender-label"
        defaultValue=""
        name="gender"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2  h-8" value="Male"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Male</span>}
    sx={{ alignItems: 'center'}} 
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Female"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Female</span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Female"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Other</span>}
    sx={{ alignItems: 'center' }} 
    />
    </RadioGroup> 
    </div>  
      
       

    <div className="mx-2 space-y-2">
        <p className="text-left font-semibold text-zinc-400">Availability</p>
        <RadioGroup
        className="w-full flex justify-between"
        row
        aria-labelledby="demo-gender-label"
        defaultValue=""
        name="gender"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2  h-8" value="Male"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Immediately</span>}
    sx={{ alignItems: 'center'}} 
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Female"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Flexible</span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Female"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Set Dates</span>}
    sx={{ alignItems: 'center' }} 
    />
    </RadioGroup> 
    </div>
    
    <div className="mx-2 space-y-2">
        <p className="text-left font-semibold text-zinc-400">Location</p>
        <RadioGroup
        className="w-full flex justify-between"
        row
        aria-labelledby="demo-gender-label"
        defaultValue=""
        name="gender"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2  h-8" value="Male"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Remote</span>}
    sx={{ alignItems: 'center'}} 
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Female"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Country</span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Female"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>State</span>}
    sx={{ alignItems: 'center' }} 
    />
    </RadioGroup> 
    </div>
    <div className="space-y-2">
    <p className="text-left">Content Format</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
    </div>
    </div>
    <div className="flex flex-wrap">
        {content.map((item)=> {
            return <OptionBtn opt={item}/>
        })}
    </div>
    </div>
    <div className="space-y-2">
    <p className="text-left">Platforms</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
    </div>
    </div>
    <div className="flex flex-wrap">
        {platforms.map((item)=> {
            return <OptionBtn opt={item}/>
        })}
    </div>
    </div>


     <div className="flex justify-between">
     <p className="font-bold text-orange-700 cursor-pointer" onClick={handlePrev}>Previous</p>
     <BasicButton custom="float-right" title="Next Step"/>
     </div>
    </form>
}