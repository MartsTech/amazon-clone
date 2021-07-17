import CartPage from "features/cart/CartPage";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <CartPage />
    </>
  );
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
