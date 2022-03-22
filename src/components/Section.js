import { NavLink } from "react-router-dom";
import SongItem from "./SongItem";

const Section = ({ title, more = false, items }) => {
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
          <SongItem item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section;
