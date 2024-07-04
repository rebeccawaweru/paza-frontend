import { BasicInput, OptionBtn, IconButton} from "../../../../../components"
import { useContext } from "react"
import { creator } from "../../../../../utils/helpers"
import { AuthContext } from "../../../../../layouts/AuthWrapper"
import { Validity } from "../../../../../utils/helpers"
import { useNavigate } from "react-router-dom"
export default function Step1({dispatch}){
    const {state2,handleChange,handleAdd,handleRemove,handleSelect} = useContext(AuthContext)
    const filtered = creator.find(item => item.name === state2.category)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = Validity(e)
        if (isValid) {
           dispatch({type:'Next'})
        }
    }
    return  <form onSubmit={handleSubmit} className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">Creator Name</p>
    <BasicInput name="creatorname" value={state2.creatorname} onChange={handleChange} required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm" >About</p>
    <BasicInput name="about" value={state2.about} onChange={handleChange} custom="w-full mt-2" phcolor="grey" phweight={100} placeholder="Brief description of yourself" multiline rows={4} required/>
    <p className="text-zinc-400 self-start text-sm">Area of Expertise/Niche/Category/Skills</p>
    <div className="grey w-full text-zinc-300 flex space-x-4 p-3"> 
    <i className="bi bi-search"></i>
    <p className="text-sm text-zinc-400">{state2.category ? state2.category : 'Select Category E.g Visual Arts, Music'}</p>
    </div>
    <p className="text-xs text-zinc-500">Search for main category</p>
    <div className="flex flex-wrap">
    {creator.map((opt) => {
        return <OptionBtn custom={`${state2.category === opt.name ? 'bg-orange-600' : 'grey'}`} handleClick={()=>handleSelect('category', opt.name)} opt={opt.name}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Skill Sub-Category</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {state2.subCategory.length > 0 ? state2.subCategory.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>handleRemove('subCategory',item)}/>
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
     <p className="text-sm text-zinc-400">Select Sub Category</p>
    </div>}
    </div>
    <p className="text-xs text-zinc-500">You can select multiple skills</p>
    {filtered && filtered.category.length > 0 && <div className="flex flex-wrap">
    {filtered.category.filter(item => !state2.subCategory.includes(item)).map((opt) => {
         return <OptionBtn custom={`${state2.subCategory.includes(opt) ? 'bg-orange-600': 'grey'}`} handleClick={()=>handleAdd('subCategory',opt)} opt={opt}/>
    })}
    </div>}
    <div className="w-full flex justify-between">
    <IconButton handleClick={()=>navigate('/accountype')} custom="grey font-bold text-zinc-400 hover:bg-white hover:text-black" title="Back"/>
    <IconButton type="submit"  custom="w-full orange font-semibold text-black hover:bg-white" title="Next" icon={<i className="bi bi-arrow-right-short mx-2"></i>}/>
    </div>    </form>
}