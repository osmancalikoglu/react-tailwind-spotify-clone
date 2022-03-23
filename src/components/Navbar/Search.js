import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="w-12 h-10 flex items-center justify-center absolute top-0 left-0 text-black"
      >
        <SearchIcon className="w-6 h-6" />
      </label>
      <input
        type="text"
        autoFocus={true}
        id="search-input"
        className="h-10 bg-white rounded-3xl placeholder-black/50 text-sm w-96 max-w-full pl-12 outline-none text-black font-medium"
        placeholder="Sanatçılar, şarkılar ve podcast'ler"
      />
    </div>
  );
};

export default Search;
