export default function Milestone(props) {
    return <div key={props.key} onClick={props.onClick} className="w-full flex items-center space-x-4 cursor-pointer hover:scale-90">
    <div className={`${props.status === 'In Progress' ? 'border-orange-700 orange' : 'border-green-700 bg-green-500 '} ${props.category === 'Major Milestone' ? 'h-4 w-4 p-4' : 'h-2 w-2 p-2'} rounded-full border border-8 `}></div>
    <div className="w-full grey rounded-full p-4">
    <p className={`${props.status === 'In Progress' ? 'text-orange-700' : 'text-green-500'} font-bold`}>{props.title}</p>
      <p>{props.description}</p>  
    </div>
   </div>
}