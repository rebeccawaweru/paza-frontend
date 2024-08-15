import { BasicButton, BasicInput, BasicLabel } from "../../../../components";
import { useState } from "react";
export default function Step2(){
    return (
        <div className="space-y-6"> 
        <div>
            <p className="text-lg font-bold text-center">Looking to Collaborate?</p>
            <p className="font-bold text-zinc-500 text-sm text-center">Search and collaborate with the best minds in the business</p>
        </div>
       <div className="flex justify-between">
       <p className="font-bold text-sm">Add creators/collaborators</p>
       <BasicButton title="Add group"/>
       </div>         
          <div>
            <BasicLabel title="Set goals for your campaign"/>
          <BasicInput name="description" custom="w-full grey" multiline rows={4} required placeholder="I'm looking to..." phcolor="grey" phweight={200}/>
          </div>
          <div className="flex justify-between">
          <BasicButton  title="Previous"/>
          <BasicButton  title="Continue"/>
          </div>
         </div>
    )
}