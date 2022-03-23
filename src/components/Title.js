import { NavLink } from "react-router-dom";

const Title = ({ title, more = false }) => {
  return (
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
  );
};

export default Title;
