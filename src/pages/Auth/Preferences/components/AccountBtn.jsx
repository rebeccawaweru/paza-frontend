export default function AccountBtn(props){
    return <div className={`w-full border ${props.border} rounded-md flex flex-col space-y-2 justify-center items-center p-6`}>
    <i className="bi bi-bag"></i>
    <p className="font-bold">{props.title}</p>
    <p className="text-sm text-zinc-600">{props.caption}</p>
   </div>
}