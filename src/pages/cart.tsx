import CartPage from "features/cart/CartPage";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { FC } from "react";

interface CartProps {}

const Cart: FC<CartProps> = () => (
  <>
    <Head>
      <title>Cart</title>
    </Head>
    <CartPage />
  </>
);

export default Cart;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
