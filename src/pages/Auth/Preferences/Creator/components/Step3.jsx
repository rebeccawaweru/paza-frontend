import { BasicInput, CheckBox, OptionBtn} from "../../../../../components"
export default function Step3(){
    const core = ['Innovation','Excellence','Integrity','Customer-Centric','Authenticity','Other']
    const topics = ['Fitness And Wellness', 'Fashion And Style', 'DIY And Crafts', 'Music And Entertainment', 'Gaming And Esports','Other']
    const colab = ['Sponsored Content', 'Product Reviews', 'Event Appearances', 'Content Creations', 'Campaigns', 'Other']
    const handleChange = (e) => {
        console.log(e.target.checked)
    }
    return  <form className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">What Are Your Core Values?</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/>
    <div className="flex flex-wrap">
    {core.map((opt) => {
         return <OptionBtn opt={opt}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Sub Core Values</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/>
    <div className="flex flex-wrap">
    {core.map((opt) => {
         return <OptionBtn opt={opt}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Topics</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/>
    <div className="flex flex-wrap">
    {topics.map((opt) => {
         return <OptionBtn opt={opt}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Notable Collaboration</p>
    <BasicInput phcolor="grey" phweight={100} placeholder="Collaborations that you have done" custom="w-full mt-2" start="bi bi-search text-white"/>
    <div className="flex flex-wrap">
    {colab.map((opt) => {
         return <OptionBtn opt={opt}/>
    })}
    </div>
    </form>
}