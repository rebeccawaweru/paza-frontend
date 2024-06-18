import { BasicInput } from "../../../../../components"
export default function Step2(){
    return <form className="space-y-4">
    <p className="text-zinc-400 self-start text-sm">Company Name</p>
    <BasicInput name="name"  required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Company Email</p>
    <BasicInput name="email"  required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Company Website</p>
    <BasicInput name="website"  required custom="w-full mt-2"/>
    <div className="w-full grid grid-cols-2 gap-2">
        <div>
        <p className="text-zinc-400 self-start text-sm">Contact Info</p>
        <BasicInput name="phone" placeholder="+254" required custom="w-full mt-2" start="bi bi-telephone-fill text-white"/>
        </div>
        <div>
        <p className="text-zinc-400 self-start text-sm">Company Address</p>
        <BasicInput name="location" required custom="w-full mt-2" start="bi bi-geo-alt-fill text-white" placeholder="Location"/>
        </div>
    </div>
    <p className="text-zinc-400 self-start text-sm">Role in company</p>
    <BasicInput name="role"  required custom="w-full mt-2"/>
    <p className="text-zinc-400 self-start text-sm">Platforms</p>
    <BasicInput name="link" placeholder="Add Links" phweight={100}  required custom="w-full mt-2"/>
    </form>
}