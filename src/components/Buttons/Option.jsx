export default function OptionBtn({opt}){
    return <div key={opt} className="rounded-3xl flex items-center justify-center space-x-2 text-sm text-white font-semibold grey p-2 hover:bg-orange-600 hover:scale-110 cursor-pointer mr-2 my-2"><p className="ml-2">{opt}</p><p><i className="bi bi-x"></i></p></div>

}