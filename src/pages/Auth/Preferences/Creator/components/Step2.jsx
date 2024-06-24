import { useContext } from "react"
import { BasicInput, CheckBox, OptionBtn} from "../../../../../components"
import { UserFormContext } from "../Creator"
export default function Step2(){
    const options = ['Facebook','Instagram','Twitter','Tiktok','Linkedin','Other']
    const {values,handleChange,social,setSocial} = useContext(UserFormContext)
    return  <form className="space-y-4">
    <div className="grey w-full text-zinc-400 flex justify-between p-4 text-sm">
        <p>Years Of Experience</p>
        <i className="bi bi-chevron-up"></i>
    </div>
    <div className="flex flex-wrap justify-between">
    <CheckBox checked={values.experience === "1-3 Years"} label="1-3 Years" name="experience"  value="1-3 Years" onChange={handleChange}/>
    <CheckBox checked={values.experience === "3-5 Years"}  label="3-5 Years" name="experience" value="3-5 Years"  onChange={handleChange}/>
    <CheckBox checked={values.experience === "5-10 Years"}  label="5-10 Years" name="experience" value="5-10 Years"  onChange={handleChange}/>
    <CheckBox checked={values.experience === "10+ Years"} label="10+ Years" name="experience" value="10+ Years"  onChange={handleChange}/>
    </div>

    <p className="text-zinc-400 self-start text-sm">What Social Media Do You Mostly Use?</p>
    <div className="grey w-full text-zinc-300 flex space-x-4 p-3"> 
    <i className="bi bi-search"></i>
    <p className="text-sm text-zinc-400">{social ? social : null}</p>
    </div>
    <div className="flex flex-wrap">
    {options.map((opt) => {
         return <OptionBtn custom={`${social === opt ? 'bg-orange-600' :'grey'}`} opt={opt} handleClick={()=>setSocial(opt)}/>
    })}
    </div>
    <p className="text-zinc-400 self-start text-sm">Social Media Page</p>
    <BasicInput name="main" onChange={handleChange} custom="w-full mt-2" phcolor="grey" phweight={100} placeholder="enter link to your main social media page" required/>
    <p className="text-zinc-400 self-start text-sm">Choose From The Above Social Media Platform The Number Of Followers You Have</p>
    <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
    <CheckBox label="0-10K Followers" checked={values.followers === "0-10K Followers"} value="0-10K Followers" name="followers" onChange={handleChange}/>
    <CheckBox label="50K-100K Followers" checked={values.followers === "50K-100K Followers"} value="50K-100K Followers" name="followers" onChange={handleChange} />
    <CheckBox label="500K-1M Followers" checked={values.followers === "500K-1M Followers"} value="500K-1M Followers" name="followers" onChange={handleChange}  />
    <CheckBox label="10K-50K Followers" checked={values.followers === "10K-50K Followers"} value="10K-50K Followers" name="followers" onChange={handleChange} />
    <CheckBox label="100K-500K Followers" checked={values.followers === "100K-500K Followers"} value="100K-500K Followers" name="followers" onChange={handleChange} />
    <CheckBox label="1M+ Followers" checked={values.followers === "1M+ Followers"} value="1M+ Followers" name="followers"  onChange={handleChange}  />
    </div>
    <p className="text-zinc-400 self-start text-sm">Other Links</p>
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2">
    <BasicInput name="instagram" onChange={handleChange} custom="w-full mt-2" start="bi bi-instagram text-white"/>
    <BasicInput name="tiktok" onChange={handleChange} custom="w-full mt-2" start="bi bi-tiktok text-white"/>
    <BasicInput name="twitter" onChange={handleChange} custom="w-full mt-2" start="bi bi-twitter text-white"/>
    <BasicInput name="youtube" onChange={handleChange} custom="w-full mt-2" start="bi bi-youtube text-white"/>
    <BasicInput name="linkedin" onChange={handleChange} custom="w-full mt-2" start="bi bi-linkedin text-white"/>
    <BasicInput name="facebook" onChange={handleChange} custom="w-full mt-2" start="bi bi-facebook text-white"/>
    </div>
    {/* <p className="text-zinc-400 self-start text-sm">Tags Associated With Your Work</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/> */}
    <p className="text-zinc-400 self-start text-sm">Career Milestones</p>
    <BasicInput name="milestones" onChange={handleChange} phcolor="grey" phweight={100} placeholder="Mention any significant milestones you have achieved or are striving to reach" custom="w-full mt-2" multiline rows={4}/>
    </form>
}