export default function Card(props){
    return   <div className="border w-full border-zinc-500 font-bold p-2 rounded-md text-xs flex flex-col items-center justify-center">
    <p className="text-zinc-400">{props.title}</p>
    <p className="text-zinc-300">{props.caption}</p>
  </div>
}