export default function SummaryCard(props){
    return  <div className="w-full grey rounded-md font-bold py-4  px-2 space-y-4 cursor-pointer text-zinc-400">
    <p>{props.title}</p>
    <p className="orange-text text-2xl">{props.amount}</p>
    <p className="text-sm"><span className={props.color}><i className={`bi ${props.icon}`}></i> 6.5% </span>{props.caption} vs last 30 days</p>
  </div>
}