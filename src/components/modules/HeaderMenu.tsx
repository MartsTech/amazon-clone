import { MenuIcon } from "@heroicons/react/outline";

interface HeaderMenuProps {}

const HeaderMenu: React.FC<HeaderMenuProps> = ({}) => {
  return (
    <div
      className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3
          p-2 pl-6"
    >
      <p className="link flex items-center">
        <MenuIcon className="h-6 mr-1" />
        All
      </p>
      <p className="link">Prime Video</p>
      <p className="link">Amazon Business</p>
      <p className="link">Today's Deals</p>
      <p className="link hidden lg:inline-flex">Electronics</p>
      <p className="link hidden lg:inline-flex">Food & Grocery</p>
      <p className="link hidden lg:inline-flex">Prime</p>
      <p className="link hidden lg:inline-flex">Buy Again</p>
      <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      <p className="link hidden lg:inline-flex">Health & Personal Care</p>
    </div>
  );
};

export default HeaderMenu;
