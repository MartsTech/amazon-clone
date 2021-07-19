import { observer } from "mobx-react-lite";
import ReactTooltip from "react-tooltip";
import { useStore } from "stores/store";
import CartItem from "./CartItem";

interface CartItemsProps {}

const CartItems: React.FC<CartItemsProps> = () => {
  const { cart } = useStore().cartStore;

  return (
    <div className="flex flex-col flex-[50%]">
      <ReactTooltip
        id="removeTooltip"
        place="right"
        backgroundColor="#dc143cee"
        effect="solid"
        className="!rounded-lg whitespace-nowrap"
      />
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default observer(CartItems);
