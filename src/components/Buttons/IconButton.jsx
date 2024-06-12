export default function IconButton(props){
    const { title, handleClick, custom, icon} = props;
    return <button type="submit" className={`w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3 text-black  py-2 px-4 rounded-sm justify-center ${custom}`} onClick={handleClick}>{title}{icon}</button>
}