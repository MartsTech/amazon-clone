import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import IsAuth from "features/auth/IsAuth";
import PaymentPage from "features/payment/PaymentPage";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import { useEffect } from "react";
import { useStore } from "stores/store";
import { elFonts } from "utils/data";

interface PaymentProps {}

const Payment: React.FC<PaymentProps> = () => {
  const { userDetails, loadUserDetails } = useStore().userStore;
  const { cartTotal } = useStore().cartStore;
  const { createNewPayment } = useStore().paymentStore;
  const [session] = useSession();

  useEffect(() => {
    if (!userDetails) {
      loadUserDetails(session?.user?.email as string);
    }
  }, [session?.user?.email, userDetails, loadUserDetails]);

  useEffect(() => {
    if (cartTotal > 1) {
      createNewPayment();
    }
  }, [cartTotal, createNewPayment]);

  return (
    <IsAuth>
      <Head>
        <title>Payment</title>
      </Head>
      <Elements
        options={{ fonts: elFonts }}
        stripe={loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)}
      >
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
