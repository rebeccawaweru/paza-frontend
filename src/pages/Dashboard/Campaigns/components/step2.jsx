import { BasicButton, BasicInput, BasicLabel, IconButton } from "../../../../components";
import { useContext } from "react";
import { CampaignContext } from "../Campaigns";
export default function Step2(){
    const {handleSubmit, setStep,goal,setGoal,goals,setGoals} = useContext(CampaignContext);
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
            {goals && goals.length > 0 && goals.map((item, index) => {
          return <div key={index} className="flex justify-between mb-2 pr-8">
            <div className="flex space-x-2"><i className="bi bi-check"></i>
            <p>{item}</p></div>
            <i onClick={()=>setGoals(prev => prev.filter((ob, i) => i !== index))} className="bi bi-trash-fill text-red-500 cursor-pointer"></i></div>

            })}
            <div className="flex space-x-2">
            <BasicInput name="goal" value={goal} onChange={(e)=>setGoal(e.target.value)} custom="w-full grey" placeholder="I'm looking to..." phcolor="grey" phweight={200}/>
            <p className="cursor-pointer" onClick={()=>{
                setGoals((prev) => [...prev, goal]);
                setGoal("")
            }}>+</p>
            </div>

          </div>
          <div className="flex justify-between">
          <button onClick={()=>setStep((prev) => prev - 1)} className="grey font-bold text-zinc-400 hover:bg-white hover:text-black text-sm p-3">Previous</button>
          <BasicButton title="Continue"/>
          </div>
         </form>
    )
}