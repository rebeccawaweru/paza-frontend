import { BasicInput, CheckBox, OptionBtn} from "../../../../../components"
export default function Step2(){
    const options = ['Facebook','Instagram','Twitter','Tiktok','Linkedin','Other']
    const handleChange = (e) => {
        console.log(e.target.checked)
    }
    return  <form className="space-y-4">
    <div className="grey w-full text-zinc-400 flex justify-between p-4 text-sm">
        <p>Years Of Experience</p>
        <i className="bi bi-chevron-up"></i>
    </div>
    <div className="flex flex-wrap justify-between">
    <CheckBox label="1-3 Years"  value="1-3 Years" onChange={handleChange}/>
    <CheckBox label="3-5 Years" value="3-5 Years"/>
    <CheckBox label="5-10 Years" value="5-10 Years"/>
    <CheckBox label="10+ Years" value="10+ Years"/>
    </div>

    <p className="text-zinc-400 self-start text-sm">What Social Media Do You Mostly Use?</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/>
    <div className="flex flex-wrap">
    {options.map((opt) => {
         return <OptionBtn opt={opt}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Choose From The Above Social Media Platform The Number Of Followers You Have</p>
    <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
    <CheckBox label="0-10K Followers"/>
    <CheckBox label="50K-100K Followers" />
    <CheckBox label="500K-1M Followers" />
    <CheckBox label="10K-50K Followers"/>
    <CheckBox label="100K-500K Followers"/>
    <CheckBox label="1M+ Followers" />
    </div>
    <p className="text-zinc-400 self-start text-sm">Social Media Links</p>
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2">
    <BasicInput custom="w-full mt-2" start="bi bi-instagram text-white"/>
    <BasicInput custom="w-full mt-2" start="bi bi-tiktok text-white"/>
    <BasicInput custom="w-full mt-2" start="bi bi-twitter text-white"/>
    <BasicInput custom="w-full mt-2" start="bi bi-youtube text-white"/>
    <BasicInput custom="w-full mt-2" start="bi bi-linkedin text-white"/>
    <BasicInput custom="w-full mt-2" start="bi bi-facebook text-white"/>
    </div>
    <p className="text-zinc-400 self-start text-sm">Tags Associated With Your Work</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/>
    <p className="text-zinc-400 self-start text-sm">Career Milestones</p>
    <BasicInput phcolor="grey" phweight={100} placeholder="Mention any significant milestones you have achieved or are striving to reach" custom="w-full mt-2" multiline rows={4}/>
    </form>
}