import { useContext } from "react"
import { BasicInput, OptionBtn, IconButton } from "../../../../../components"
import { AuthContext } from "../../../../../layouts/AuthWrapper"
import { Validity } from "../../../../../utils/helpers"
export default function Step3({dispatch}){
    const {state2,handleChange, handleAdd,handleRemove} = useContext(AuthContext)
    const topics = ['Fitness And Wellness', 'Fashion And Style', 'DIY And Crafts', 'Music And Entertainment', 'Gaming And Esports','Other']
    const colab = ['Sponsored Content', 'Product Reviews', 'Event Appearances', 'Content Creations', 'Campaigns', 'Other'] 
    const handleSubmit = (e) => {
     e.preventDefault()
     const isValid = Validity(e)
     if (isValid) {
        dispatch({type:'Next'})
     }
 }
    return <form onSubmit={handleSubmit} className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">About Company</p>
    <BasicInput name="about" onChange={handleChange} value={state2.about}  placeholder="Brief Description Of The Company" multiline rows={4} phcolor="grey" phweight={100} type='text'  required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Company Milestones</p>
    <BasicInput name="milestones"  onChange={handleChange} value={state2.milestones} placeholder="Significant Milestones You Have Achieved" multiline rows={4} type='text' phcolor="grey" phweight={100} custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Topics</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {state2.topics.length > 0 ? state2.topics.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>handleRemove('topics',item)} />
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
    </div>}
    </div>
    <div className="flex flex-wrap">
    {topics.filter(item => !state2.topics.includes(item)).map((opt) => {
         return <OptionBtn custom={`${state2.topics.includes(opt) ? 'bg-orange-600' : 'grey'}`} opt={opt} handleClick={()=>handleAdd('topics',opt)}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Notable Collaboration</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {state2.collabs.length > 0 ? state2.collabs.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>handleRemove('collabs',item)} />
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
     <p>Collaborations that you have done</p>
    </div>}
    </div>
    <div className="flex flex-wrap">
    {colab.filter(item => !state2.collabs.includes(item)).map((opt) => {
         return <OptionBtn custom={`${state2.collabs.includes(opt) ? 'bg-orange-600' : 'grey'}`} opt={opt} handleClick={()=>handleAdd('collabs',opt)}/>
    })}
    </div>
    <div className="w-full flex justify-between">
    <IconButton handleClick={()=>dispatch({type:"Prev"})} custom="grey font-bold text-zinc-400 hover:bg-white hover:text-black" title="Previous"/>
    <IconButton type="submit"  custom="w-full orange font-semibold text-black hover:bg-white" title="Next" icon={<i className="bi bi-arrow-right-short mx-2"></i>}/>
    </div>
    </form>
}