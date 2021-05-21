import CheckoutTemplate from "@template/CheckoutTemplate";
import Head from "next/head";

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Amazon clone created with Next.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CheckoutTemplate />
    </>
  );
};

export default Checkout;
