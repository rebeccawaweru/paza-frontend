import { useContext } from "react"
import { OptionBtn } from "../../../components"
import { DashContext } from "../../../context/AuthContext"
export default function Bio(){
    const {account} = useContext(DashContext)
    const socials = [
        {
         title:"Instagram",
         icon:<i className="bi bi-instagram"></i>,
         link:account?.instagram
        },
        {
            title:"Tiktok",
            icon:<i className="bi bi-tiktok"></i>,
            link:account?.tiktok
        },
        {
            title:"Twitter",
            icon:<i className="bi bi-twitter"></i>,
            link:account?.twitter
        },
        {
            title:"Youtube",
            icon:<i className="bi bi-youtube"></i>,
            link:account?.youtube  
        },

    ]
    return <div className="space-y-4">
    <p className="text-zinc-300 font-semibold">Bio</p>
    <div className="grey p-2 rounded-md font-bold text-zinc-500">
        {account ? account.about :
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sed eligendi ut itaque repudiandae, excepturi minima suscipit, eveniet eos blanditiis laudantium architecto. Quos quas facilis in. Beatae laboriosam illo dolorem?
        </p>}
    </div>
    {account.type === 'Brand' &&  <><p className="text-zinc-300 font-semibold">Contact Info</p><div className="grey p-2 rounded-md font-bold text-zinc-500 space-y-2 ">
            <p><i className="bi bi-envelope mr-2"></i>{account.email}</p>
            <p><i className="bi bi-telephone mr-2"></i>{account.phone}</p>
            <p><i className="bi bi-geo-alt mr-2"></i>{account.location}</p>
    </div></>}
    {account.type === 'Brand' &&  <><p className="text-zinc-300 font-semibold">Vision</p><div className="grey p-2 rounded-md font-bold text-zinc-500 space-y-2 ">
            <p>{account.vision}</p>
    </div></>}
    {account.type === 'Brand' &&  <><p className="text-zinc-300 font-semibold">Mission</p><div className="grey p-2 rounded-md font-bold text-zinc-500 space-y-2 ">
            <p>{account.mission}</p>
    </div></>}
    <p className="text-zinc-300 font-semibold">Rates</p>
    <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-4 text-sm text-zinc-300">
      <div className="grey text-zinc-400 space-y-2 p-2 rounded-md">
        <p>Service/Rate 1</p>
        <p className="font-bold text-lg text-white">KES 1,559</p>
        <p>Service description</p>
      </div>
      <div className="grey text-zinc-400 space-y-2 p-2 rounded-md">
        <p>Service/Rate 1</p>
        <p className="font-bold text-lg text-white">KES 1,559</p>
        <p>Service description</p>
      </div>
      <div className="grey text-zinc-400 space-y-2 p-2 rounded-md">
        <p>Service/Rate 1</p>
        <p className="font-bold text-lg text-white">KES 1,559</p>
        <p>Service description</p>
      </div>
    </div>
    <p className="text-zinc-300 font-semibold">Socials</p>
    <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-4 text-sm text-zinc-300">
     {socials.map((s,index)=>{
         return  <a key={index} href={s.link} target="_blank" rel="noreferrer" className="grey hover:bg-orange-700 p-2 h-12 flex items-center justify-center rounded-md text-center">{s.icon}<span className="mx-2">{s.title}</span></a>
     })}
    </div>

    <p className="text-zinc-300 font-semibold">Skills</p>
    <div className="flex flex-wrap space-x-2">
    {account.subCategory && account.subCategory.length > 0 ? account.subCategory.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    }) : <p className="text-zinc-400 my-2">No skills</p>}
    </div>
  
    <p className="text-zinc-300 font-semibold">Milestones</p>
    <div className="grey p-2 text-zinc-400 text-sm font-semibold rounded-md">{account?.milestones}</div>
    <p className="text-zinc-300 font-semibold">Collaborations</p>
    <div className="flex flex-wrap space-x-2">
    { account.collabs && account.collabs.length > 0 ? account.collabs.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    }) : <p className="text-zinc-400 my-2">No collaborations</p>}
    </div>
    <p className="text-zinc-300 font-semibold">Interests</p>
    <div className="flex flex-wrap space-x-2">
    {account.topics && account.topics.length > 0 ? account.topics.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    }) : <p className="text-zinc-400 my-2">No Topics</p>}
    </div>
    <p className="text-zinc-300 font-semibold">Core Values</p>
    <div className="flex flex-wrap space-x-2">
    {account.coreValues && account.coreValues.length > 0 ? account.coreValues.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    }) : <p className="text-zinc-400 my-2">No core values</p>}
    </div>
    <p className="text-zinc-300 font-semibold">Sub-Core Values</p>
    <div className="flex flex-wrap space-x-2">
    {account.subCoreValues && account.subCoreValues.length > 0 ? account.subCoreValues.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    }) : <p className="text-zinc-400 my-2">No sub-core values</p>}
    </div>
    </div>
}