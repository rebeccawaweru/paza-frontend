export default function Todo(props){
    return     <div key={props.key} className={`border-l border-l-8 ${props.status === 'Completed' ? 'border-green-700' : 'border-orange-700'} my-4`}>
    <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between items-center">
    <div className="px-4 w-full 2xl:w-1/2 xl:w-1/2 md:w-1/2  space-y-4">
    <div className="flex justify-between">
    <p>{props.title}</p>
    <p>{props.time}</p>
    </div>
    <div className="block 2xl:flex xl:flex lg:flex md:flex justify-between">
    <p className={`${props.status === 'Completed' ? 'bg-green-700' : 'bg-orange-700'} rounded-lg text-white text-sm p-2`}>{props.status}</p>
    <p className="float-right text-zinc-400">Assigned To: <span className="text-white">{props.assignee}</span> </p>
    </div>
    </div>

    <div className="hidden 2xl:flex xl:flex lg:flex md:flex space-x-4 text-lg cursor-pointer">
    <i className="bi bi-pen-fill text-green-500" onClick={props.edit}></i>
    <i className="bi bi-trash-fill text-red-500" onClick={props.delete}></i>
    </div>
     {props.status === 'In Progress' &&
    <button onClick={props.complete} className="p-2 border rounded-md hover:bg-white hover:text-black hover:scale-90"><i className="bi bi-check-circle-fill mr-2 text-green-700"></i>Mark as complete</button>
     }
    </div>    
    <hr className="border-zinc-700 mt-4 mx-2"></hr>  
</div>
}