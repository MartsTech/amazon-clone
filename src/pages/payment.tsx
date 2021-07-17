import { Elements } from "@stripe/react-stripe-js";
import IsAuth from "features/auth/IsAuth";
import PaymentPage from "features/payment/PaymentPage";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { useStore } from "stores/store";
import { elFonts } from "utils/data";

interface PaymentProps {}

const Payment: React.FC<PaymentProps> = () => {
  const { stripePromise } = useStore().paymentStore;

  return (
    <IsAuth>
      <Head>
        <title>Payment</title>
      </Head>
      <Elements options={{ fonts: elFonts }} stripe={stripePromise}>
        <PaymentPage />
      </Elements>
    </IsAuth>
  );
};

export default observer(Payment);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
