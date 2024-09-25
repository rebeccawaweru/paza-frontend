import { useContext } from "react"
import { BasicInput, BasicButton } from "../../../../components"
import { JobContext } from "../Board"
import { RadioGroup, FormControlLabel, Radio } from "@mui/material"
export default function Step4(){
    const {setStep, handleSubmit, handleChange} = useContext(JobContext);
    const radiocls = {
        color: "gray",
        '&.Mui-checked': {
          color: "#FB5607",
        },
      }
    return <form onSubmit={handleSubmit} className="space-y-6 p-4 text-center">
        <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-bold">Next, estimate the scope of your work</p>
        <p className="text-zinc-500 w-3/4 font-bold text-sm">A good title helps your post stand out to the right candidates. It's the first thing they see, make it good</p>
        </div>
        <div className="text-left">
        <p>What level of experience does the job require?</p>
        <p className="text-sm font-bold text-zinc-400">This won't restrict proposals but helps match experts and high tier creators to your budget</p>
        <RadioGroup
        className="w-full space-y-4 mt-2"
        column
        aria-labelledby="demo-gender-label"
        name="experience"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2  h-8" value="Recreational"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Recreational (0 - 10k followers)</span>}
    sx={{ alignItems: 'center'}} 
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Semi-Pro"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Semi-Pro (10k - 50k followers)</span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Pro"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Pro (50 - 100k followers) </span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="MVP"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>MVP (100 - 500K followers) </span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="World Class"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>World Class (100 - 500K followers) </span>}
    sx={{ alignItems: 'center' }} 
    />
      <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Elite"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Elite (1M+ followers) </span>}
    sx={{ alignItems: 'center' }} 
    />
      <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Any"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Any</span>}
    sx={{ alignItems: 'center' }} 
    />
    </RadioGroup> 
  
    

        </div>
     <div className="flex justify-between">
     <p className="font-bold text-orange-700">Cancel</p>
     <BasicButton custom="float-right" title="Next Step"/>
     </div>
    </form>
}