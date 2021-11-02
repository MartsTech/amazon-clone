import { Order as OrderType } from "types/order";
import OrderAmount from "./OrderAmount";
import OrderItem from "./OrderItem";

interface OrderProps {
  order: OrderType;
}

const Order: React.FC<OrderProps> = ({
  order: { created, type, items, amount },
}) => {
  return (
    <div
      className="w-full lg:max-w-sm xl:max-w-[350px] 
      m-4 self-stretch flex flex-col shadow-lg"
    >
      <h5 className="text-xl font-semibold">Order ID: {created}</h5>
      <p>
        Payment Method: {type === "cash" && "Cash"}
        {type === "card" && "Card"}
      </p>
      <div
        className="flex overflow-scroll my-4 flex-1 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
      <OrderAmount amount={amount} />
    </div>
  );
};

export default Order;
