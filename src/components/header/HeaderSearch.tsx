import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

interface HeaderSearchProps {}

const HeaderSearch: React.FC<HeaderSearchProps> = () => {
  const {
    searchStore: { searchQuery, setSearchQuery },
  } = useStore();
  return (
    <div
      className="relative py-[0.33rem] pr-[0.15rem] pl-[0.66rem] bg-white
        shadow-md rounded-lg text-sm sm:mr-4 flex items-center w-1/2 sm:w-auto"
    >
      <SearchRoundedIcon className="opacity-75 transform scale-95" />
      <input
        className="bg-transparent border-none flex-grow px-2 focus:outline-none
        placeholder-[#1a1a2c] placeholder-opacity-50"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default observer(HeaderSearch);
