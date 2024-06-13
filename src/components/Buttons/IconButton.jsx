export default function IconButton(props){
    const { title, handleClick, custom, icon} = props;
    return <button type="submit" className={`w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3 text-black  py-2 px-4 rounded-sm justify-center ${custom}`} onClick={handleClick}>{title}{icon}</button>
}