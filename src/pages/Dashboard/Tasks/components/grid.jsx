export default function GridBox(props){
    return   <div className={`${props.custom} h-36 grey flex flex-col items-center justify-center space-y-4 rounded-md p-4  cursor-pointer hover:scale-90`}>
    <p className="text-2xl text-white">{props.title}</p>
    <p className={`${props.caption === 'Done' ? 'bg-green-500' : props.caption === 'In Progress' ? 'bg-orange-700' : props.caption === 'On Review' ? 'bg-red-800' : 'text-3xl'} py-1 px-4 text-white font-semibold rounded-full`}>{props.caption}</p>
   </div>
}