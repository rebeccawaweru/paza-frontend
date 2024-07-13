export default function BasicButton(props) {
  const { title, handleClick, custom } = props;
  return (
    <button
      type="submit"
      className={`orange text-black hover:bg-white font-bold py-2 px-4 rounded-sm hover:scale-90 ${custom}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
