export default function Feed(){
    const titles = ['Jobs', 'Collaborations', 'Projects', 'Proposals']
    return   <div className="text-sm space-y-4">
    <p className="text-zinc-500 font-bold">Lets see an overview of your activity here <span className="mx-4 text-white">Share <i className="bi bi-arrow-up-right"></i></span></p>
    <div className="grey rounded-md p-4 grid grid-cols-4 gap-4">
        <p>Ongoing Jobs</p>
        <p>Ongoing Projects</p>
        <p>Campaigns</p>
        <p>All Stats</p>
    </div>
    <div className="rounded-md grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-4">
     {titles.map((title)=>{
        return<div key={title} className="space-y-12 text-zinc-400 font-bold border border-zinc-500 rounded-md p-2">
        <div className="flex items-center justify-between">
            <p>{title}</p>
            <i className="bi bi-three-dots"></i>
        </div>
        <div>
        <p className="text-lg font-bold text-white">999</p>
        <p className="text-xs">+ last month</p>
        </div>
    </div>
    })}
    </div>
 </div>
}