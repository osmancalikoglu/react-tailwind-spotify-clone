import { PlusIcon, HeartIcon } from "@heroicons/react/solid";
import logo from "img/logo.svg";
import DownloadApp from "./Sidebar/DownloadApp";
import Menu from "./Sidebar/Menu";
import Playlists from "./Sidebar/Playlists";

const Sidebar = () => {
  return (
    <aside className="w-60 pt-6 flex flex-col bg-black">
      <a href="#" className="mb-5 px-6">
        <img src={logo} className="h-10" />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center gap-x-4 text-sm text-link hover:text-white font-semibold group"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-white bg-opacity-60 text-black rounded-sm group-hover:bg-opacity-100">
                <PlusIcon className="w-3 h-3 text-black" />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center gap-x-4 text-sm text-link hover:text-white font-semibold group"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-br to-blue-300 from-purple-700 text-white rounded-sm opacity-60 group-hover:opacity-100">
                <HeartIcon className="w-3 h-3" />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlists />
      <DownloadApp />
    </aside>
  );
};

export default Sidebar;
