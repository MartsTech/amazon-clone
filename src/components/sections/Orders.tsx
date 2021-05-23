import Order from "@module/Order";
import { orderType } from "@type/orderType";
import FlipMove from "react-flip-move";

interface OrdersProps {
  orders: orderType[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  return (
    <>
      <h2>{orders.length} Orders</h2>

      <div className="mt-5 space-y-4">
        <FlipMove>
          {orders?.map((order) => (
            <Order key={order.id} data={order} />
          ))}
        </FlipMove>
      </div>
    </>
  );
};

export default Orders;
