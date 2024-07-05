import { OptionBtn } from "../../../components"
export default function Bio(){
  const account = JSON.parse(localStorage.getItem('account'))
    const socials = [
        {
         title:"Instagram",
         icon:<i className="bi bi-instagram"></i>   
        },
        {
            title:"Tiktok",
            icon:<i className="bi bi-tiktok"></i>   
        },
        {
            title:"Twitter",
            icon:<i className="bi bi-twitter"></i>   
        },
        {
            title:"Youtube",
            icon:<i className="bi bi-youtube"></i>   
        },

    ]
    return <div className="space-y-4">
    <p className="text-zinc-300 font-semibold">Bio</p>
    <div className="grey p-2 rounded-md font-bold text-zinc-500">
        {account ? account.about :
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sed eligendi ut itaque repudiandae, excepturi minima suscipit, eveniet eos blanditiis laudantium architecto. Quos quas facilis in. Beatae laboriosam illo dolorem?
        </p>}
    </div>
    <p className="text-zinc-300 font-semibold">Rates</p>
    <div className="grid grid-cols-3 gap-4 text-sm text-zinc-300">
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
    <div className="grid grid-cols-4 gap-4 text-sm text-zinc-300">
     {socials.map((s,index)=>{
         return  <a key={index} href="" target="_blank" className="grey hover:bg-orange-700 p-2 h-12 flex items-center justify-center rounded-md text-center">{s.icon}<span className="mx-2">{s.title}</span></a>
     })}
    </div>
    <p className="text-zinc-300 font-semibold">Skills</p>
    <div className="flex space-x-2">
    {account.subCategory.length > 0 && account.subCategory.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    })}
    </div>
  
    <p className="text-zinc-300 font-semibold">Milestones</p>
    <div className="grey p-2 text-zinc-400 text-sm font-semibold rounded-md">{account.milestones}</div>
    <p className="text-zinc-300 font-semibold">Collaborations</p>
    <div className="flex space-x-2">
    {account.collabs.length > 0 && account.collabs.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    })}
    </div>
    <p className="text-zinc-300 font-semibold">Interests</p>
    <div className="flex space-x-2">
    {account.topics.length > 0 && account.topics.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    })}
    </div>
    <p className="text-zinc-300 font-semibold">Core Values</p>
    <div className="flex space-x-2">
    {account.coreValues.length > 0 && account.coreValues.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    })}
    </div>
    <p className="text-zinc-300 font-semibold">Sub-Core Values</p>
    <div className="flex space-x-2">
    {account.subCoreValues.length > 0 && account.subCoreValues.map((item,index)=>{
      return <OptionBtn custom="bg-orange-700" opt={item}/>
    })}
    </div>
    </div>
}