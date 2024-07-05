export default function Card(props){
    return   <div onClick={props.onClick} className="rounded-md hover:bg-orange-600  cursor-pointer text-white text-sm text-center relative p-2 h-full space-y-4 border border-orange-500">
    <p className="font-bold">{props.title}</p>
    <p className="relative 2xl:absolute xl:absolute lg:absolute md:absolute bottom-2 left-0 right-0 text-xs">{props.caption}</p>
    </div>
}