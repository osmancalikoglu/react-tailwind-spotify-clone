import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => navigate(-1)}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
        <ChevronRightIcon onClick={() => navigate(1)} className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navigation;
