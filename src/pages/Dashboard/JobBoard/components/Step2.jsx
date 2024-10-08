import { useContext } from "react"
import { BasicInput, BasicButton, OptionBtn } from "../../../../components"
import { JobContext } from "../Board"
export default function Step2(){
    const {handlePrev,handleSubmit, handleChange, values, setSkills, skills} = useContext(JobContext)
    const topics = ['Fitness And Wellness', 'Fashion And Style', 'DIY And Crafts', 'Music And Entertainment', 'Gaming And Esports','Other']

    return <form onSubmit={handleSubmit} className="space-y-6 p-4 text-center">
        <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-bold">What kind of creator are you looking for?</p>
        <p className="text-zinc-500 w-3/4 font-bold text-sm">Select from the variety of categories provided and also include their sub-category</p>
        </div>
     <div className="space-y-2">
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    <div className="flex flex-wrap space-x-4 px-2">

    {skills.length > 0 ? skills.map((item) => {
       return <OptionBtn custom={`${skills.includes(item) ? 'bg-orange-600' : 'grey'}`} opt={item} handleClick={()=>setSkills(skills.filter(skill => skill !== item ))}/>
    }) : <i className="bi bi-search"></i>}

    </div>
    </div>
    <p className="text-xs text-zinc-400 font-bold text-left">Select upto 10 skills</p>
    <div className="flex flex-wrap">
        {topics.filter(item => !skills.includes(item)).map((item)=> {
            return <OptionBtn opt={item} handleClick={()=>setSkills((prev) => [...prev, item])}/>
        })}
    </div>
    </div>
    <BasicInput name="further" value={values.further} onChange={handleChange} custom="w-full grey" placeholder="Further describe the creator and skills you require (Optional)" multiline rows={5} phcolor="grey" phweight={600}/>
     <div className="flex justify-between">
     <p className="font-bold text-orange-700 cursor-pointer" onClick={handlePrev}>Previous</p>
     <BasicButton custom="float-right" title="Next Step"/>
     </div>
    </form>
}