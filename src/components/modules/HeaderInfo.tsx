import Badge from "@element/Badge";
import { ShoppingCartIcon } from "@heroicons/react/outline";

interface HeaderInfoProps {}

const HeaderInfo: React.FC<HeaderInfoProps> = ({}) => {
  return (
    <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
      <div className="link">
        <p>Hello Martin Velkov</p>
        <p className="font-extrabold md:text-sm">Account & Lists</p>
      </div>

      <div className="link">
        <p>Returns</p>
        <p className="font-extrabold md:text-sm">& Orders</p>
      </div>

      <div className="relative link flex items-center">
        <Badge count={0} />
        <ShoppingCartIcon className="h-10" />
        <p className="hidden md:inline font-extrabold md:text-sm mt-2">
          Basket
        </p>
      </div>
    </div>
  );
};

export default HeaderInfo;
