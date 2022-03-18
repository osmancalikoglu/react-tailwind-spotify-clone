import { Menu } from "@headlessui/react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const User = () => {
  const user = {
    name: "Osman Çalıkoğlu",
    avatar: "https://avatars.githubusercontent.com/u/27975582?v=4",
  };
  return (
    <Menu as="nav" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 pr-2 rounded-3xl ${
              open ? "bg-active" : "bg-black"
            }`}
          >
            <img className="w-8 h-8 rounded-full p-px mr-2" src={user.avatar} />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <ChevronDownIcon
              className={`w-5 h-5 ${open && "rotate-180"} transition`}
            />
          </Menu.Button>
          <Menu.Items className="absolute top-full right-0 w-48 p-1 bg-active rounded translate-y-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center justify-between px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Account
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  }`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="#"
                >
                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default User;
