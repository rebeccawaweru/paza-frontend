import { BasicButton, BasicInput} from "../../../../components";
import { useContext } from "react";
import { CampaignContext } from "../Campaigns";
export default function Step4(){
    const {handleChange,handleSubmit,setStep,values} = useContext(CampaignContext);
    return (
        <form onSubmit={handleSubmit} className="space-y-8"> 
        <div>
            <p className="text-lg font-bold text-center">Confirm your details</p>
            <p className="font-bold text-zinc-500 text-sm text-center">Last step for your campaign setup, almost done!</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
            <BasicInput name="email" type="email" onChange={handleChange} value={values.email} custom="w-full grey" placeholder="Email Address" phcolor="grey" phweight={200} start="bi bi-envelope-fill text-white" required/>
            </div>
        <div>
        <BasicInput name="budget" type="number" onChange={handleChange} value={values.budget} custom="w-full grey"  phcolor="grey" phweight={200} start="bi bi-shield-shaded text-white" required/>
        <p className="text-zinc-500 text-xs">State your target amount in KES</p>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div>
            <BasicInput name="bank" type="number" onChange={handleChange} value={values.bank} custom="w-full grey" placeholder="Bank Account"  phcolor="grey" phweight={200} start="bi bi-bank text-white" required/>
            </div>
        <div>
        <BasicInput custom="w-full grey"  phcolor="grey" phweight={200} start="bi bi-camera text-white"/>
        <p className="text-zinc-500 text-xs">Please take a clear photo of your ID. Both sides are required.</p>
        </div>
        </div>
        <div className="flex justify-between">
          <button onClick={()=>setStep((prev) => prev - 1)} className="grey font-bold text-zinc-400 hover:bg-white hover:text-black text-sm p-3">Previous</button>
          <BasicButton title="Continue"/>
          </div>
         </form>
    )
}