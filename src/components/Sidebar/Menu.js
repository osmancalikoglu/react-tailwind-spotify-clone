import { CollectionIcon, HomeIcon, SearchIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to={"/"}
            className={(navData) =>
              "h-10 flex items-center gap-x-4 text-sm font-semibold hover:text-white px-4 rounded " +
              (navData.isActive ? "text-white bg-active" : "text-link")
            }
          >
            <HomeIcon className="w-6 h-6" />
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={(navData) =>
              "h-10 flex items-center gap-x-4 text-sm font-semibold hover:text-white px-4 rounded " +
              (navData.isActive ? "text-white bg-active" : "text-link")
            }
          >
            <SearchIcon className="w-6 h-6" />
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/collection"}
            className={(navData) =>
              "h-10 flex items-center gap-x-4 text-sm font-semibold hover:text-white px-4 rounded " +
              (navData.isActive ? "text-white bg-active" : "text-link")
            }
          >
            <CollectionIcon className="w-6 h-6" />
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
