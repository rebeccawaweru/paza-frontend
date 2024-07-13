export default function BasicLabel(props){
    return <p className="text-sm text-zinc-400 mb-2">{props.title} <span className={`text-red-500 ${props.custom}`}>*</span></p>
}