import Button from "components/buttons/Button";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import { errorAnimation } from "utils/animations";

interface PaymentSuccessSummaryProps {}

const PaymentSuccessSummary: React.FC<PaymentSuccessSummaryProps> = () => {
  const { orderId } = useStore().paymentStore;
  const router = useRouter();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={errorAnimation}
      className="flex-[40%] max-w-[40%] bg-white 
      rounded-lg shadow-lg self-start p-8"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading="lazy" src="/images/success.svg" alt="success" />
      <h5 className="font-semibold text-xl">Yay, it is done!</h5>
      {orderId && <p>Order ID: {orderId}</p>}
      <p>
        Your payment has been successfully processed and we have received your
        order. Check your email for further details.
      </p>
      <Button
        onClick={() => router.replace("/orders")}
        variant="primary"
        className={`mt-8 w-full uppercase`}
      >
        My Orders
      </Button>
    </motion.div>
  );
};

export default observer(PaymentSuccessSummary);
