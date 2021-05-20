import { SearchIcon } from "@heroicons/react/outline";

interface SearchbarProps {}

const Searchbar: React.FC<SearchbarProps> = ({}) => {
  return (
    <div
      className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer
          bg-yellow-400 hover:bg-yellow-500"
    >
      <input
        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
        type="text"
      />
      <SearchIcon className="h-12 p-4" />
    </div>
  );
};

export default Searchbar;
