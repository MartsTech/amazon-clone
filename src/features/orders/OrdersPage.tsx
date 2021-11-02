import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { pageSlide, pageTransition } from "utils/animations";
import Order from "./Order";

interface OrdersPageProps {}

const OrdersPage: React.FC<OrdersPageProps> = () => {
  const { orders } = useStore().ordersStore;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
      className="py-12 px-5 xs:p-12 xs:py-20"
    >
      <h4 className="text-2xl font-semibold mb-12">Your Orders</h4>
      <div
        className="w-full -ml-4 flex flex-col lg:grid 
        lg:grid-cols-2 xl:grid-cols-3"
      >
        {orders.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </motion.div>
  );
};

export default observer(OrdersPage);
