const Playlists = () => {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto overflow-y-auto border-t border-opacity-20 border-white">
      <ul className="flex flex-col">
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              22. Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Playlists;
