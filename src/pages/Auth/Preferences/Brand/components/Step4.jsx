import { useContext, useState } from "react"
import { BasicInput, OptionBtn,IconButton } from "../../../../../components"
import { AuthContext } from "../../../../../layouts/AuthWrapper"
import { Validity, handleUpdate } from "../../../../../utils/helpers"
import { useNavigate } from "react-router-dom"
export default function Step4({dispatch}){
    const navigate = useNavigate()
    const [profile,setProfile] = useState(false)
    const {state2,handleChange,handleAdd,handleRemove,handleAvatar} = useContext(AuthContext)
    const core = ['Innovation','Excellence','Integrity','Customer-Centric','Authenticity','Other']
    const handleSubmit = (e) => {
      e.preventDefault();
      const isValid = Validity(e)
      if (isValid) {
         setProfile(true)
      }
    }
   return !profile ? <form onSubmit={handleSubmit} className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">Company Mission</p>
    <BasicInput name="mission" onChange={handleChange} value={state2.mission} type="text" custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Company Vision</p>
    <BasicInput name="vision" onChange={handleChange} value={state2.vision} type="text" custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">What Are Your Core Values?</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {state2.coreValues.length > 0 ? state2.coreValues.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>handleRemove('coreValues',item)} />
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
    </div>}
    </div>
    <div className="flex flex-wrap">
    {core.filter(item => !state2.coreValues.includes(item)).map((opt) => {
         return <OptionBtn custom={`${state2.coreValues.includes(opt) ? 'bg-orange-600' :'grey'}`} opt={opt} handleClick={()=>handleAdd('coreValues',opt)}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Sub Core Values</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {state2.subCoreValues.length > 0 ? state2.subCoreValues.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>handleRemove('subCoreValues',item)} />
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
    </div>}
    </div>
    <div className="flex flex-wrap">
    {core.filter(item => !state2.subCoreValues.includes(item)).map((opt) => {
         return <OptionBtn custom={`${state2.subCoreValues.includes(opt) ? 'bg-orange-600' :'grey'}`} opt={opt} handleClick={()=>handleAdd('subCoreValues',opt)}/>
    })}
    </div>
    <div className="w-full flex justify-between">
    <IconButton handleClick={()=>dispatch({type:"Prev"})} custom="grey font-bold text-zinc-400 hover:bg-white hover:text-black" title="Previous"/>
    <IconButton type="submit"  custom="w-full orange font-semibold text-black hover:bg-white" title="Next" icon={<i className="bi bi-arrow-right-short mx-2"></i>}/>
    </div>
    </form>: <div className="flex flex-col space-y-8 items-center justify-center">
    <p className="text-zinc-400 text-sm">Choose profile picture</p>
    <div className="flex relative">
    {state2.avatar ? <img src={state2.avatar} alt="avatar" className="h-40 w-40 rounded-full"/>:
        <div className="rounded-full relative grey h-32 w-32 shadow-md"></div>
    }
     <div className="absolute right-4 bottom-2">
     <input type="file" id="files"  accept=".png, .jpg, .jpeg"  onChange={handleAvatar} className="hidden"/>
     <label for="files"><i className="bi bi-camera-fill cursor-pointer">
     </i></label>
     </div>
    </div>
    <div className="w-full flex justify-between">
    <IconButton handleClick={()=>setProfile(false)} custom="grey font-bold text-zinc-400 hover:bg-white hover:text-black" title="Previous"/>
    <IconButton handleClick={()=>handleUpdate(state2,navigate)} custom="w-full orange font-semibold text-black hover:bg-white" title="Save"/>
    </div>
    </div>
}