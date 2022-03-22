import { PauseIcon, PlayIcon } from "@heroicons/react/solid";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrent } from "stores/player";

const SongItem = ({ item }) => {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);
  let isCurrentPlaying = false;
  if (current?.id === item.id && playing === true) isCurrentPlaying = true;
  else isCurrentPlaying = false;

  const imageStyle = (type) => {
    switch (type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";
      default:
        return "rounded";
    }
  };

  const updateCurrent = () => {
    current.id === item.id
      ? playing === true
        ? controls.pause()
        : controls.play()
      : dispatch(setCurrent(item));
  };

  return (
    <NavLink
      key={item.id}
      to="/"
      className="bg-footer p-4 rounded hover:bg-active focus:bg-active group"
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image}
          className={`absolute inset-0 w-full h-full object-cover ${imageStyle(
            item.type
          )}`}
        />
        {current?.id === item.id && playing === true ? (
          <button
            onClick={updateCurrent}
            className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center group-hover:flex group-focus:flex flex`}
          >
            <PauseIcon className="w-6 h-6" />
          </button>
        ) : (
          <button
            onClick={updateCurrent}
            className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center group-hover:flex group-focus:flex hidden`}
          >
            <PlayIcon className="w-6 h-6" />
          </button>
        )}
      </div>
      <h6 className="font-semibold truncate">{item.title}</h6>
      <p className="text-s line-clamp-2 mt-1">{item.description}</p>
    </NavLink>
  );
};
export default SongItem;
