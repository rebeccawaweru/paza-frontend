import { useContext } from "react"
import { BasicInput, CheckBox, OptionBtn,IconButton} from "../../../../../components"
import { AuthContext } from "../../../../../layouts/AuthWrapper"
import { Validity } from "../../../../../utils/helpers"
export default function Step2({dispatch}){
    const options = ['Facebook','Instagram','Twitter','Tiktok','Linkedin','Other']
    const {state2,handleChange,handleSelect} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = Validity(e)
        if (isValid) {
           dispatch({type:'Next'})
        }
    }
    return  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="grey w-full text-zinc-400 flex justify-between p-4 text-sm">
        <p>Years Of Experience</p>
        <i className="bi bi-chevron-up"></i>
    </div>
    <div className="flex flex-wrap justify-between">
    <CheckBox checked={state2.experience === "1-3 Years"} label="1-3 Years" name="experience"  value="1-3 Years" onChange={handleChange}/>
    <CheckBox checked={state2.experience === "3-5 Years"}  label="3-5 Years" name="experience" value="3-5 Years"  onChange={handleChange}/>
    <CheckBox checked={state2.experience === "5-10 Years"}  label="5-10 Years" name="experience" value="5-10 Years"  onChange={handleChange}/>
    <CheckBox checked={state2.experience === "10+ Years"} label="10+ Years" name="experience" value="10+ Years"  onChange={handleChange}/>
    </div>

    <p className="text-zinc-400 self-start text-sm">What Social Media Do You Mostly Use?</p>
    <div className="grey w-full text-zinc-300 flex space-x-4 p-3"> 
    <i className="bi bi-search"></i>
    <p className="text-sm text-zinc-400">{state2.social ? state2.social : null}</p>
    </div>
    <div className="flex flex-wrap">
    {options.map((opt) => {
         return <OptionBtn custom={`${state2.social === opt ? 'bg-orange-600' :'grey'}`} opt={opt} handleClick={()=>handleSelect('social',opt)}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Social Media Page</p>
    <BasicInput name="main" value={state2.main} onChange={handleChange} custom="w-full mt-2" phcolor="grey" phweight={100} placeholder="enter link to your main social media page" required/>
    <p className="text-zinc-400 self-start text-sm">Choose From The Above Social Media Platform The Number Of Followers You Have</p>
    <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
    <CheckBox label="0-10K Followers" checked={state2.followers === "0-10K Followers"} value="0-10K Followers" name="followers" onChange={handleChange}/>
    <CheckBox label="50K-100K Followers" checked={state2.followers === "50K-100K Followers"} value="50K-100K Followers" name="followers" onChange={handleChange} />
    <CheckBox label="500K-1M Followers" checked={state2.followers === "500K-1M Followers"} value="500K-1M Followers" name="followers" onChange={handleChange}  />
    <CheckBox label="10K-50K Followers" checked={state2.followers === "10K-50K Followers"} value="10K-50K Followers" name="followers" onChange={handleChange} />
    <CheckBox label="100K-500K Followers" checked={state2.followers === "100K-500K Followers"} value="100K-500K Followers" name="followers" onChange={handleChange} />
    <CheckBox label="1M+ Followers" checked={state2.followers === "1M+ Followers"} value="1M+ Followers" name="followers"  onChange={handleChange}  />
    </div>
    <p className="text-zinc-400 self-start text-sm">Other Links</p>
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2">
    <BasicInput value={state2.instagram} name="instagram" onChange={handleChange} custom="w-full mt-2" start="bi bi-instagram text-white"/>
    <BasicInput  value={state2.tiktok} name="tiktok" onChange={handleChange} custom="w-full mt-2" start="bi bi-tiktok text-white"/>
    <BasicInput  value={state2.twitter} name="twitter" onChange={handleChange} custom="w-full mt-2" start="bi bi-twitter text-white"/>
    <BasicInput  value={state2.youtube} name="youtube" onChange={handleChange} custom="w-full mt-2" start="bi bi-youtube text-white"/>
    <BasicInput  value={state2.linkedin} name="linkedin" onChange={handleChange} custom="w-full mt-2" start="bi bi-linkedin text-white"/>
    <BasicInput  value={state2.facebook} name="facebook" onChange={handleChange} custom="w-full mt-2" start="bi bi-facebook text-white"/>
    </div>
    {/* <p className="text-zinc-400 self-start text-sm">Tags Associated With Your Work</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/> */}
    <p className="text-zinc-400 self-start text-sm">Career Milestones</p>
    <BasicInput value={state2.milestones} name="milestones" onChange={handleChange} phcolor="grey" phweight={100} placeholder="Mention any significant milestones you have achieved or are striving to reach" custom="w-full mt-2" multiline rows={4}/>
    <div className="w-full flex justify-between">
    <IconButton handleClick={()=>dispatch({type:"Prev"})} custom="grey font-bold text-zinc-400 hover:bg-white hover:text-black" title="Previous"/>
    <IconButton type="submit"  custom="w-full orange font-semibold text-black hover:bg-white" title="Next" icon={<i className="bi bi-arrow-right-short mx-2"></i>}/>
    </div>
    </form>
}