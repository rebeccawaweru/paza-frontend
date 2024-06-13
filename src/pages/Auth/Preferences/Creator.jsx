import AuthWrapper from "../../../layouts/AuthWrapper";
import { BasicInput, IconButton } from "../../../components";
export default function Creator(){
    const options = ['Art','Design','Fashion & Wearables', 'Film','Music','Photography','Other']
    return <AuthWrapper>
    <div className="flex flex-col mt-24 pb-8 items-center justify-center space-y-6 px-4 2xl:px-0 xl:px-0 lg:px-0 md:px-0 ">
    <div className="space-y-2 text-center">
    <p className="text-xl">Please Fill Up These Details</p>
    <p className="text-sm text-zinc-600 font-bold">How are you planning to use Paza? We’ll fit the experience to your needs.</p> 
    <p className="text-sm text-zinc-600 font-bold"> Don’t worry, you’ll be able to change this later on</p>
    </div>
    <div className="w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3 space-y-4">
    <p className="text-zinc-500 self-start text-sm">Creator Name</p>
    <BasicInput custom="w-full mt-2"/>
    <p className="text-zinc-500 self-start text-sm">About</p>
    <BasicInput custom="w-full mt-2"/>
    <p className="text-zinc-500 self-start text-sm">Area of Expertise/Niche/Category</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/>
    <div className="flex flex-wrap">
    {options.map((opt) => {
        return <div key={opt} className="rounded-3xl text-sm text-white font-semibold grey px-4 py-2 hover:bg-orange-600 cursor-pointer mr-2 my-2">{opt}</div>
    })}
    </div>
    <p className="text-zinc-500 self-start text-sm" >Other Skills</p>
    <BasicInput custom="w-full mt-2" start="bi bi-search text-white"/>
    <div className="flex flex-wrap">
    {options.map((opt) => {
        return <div key={opt} className="rounded-3xl text-sm text-white font-semibold grey px-4 py-2 hover:bg-orange-600 cursor-pointer mr-2 my-2">{opt}</div>
    })}
    </div>
    </div>
    <IconButton custom="orange font-bold text-black hover:bg-white" title="Next"/>
    </div>
    </AuthWrapper>
}