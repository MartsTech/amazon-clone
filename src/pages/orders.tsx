import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface OrdersProps {}

const Orders: React.FC<OrdersProps> = () => {
  return (
    <Head>
      <title>Orders</title>
    </Head>
  );
};

export default Orders;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
