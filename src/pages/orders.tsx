import IsAuth from "features/auth/IsAuth";
import OrdersPage from "features/orders/OrdersPage";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import { useEffect } from "react";
import { useStore } from "stores/store";

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = () => {
  const { orders, loadOrders } = useStore().ordersStore;
  const [session] = useSession();

  useEffect(() => {
    if (orders.length === 0 && session?.user?.email) {
      loadOrders(session.user.email);
    }
  }, [orders, loadOrders, session?.user?.email]);

  return (
    <IsAuth>
      <Head>
        <title>Orders</title>
      </Head>
      <OrdersPage />
    </IsAuth>
  );
};

export default observer(Orders);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
