export default function TaskCard(){
    return  <div className="grey p-4 text-sm space-y-6 text-zinc-300 rounded-md">
    <div className="flex space-x-2 items-center relative">
    <i className="bi bi-circle"></i>
    <p className="font-semibold">Creating a new app</p>
    <i className="bi bi-three-dots-vertical absolute right-2"></i>
    </div>
    <div className="flex items-center justify-between">
    <div className="bg-green-500 rounded-full text-sm py-2 px-4">Completed</div>
    <hr className="w-full mx-2 2xl:w-36 xl:w-36 lg:w-36 md:w-24 h-2 border-none bg-green-500 rounded-md"></hr>100%
    </div>
    <div className="flex items-center space-x-4 text-xs">
    <div><i className="bi bi-calendar mr-2"></i>Start date: 14/07/2024</div>
    <div><i className="bi bi-calendar mr-2"></i>End date: 15/07/2024</div>
    </div>
  </div>
}