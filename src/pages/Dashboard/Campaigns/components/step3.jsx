import { BasicButton, BasicInput, CheckBox} from "../../../../components";
import { useContext } from "react";
import { CampaignContext } from "./modal";
export default function Step3(){
    const {handleChange,handleSubmit,setStep,values} = useContext(CampaignContext);
    return (
        <form onSubmit={handleSubmit} className="space-y-8"> 
        <div>
            <p className="text-lg font-bold text-center">Finally, lets confirm your eligibility</p>
            <p className="font-bold text-zinc-500 text-sm text-center">Tell us where you are based and confirm a few other details before we proceed.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
            <BasicInput name="location" value={values.location} onChange={handleChange} custom="w-full grey" placeholder="Location" phcolor="grey" phweight={200} start="bi bi-geo-alt text-white" required/>
            </div>
        <div>
        <BasicInput name="phone" value={values.phone} onChange={handleChange} type="number" custom="w-full grey" placeholder="+254" phcolor="grey" phweight={200} start="bi bi-telephone text-white" required/>
        <p className="text-zinc-500 text-xs">Please provide your phone number for account verification</p>
        </div>
        </div>
        <div className="grid">
        <CheckBox checked={values.age} label="I am atleast 18 years old" name="age"  value={true} onChange={handleChange}/>
        <CheckBox checked={values.docs} label="I can verify a bank account and government issue ID" name="docs"  value={true} onChange={handleChange}/>
        <CheckBox checked={values.cards} label="I have a debit/credit card" name="cards"  value={true} onChange={handleChange}/>
        </div>        
        <div className="flex justify-between">
          <button onClick={()=>setStep((prev) => prev - 1)} className="grey font-bold text-zinc-400 hover:bg-white hover:text-black text-sm p-3">Previous</button>
          <BasicButton title="Continue"/>
          </div>
         </form>
    )
}