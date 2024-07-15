export default function Detail(props){
    return <div className={`${props.view ? 'w-1/2 -top-16 right-0 duration-1000 h-auto transition-width ' : 'w-0 '} -right-10 absolute text-sm p-4 grey space-y-8 z-50`}>
    <div className="flex justify-between">
    <h2 className="font-bold text-2xl">{props.task}</h2>
    <i className="bi bi-x-lg cursor-pointer" onClick={props.close}></i>
    </div>
 
    <p className="text-zinc-400">Status: <span className={`${props.status === 'In Progress' ? 'bg-orange-700' : props.status === 'Completed' ? 'bg-green-500 ' : 'bg-black'} text-white text-sm mx-2 p-2`}>{props.status}</span></p>
    <p className="text-zinc-400">Milestone: </p>
    <div className="flex space-x-8">
    <p className="text-zinc-400">Budget: Ksh. {props.budget && props.budget.toLocaleString()} </p>
    <p className="text-zinc-400">Spent: </p>
    </div>
    <div className="flex space-x-8">
    <p className="text-zinc-400">Start Date: {props.start}</p>
    <p className="text-zinc-400">End Date: {props.due}</p>
    </div>
    <p className="text-zinc-400">Priority: </p>
    <p className="text-zinc-400">Labels: </p>
    <div className="flex space-x-8">
    <p className="text-zinc-400">Created by: </p>
    <p className="text-zinc-400">Teams: </p>
    </div>
    <div>
    <p className="text-zinc-200 font-bold mb-2">Description </p>
    <p className="text-zinc-400 text-semibold">{props.description}</p>
    </div>

    <p className="text-zinc-200 font-semibold">Attachments: </p>
    <div className="border border-zinc-500 rounded-md h-24 w-3/4"></div>
    <div className="flex space-x-8 border-b border-zinc-500 pb-2 w-3/4">
        <p>Comments</p>
        <p>Activity</p>
        <p>To-Do Lists</p>
        <p>Milestones</p>
    </div>
   </div>
}