import Searchbar from "@element/Searchbar";
import Logo from "@element/Logo";
import HeaderInfo from "@module/HeaderInfo";
import HeaderMenu from "@module/HeaderMenu";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="top-0 sticky z-50">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <Logo />
        <Searchbar />
        <HeaderInfo />
      </div>

      <HeaderMenu />
    </header>
  );
};

export default Header;
