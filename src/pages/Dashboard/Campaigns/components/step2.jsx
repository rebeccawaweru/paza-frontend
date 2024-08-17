import { BasicButton, BasicInput, BasicLabel, IconButton } from "../../../../components";
import { useState,useContext } from "react";
import { CampaignContext } from "./modal";
export default function Step2(){
    const {setStep,handleSubmit} = useContext(CampaignContext);
    return (
        <form onSubmit={handleSubmit}  className="space-y-6"> 
        <div>
            <p className="text-lg font-bold text-center">Looking to Collaborate?</p>
            <p className="font-bold text-zinc-500 text-sm text-center">Search and collaborate with the best minds in the business</p>
        </div>
       <div className="flex justify-between">
       <p className="font-bold text-sm">Add creators/collaborators</p>
       <BasicButton title="+ Add group"/>
       </div>         
          <div>
            <BasicLabel title="Set goals for your campaign"/>
          <BasicInput name="goals" custom="w-full grey" multiline rows={4} required placeholder="I'm looking to..." phcolor="grey" phweight={200}/>
          </div>
          <div className="flex justify-between">
          <button onClick={()=>setStep((prev) => prev - 1)} className="grey font-bold text-zinc-400 hover:bg-white hover:text-black text-sm p-3">Previous</button>
          <BasicButton title="Continue"/>
          </div>
         </form>
    )
}