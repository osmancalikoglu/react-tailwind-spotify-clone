import { PlayIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

const Section = ({ title, more = false, items }) => {
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
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more ?? "#"} className="hover:underline">
          <h3 className="text-2xl text-white font-semibold tracking-tight">
            {title}
          </h3>
        </NavLink>
        {more && (
          <NavLink
            className="text-xs font-semibold uppercase text-link hover:underline tracking-wider"
            to={more}
          >
            See all
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
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
              <button className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center hidden group-hover:flex group-focus:flex">
                <PlayIcon className="w-6 h-6" />
              </button>
            </div>
            <h6 className="font-semibold truncate">{item.title}</h6>
            <p className="text-s line-clamp-2 mt-1">{item.description}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Section;
