import { useLocation } from "react-router-dom";
import Navigation from "./Navbar/Navigation";
import User from "./Navbar/User";

const Navbar = () => {
  const searchRoute = useLocation().pathname === "/search";
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchRoute && <div>search</div>}
      <User />
    </nav>
  );
};

export default Navbar;
