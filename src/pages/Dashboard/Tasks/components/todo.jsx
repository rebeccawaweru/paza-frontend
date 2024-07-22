export default function Todo(props){
    return   <div key={props.key} className={`border-l border-l-8 ${props.status === 'Completed' ? 'border-green-700' : props.status === 'In Progress' ? 'border-orange-700' : 'border-red-800'} my-4`}>
    <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between items-center">
    <div className="px-4 w-full 2xl:w-1/2 xl:w-1/2 md:w-1/2  space-y-4">
    <div className="flex justify-between">
    <p>{props.title}</p>
    <p>{props.time}</p>
   
    </div>

    <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between">
    <p className={`${props.status === 'Completed' ? 'bg-green-700' : props.status === 'In Progress' ? 'bg-orange-700' : 'bg-red-800'} rounded-lg text-white text-sm p-2 font-bold`}>{props.status}</p>
    <p className="float-right text-zinc-400">Assigned To: <span className="text-white">{props.assignee}</span> </p>
    </div>
    </div>
    <button onClick={props.add} className="grey text-white px-4 py-2">+ Add Review</button>
    </div>    
    <hr className="border-zinc-700 mt-4 mx-2"></hr>  
</div>
}