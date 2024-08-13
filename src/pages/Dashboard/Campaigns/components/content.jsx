export default function Content(){
    return (
        <div className="grey px-4 py-6 block 2xl:flex xl:flex lg:flex md:flex items-center justify-between rounded-md cursor-pointer hover:border hover:border-zinc-500">
            <div className="space-y-2">
            <p className="font-semibold text-lg">Safaricom Jazz Campaign For Worlds Aid Day</p>
            <div className="flex space-x-2 text-xs">
            <p className="bg-green-800 rounded-lg px-4">Open</p>
            <p className="text-zinc-500">posted a month ago</p>
            </div>
            </div>
            <div className="flex flex-wrap space-x-2 mt-4 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0"> 
                <div className="border border-zinc-600 rounded-md space-y-2 p-2 flex flex-col text-center items-center text-sm"><p className="text-orange-700 font-semibold">23</p><p>Creators</p></div>
                <div className="border border-zinc-600 rounded-md space-y-2 p-2 flex flex-col text-center items-center text-sm"><p className="text-orange-700 font-semibold">Ksh. 34,000</p><p>Amount Spent</p></div>
                <div className="border border-zinc-600 rounded-md space-y-2 p-2 flex flex-col text-center items-center text-sm"><p className="text-orange-700 font-semibold">Deliverables</p><p>23</p></div>

            </div>
        </div>
    )
}