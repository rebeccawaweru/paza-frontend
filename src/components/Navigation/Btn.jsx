export default function Btn(props){
    return<div className="w-full hidden 2xl:flex xl:flex lg:flex md:flex justify-between border border-zinc-500 text-sm rounded-md p-2 cursor-pointer hover:scale-90">
    <p className="font-bold"><span><i className="bi bi-people mx-2"></i></span>{props.title}</p>
    <i className="bi bi-chevron-down text-xs cursor-pointer"></i>
  </div>
}