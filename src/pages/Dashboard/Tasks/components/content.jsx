import TaskCard from "./task";
export default function TaskContent({data, handleView, display}){
    return(
        <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-4">
        <div className="space-y-4">
       <p className={`${display} font-semibold text-lg text-zinc-300`}>Under review <span className="rounded-full grey py-2 px-4 mx-8">{data && data.length > 0 && data.filter(item=>item.status === 'Under review').length}</span></p>
          {data && data.length > 0 && data.filter(item => item.status === 'Under review').map((item) => {
            return  <TaskCard key={item._id} id={item._id} task={item.task} status={item.status} start={item.start} due={item.due} display={display} handleView={handleView}/>
          })}
          </div>
          <div className="space-y-4">
          <p className={`${display} font-semibold text-lg text-zinc-300`}>In Progress <span className="rounded-full grey py-2 px-4 mx-8">{data && data.length > 0 && data.filter(item=>item.status === 'In Progress').length}</span></p>
          {data && data.length > 0 && data.filter(item => item.status === 'In Progress').map((item) => {
             return  <TaskCard key={item._id} id={item._id} task={item.task} status={item.status} start={item.start} due={item.due} display={display} handleView={handleView}/>
          })}
          </div>
          <div className="space-y-4">
          <p className={`${display} font-semibold text-lg text-zinc-300`}>Completed<span className="rounded-full grey py-2 px-4 mx-8">{data && data.length > 0 && data.filter(item=>item.status === 'Completed').length}</span></p>
          {data && data.length > 0 && data.filter(item => item.status === 'Completed').map((item) => {
            return  <TaskCard key={item._id} id={item._id} task={item.task} status={item.status} start={item.start} due={item.due} display={display} handleView={handleView}/>

          })}
          </div>
        </div>
    )
}