import { CardElement } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import styles from "styles/payment.module.css";
import { errorAnimation } from "utils/animations";

interface PaymentCardProps {}

const PaymentCard: React.FC<PaymentCardProps> = () => {
  const { processing, success, cardHolder, setCardHolder, handleCardChange } =
    useStore().paymentStore;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={errorAnimation}
      className="max-w-md"
    >
      <div
        className={`ml-0 m-4 border bg-cover rounded-2xl
        relative mb-12 ${success && "transition-all duration-500 ease-in-out"}`}
        style={{
          width: "calc(100% - 2.5rem)",
          paddingBottom: "calc((100% - 2rem) * 0.6)",
          backgroundImage: "url(/images/card.jpg)",
          boxShadow: "0 2rem 2rem -1rem rgba(255, 153, 0, 0.5)",
          filter: success ? "hue-rotate(80deg)" : "none",
        }}
      >
        <input
          disabled={processing || success}
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          type="text"
          placeholder="Name (as appears in card)"
          className="border-none bg-transparent text-white text-xl
          absolute top-8 left-8 font-extrabold focus:outline-none
          placeholder-white placeholder-opacity-75 w-full"
          style={{
            width: "calc(100% - 4rem)",
            textShadow:
              cardHolder != "" ? "1px 1px 2px rgba(26, 26, 44, 0.25)" : "none",
          }}
        />
        <CardElement
          className={styles.StripeElement}
          onChange={handleCardChange}
          options={{
            style: {
              base: {
                fontSize: "20px",
                fontWeight: "800",
                fontFamily: "Nunito Sans, sans-serif",
                iconColor: "#fff",
                color: "#fff",
                textShadow: "1px 1px 2px rgba(26,26,44,0.25)",
                "::placeholder": {
                  color: "rgba(255,255,255,0.75)",
                  textShadow: "none",
                },
                ":-webkit-autofill": {
                  color: "#fff",
                },
              },
              invalid: {
                color: "#fee",
                textShadow: "2px 2px 4px red",
              },
            },
          }}
        />
      </div>
    </motion.div>
  );
};

export default observer(PaymentCard);
