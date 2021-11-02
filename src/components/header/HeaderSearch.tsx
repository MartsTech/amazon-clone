import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import OnOutsideClick from "components/layouts/OutsideClick";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import HeaderResults from "./HeaderResults";

interface HeaderSearchProps {}

const HeaderSearch: React.FC<HeaderSearchProps> = () => {
  const { searchQuery, setSearchQuery, closeResults, resultsOpen } =
    useStore().searchStore;

  return (
    <OnOutsideClick opened={resultsOpen} onClose={closeResults}>
      <div
        className="py-[0.33rem] pr-[0.15rem] pl-[0.66rem] bg-white
        shadow-md rounded-lg text-sm flex items-center relative
        sm:mr-4 w-full sm:w-auto"
      >
        <SearchRoundedIcon className="opacity-75 transform scale-95" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-none border-none flex-grow px-2 focus:outline-none
        placeholder-[#1a1a2c] placeholder-opacity-50"
        />
      </div>
      <HeaderResults />
    </OnOutsideClick>
  );
};

export default observer(HeaderSearch);
