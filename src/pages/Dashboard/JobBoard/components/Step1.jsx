import { useContext } from "react"
import { BasicInput, BasicButton } from "../../../../components"
import { JobContext } from "../Board"
export default function Step1(){
    const {setStep, handleSubmit} = useContext(JobContext)
    return <form onSubmit={handleSubmit} className="space-y-6 p-4 text-center">
        <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-bold">Let's start with a strong title</p>
        <p className="text-zinc-500 w-3/4 font-bold text-sm">A good title helps your post stand out to the right candidates. It's the first thing they see, make it good</p>
        </div>
     <BasicInput name="title" custom="w-full grey" placeholder="Job Title" phcolor="grey" phweight={600} required/>
     <BasicInput name="description" custom="w-full grey" placeholder="About / Description" multiline rows={5} phcolor="grey" phweight={600} required/>
     <div className="flex justify-between">
     <p className="font-bold text-orange-700">Cancel</p>
     <BasicButton custom="float-right" title="Next Step"/>
     </div>
    </form>
}