import { BasicInput, OptionBtn} from "../../../../../components"
import { useContext, useState } from "react"
import { creator } from "../../../../../utils/helpers"
import { UserFormContext } from "../Creator"
export default function Step1(){
    const {values, handleChange,sub,setSub,category,setCategory} = useContext(UserFormContext)
    const filtered = creator.find(item => item.name === category)
    const handleClick = (opt) =>{
        if (sub.length > 0) {
            setSub([])
        }
        setCategory(opt.name)
    }
    return  <form className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">Creator Name</p>
    <BasicInput name="creatorname" value={values.creatorname} onChange={handleChange} required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm" >About</p>
    <BasicInput name="about" value={values.about} onChange={handleChange} custom="w-full mt-2" phcolor="grey" phweight={100} placeholder="Brief description of yourself" multiline rows={4} required/>
    <p className="text-zinc-400 self-start text-sm">Area of Expertise/Niche/Category/Skills</p>
    <div className="grey w-full text-zinc-300 flex space-x-4 p-3"> 
    <i className="bi bi-search"></i>
    <p className="text-sm text-zinc-400">{category ? category : 'Select Category E.g Visual Arts, Music'}</p>
    </div>
    <p className="text-xs text-zinc-500">Search for main category</p>
    <div className="flex flex-wrap">
    {creator.map((opt) => {
        return <OptionBtn custom={`${category === opt.name ? 'bg-orange-600' : 'grey'}`} handleClick={()=>handleClick(opt)} opt={opt.name}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Skill Sub-Category</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {sub.length > 0 ? sub.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>setSub((prev)=> prev.filter(i => i !== item))}/>
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
     <p className="text-sm text-zinc-400">Select Sub Category</p>
    </div>}
    </div>
    <p className="text-xs text-zinc-500">You can select multiple skills</p>
    {filtered && filtered.category.length > 0 && <div className="flex flex-wrap">
    {filtered.category.filter(item => !sub.includes(item)).map((opt) => {
         return <OptionBtn custom={`${sub.includes(opt) ? 'bg-orange-600': 'grey'}`} handleClick={()=>setSub((prev)=>[...prev,opt])} opt={opt}/>
    })}
    </div>}
    </form>
}