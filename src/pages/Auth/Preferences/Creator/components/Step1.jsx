import { BasicInput, OptionBtn} from "../../../../../components"
export default function Step1(){
    const options = ['Art','Design','Fashion & Wearables', 'Film','Music','Photography','Other']
    return  <form className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">Creator Name</p>
    <BasicInput name="name"  required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">About</p>
    <BasicInput name="about" custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Area of Expertise/Niche/Category</p>
    <BasicInput phcolor="grey" phweight={100}  placeholder="Search For Category E.g Visual Arts, Music" custom="w-full mt-2" start="bi bi-search text-white"/>
    <p className="text-xs text-zinc-500">Search for main category</p>
    <div className="flex flex-wrap">
    {options.map((opt) => {
        return <OptionBtn opt={opt}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm" >Other Skills</p>
    <BasicInput phcolor="grey" phweight={100}  placeholder="Search For Sub Category E.g Singing, DJ" custom="w-full mt-2" start="bi bi-search text-white"/>
    <p className="text-xs text-zinc-500">Select Upto 10 Skills</p>
    <div className="flex flex-wrap">
    {options.map((opt) => {
         return <OptionBtn opt={opt}/>
    })}
    </div>
    </form>
}