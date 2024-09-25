import { useContext } from "react"
import { BasicInput, BasicButton } from "../../../../components"
import { JobContext } from "../Board"
import { RadioGroup, FormControlLabel, Radio } from "@mui/material"
export default function Step5(){
    const {handleSubmit, handleChange} = useContext(JobContext);
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
        <p>Priority</p>
        <RadioGroup
        className="w-full space-y-4 mt-2"
        column
        aria-labelledby="demo-gender-label"
        defaultValue=""
        name="priority"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2  h-8" value="Low"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Low (Long term or complex initiatives)</span>}
    sx={{ alignItems: 'center'}} 
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Medium"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Medium (Well defined projects)</span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="High"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>High (Quick and straight forward tasks) </span>}
    sx={{ alignItems: 'center' }} 
    />
    </RadioGroup>
    </div>

    <div className="text-left">
        <p>Visibility</p>
        <p className="font-bold text-zinc-400 text-sm">Scope description</p>
        <RadioGroup
        className="w-full space-y-4 mt-2"
        column
        aria-labelledby="demo-gender-label"
        defaultValue=""
        name="visibility"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2  h-8" value="Public"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Public (Open to anyone)</span>}
    sx={{ alignItems: 'center'}} 
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Private"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Private (Only The Creators Fitting Your Description Will Be Able To View The Job)</span>}
    sx={{ alignItems: 'center' }} 
    />
    </RadioGroup>     
    </div>

    <div className="text-left">
        <p>Years of experience</p>
        <RadioGroup
        className="w-full space-y-4 mt-2"
        column
        aria-labelledby="demo-gender-label"
        defaultValue=""
        name="years"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2  h-8" value="1 - 3 Years"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>1 - 3 Years</span>}
    sx={{ alignItems: 'center'}} 
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="3 - 5 Years"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>3 - 5 Years</span>}
    sx={{ alignItems: 'center' }} 
    />
      <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="5 - 10 Years"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>5 - 10 Years</span>}
    sx={{ alignItems: 'center' }} 
    />
      <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="10+ Years"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>10+ Years</span>}
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