import HeaderBackButton from "./HeaderBackButton";
import HeaderLanguages from "./HeaderLanguages";
import HeaderResults from "./HeaderResults";
import HeaderSearch from "./HeaderSearch";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="relative p-6 sm:p-12 sm:pb-0 flex items-center justify-end">
      <HeaderBackButton />
      <HeaderSearch />
      <HeaderResults />
      <HeaderLanguages />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-8 ml-4 hidden sm:inline"
        src={"/icons/logo.svg"}
        alt="logo"
      />
    </div>
  );
};

export default Header;
