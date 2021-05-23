import { db } from "@config/firebase";
import Orders from "@section/Orders";
import OrdersTemplate from "@template/OrdersTemplate";
import { orderType } from "@type/orderType";
import moment from "moment";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import Stripe from "stripe";

interface OrdersPageProps {
  orders: orderType[];
}

const OrdersPage: React.FC<OrdersPageProps> = ({ orders }) => {
  return (
    <>
      <Head>
        <title>Orders</title>
        <meta name="description" content="Amazon clone created with Next.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrdersTemplate Orders={<Orders orders={orders} />} />
    </>
  );
};

export default OrdersPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await db
    .collection("users")
    .doc(session.user?.email as string)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(
      async (order) =>
        ({
          id: order.id,
          amount: order.data().amount,
          amount_shipping: order.data().amount_shipping,
          images: order.data().images,
          timestamp: moment(order.data().timestamp.toDate()).unix(),
          items: (
            await stripe.checkout.sessions.listLineItems(order.id, {
              limit: 100,
            })
          ).data,
        } as orderType)
    )
  );

  return {
    props: {
      orders,
      session,
    },
  };
};
