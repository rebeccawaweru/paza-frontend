export default function AccountBtn(props){
    return <div onClick={props.onClick} className={`w-full border text-center ${props.border} cursor-pointer hover:scale-90 rounded-md flex flex-col space-y-2 justify-center items-center px-2 py-10`}>
    <i className="bi bi-bag"></i>
    <p className="font-bold ">{props.title}</p>
    <p className="text-sm text-zinc-600">{props.caption}</p>
   </div>
}