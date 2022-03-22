import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "stores/player";

const SidebarCover = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.player.current);

  return (
    <div className="pt-[100%] bg-black relative group">
      <img
        src={current?.image}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 flex items-center justify-center bg-black opacity-0 rounded-full -rotate-90 absolute top-1 right-1 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06]"
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
export default SidebarCover;
