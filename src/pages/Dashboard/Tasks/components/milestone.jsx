export default function Milestone(props) {
    return <div key={props.key} className="w-full flex items-center space-x-4 cursor-pointer hover:scale-90">
    <div className="h-8 w-8 rounded-full border border-4 border-zinc-700 p-4 grey"></div>
    <div className="w-full grey rounded-full p-4">
    <p className="text-orange-700 font-semibold">{props.title}</p>
      <p>{props.description}</p>  
    </div>
   </div>
}