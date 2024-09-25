import { useContext } from "react"
import { BasicInput, BasicButton, BasicLabel } from "../../../../components"
import { JobContext } from "../Board"
import { RadioGroup, FormControlLabel, Radio } from "@mui/material"
export default function Step6(){
    const {setStep, handleSubmit, handleChange, values} = useContext(JobContext);
    const radiocls = {
        color: "gray",
        '&.Mui-checked': {
          color: "#FB5607",
        },
      }
    return <form onSubmit={handleSubmit} className="space-y-6 p-4 text-center">
        <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-bold">Tell Us Your Budget</p>
        <p className="text-zinc-500 w-3/4 font-bold text-sm">A good title helps your post stand out to the right candidates. It's the first thing they see, make it good</p>
        </div>
        <div className="text-left">
   
        <RadioGroup
        className="w-full space-y-4 mt-2"
        column
        aria-labelledby="demo-gender-label"
        defaultValue=""
        name="payment"
        onChange={handleChange}
    >
    <FormControlLabel className="border border-orange-500 rounded-full px-2  h-8" value="Fixed Price"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Fixed Price</span>}
    sx={{ alignItems: 'center'}} 
    />
    <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Hourly Rate"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Hourly Rate</span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Negotiable"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Negotiable </span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Performance Based"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Performance Based </span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Subscription Based"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Subscription Based </span>}
    sx={{ alignItems: 'center' }} 
    />
     <FormControlLabel className="border border-orange-500 rounded-full pr-2 h-8" value="Price not Disclosed"
    control={<Radio sx={radiocls} size="extrasmall" />}
    label={<span style={{ fontSize: 'small' }}>Price not Disclosed </span>}
    sx={{ alignItems: 'center' }} 
    />
    </RadioGroup>
    </div>
    <p className="text-left text-sm">Other Form of Payment</p>
    <BasicInput name="paymentdesc" onChange={handleChange} value={values.paymentdesc} multiline rows={4} placeholder="Describe your form of payment" custom="w-full grey"/>

     <div className="flex justify-between">
     <p className="font-bold text-orange-700">Cancel</p>
     <BasicButton custom="float-right" title="Next Step"/>
     </div>
    </form>
}