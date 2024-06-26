import { useContext } from "react"
import { BasicInput,OptionBtn} from "../../../../../components"
import { UserFormContext } from "../Creator"
export default function Step3(){
    const core = ['Innovation','Excellence','Integrity','Customer-Centric','Authenticity','Other']
    const topiccs = ['Fitness And Wellness', 'Fashion And Style', 'DIY And Crafts', 'Music And Entertainment', 'Gaming And Esports','Other']
    const colab = ['Sponsored Content', 'Product Reviews', 'Event Appearances', 'Content Creations', 'Campaigns', 'Other']
    const {corre,setCore,subcore,setSubCore,topics,setTopics,collabs,setCollabs} = useContext(UserFormContext)
    return  <form className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">What Are Your Core Values?</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {corre.length > 0 ? corre.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>setCore((prev)=> prev.filter(i => i !== item))}/>
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
    </div>}
    </div>
    <div className="flex flex-wrap">
    {core.filter(item => !corre.includes(item)).map((opt) => {
         return <OptionBtn custom={`${corre.includes(opt) ? 'bg-orange-600' :'grey'}`} handleClick={()=>setCore(prev => [...prev, opt])} opt={opt}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Sub Core Values</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {subcore.length > 0 ? subcore.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>setSubCore((prev)=> prev.filter(i => i !== item))}/>
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
    </div>}
    </div>
    <div className="flex flex-wrap">
    {core.filter(item => !subcore.includes(item)).map((opt) => {
         return <OptionBtn custom={`${subcore.includes(opt) ? 'bg-orange-600' :'grey'}`} handleClick={()=>setSubCore(prev => [...prev, opt])} opt={opt}/>
     })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Topics</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {topics.length > 0 ? topics.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>setTopics((prev)=> prev.filter(i => i !== item))}/>
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
    </div>}
    </div>
    <div className="flex flex-wrap">
    {topiccs.filter(item => !topics.includes(item)).map((opt) => {
         return <OptionBtn custom={`${topics.includes(opt) ? 'bg-orange-600' :'grey'}`} handleClick={()=>setTopics(prev => [...prev, opt])} opt={opt}/>
     })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Notable Collaboration</p>
    <div className="grey w-full text-zinc-300 flex flex-wrap p-2"> 
    {collabs.length > 0 ? collabs.map((item)=> {
        return <OptionBtn custom='bg-orange-600' opt={item} handleClick={()=>setCollabs((prev)=> prev.filter(i => i !== item))}/>
    }) : <div className="flex space-x-4 px-2">
     <i className="bi bi-search"></i>
     <p>Collaborations that you have done</p>
    </div>}
    </div>
    <div className="flex flex-wrap">
    {colab.filter(item => !collabs.includes(item)).map((opt) => {
         return <OptionBtn custom={`${collabs.includes(opt) ? 'bg-orange-600' :'grey'}`} handleClick={()=>setCollabs(prev => [...prev, opt])} opt={opt}/>
     })}
    </div>
    </form>
}