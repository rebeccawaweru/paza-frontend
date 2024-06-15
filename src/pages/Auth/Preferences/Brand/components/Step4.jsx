import { BasicInput, OptionBtn } from "../../../../../components"
export default function Step4(){
    const core = ['Innovation','Excellence','Integrity','Customer-Centric','Authenticity','Other']
    const topics = ['Fitness And Wellness', 'Fashion And Style', 'DIY And Crafts', 'Music And Entertainment', 'Gaming And Esports','Other']
    const colab = ['Sponsored Content', 'Product Reviews', 'Event Appearances', 'Content Creations', 'Campaigns', 'Other'] 
    return <form className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">Company Mission</p>
    <BasicInput name="mission"  required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Company Vision</p>
    <BasicInput name="vision"  required custom="w-full mt-2"/>
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
    </form>
}