import { useContext } from "react"
import { BasicInput, IconButton } from "../../../../../components"
import { AuthContext } from "../../../../../layouts/AuthWrapper";
import { Validity } from "../../../../../utils/helpers";
export default function Step2({dispatch}){
    const {state2, handleChange} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = Validity(e)
        if (isValid) {
           dispatch({type:'Next'})
        }
    }
    return <form onSubmit={handleSubmit} className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">Company Name</p>
    <BasicInput name="company" onChange={handleChange} value={state2.company}  required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Company Email</p>
    <BasicInput name="email" type="email" onChange={handleChange} value={state2.email}  required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Company Website</p>
    <BasicInput name="website" onChange={handleChange} value={state2.website}  required custom="w-full mt-2"/>
    <div className="w-full grid grid-cols-2 gap-2">
        <div>
        <p className="text-zinc-400 self-start text-sm">Contact Info</p>
        <BasicInput name="phone" type="number" onChange={handleChange} value={state2.phone} placeholder="+254" required custom="w-full mt-2" start="bi bi-telephone-fill text-white"/>
        </div>
        <div>
        <p className="text-zinc-400 self-start text-sm">Company Address</p>
        <BasicInput name="location" onChange={handleChange} value={state2.location} required custom="w-full mt-2" start="bi bi-geo-alt-fill text-white" placeholder="Location"/>
        </div>
    </div>
    <p className="text-zinc-400 self-start text-sm">Role in company</p>
    <BasicInput name="role" onChange={handleChange} value={state2.role} custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Platforms</p>
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2">
    <BasicInput value={state2.instagram} name="instagram" onChange={handleChange} custom="w-full mt-2" start="bi bi-instagram text-white"/>
    <BasicInput  value={state2.tiktok} name="tiktok" onChange={handleChange} custom="w-full mt-2" start="bi bi-tiktok text-white"/>
    <BasicInput  value={state2.twitter} name="twitter" onChange={handleChange} custom="w-full mt-2" start="bi bi-twitter text-white"/>
    <BasicInput  value={state2.youtube} name="youtube" onChange={handleChange} custom="w-full mt-2" start="bi bi-youtube text-white"/>
    <BasicInput  value={state2.linkedin} name="linkedin" onChange={handleChange} custom="w-full mt-2" start="bi bi-linkedin text-white"/>
    <BasicInput  value={state2.facebook} name="facebook" onChange={handleChange} custom="w-full mt-2" start="bi bi-facebook text-white"/>
    </div>    
    <div className="w-full flex justify-between">
    <IconButton handleClick={()=>dispatch({type:"Prev"})} custom="grey font-bold text-zinc-400 hover:bg-white hover:text-black" title="Previous"/>
    <IconButton type="submit"  custom="w-full orange font-semibold text-black hover:bg-white" title="Next" icon={<i className="bi bi-arrow-right-short mx-2"></i>}/>
    </div>
    </form>
}