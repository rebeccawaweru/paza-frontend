export default function Feed(){
    const titles = ['Campaigns', 'Tasks', 'Proposals']
    return   <div className="text-sm space-y-4">
    <p className="text-zinc-500 font-bold">Lets see an overview of your activity here <span className="mx-4 text-white">Share <i className="bi bi-arrow-up-right"></i></span></p>
    <div className="grey rounded-md p-4 grid grid-cols-4 gap-4">
        <p>Ongoing Jobs</p>
        <p>Ongoing Projects</p>
        <p>Campaigns</p>
        <p>All Stats</p>
    </div>
    <div className="rounded-md grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-4">
     {titles.map((title)=>{
        return<div key={title} className="space-y-4 text-sm h-auto text-zinc-400 font-bold border border-zinc-500 rounded-md p-2">
        <div className="flex items-center justify-between">
            <p>{title}</p>
            <i className="bi bi-three-dots"></i>
        </div>
        <p className="text-2xl text-white font-bold">54 <span className="text-xs text-zinc-400 font-bold">{title} completed</span></p>
        <p className="text-lg text-orange-700 font-bold">3 <span className="text-xs font-bold">{title} in progress</span></p>
        <p>July</p>
       
    </div>
    })}
    </div>
 </div>
}