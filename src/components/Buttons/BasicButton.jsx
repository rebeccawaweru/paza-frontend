export default function BasicButton(props){
    const { title, handleClick, width} = props;
    return <button type="submit" className={`orange text-black font-bold text-sm py-2 px-4 rounded-md ${width}`} onClick={handleClick}>{title}</button>
}