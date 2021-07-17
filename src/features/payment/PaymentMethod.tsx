import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PaymentCard from "./PaymentCard";
import PaymentError from "./PaymentError";

interface PaymentMethodProps {}

const PaymentMethod: React.FC<PaymentMethodProps> = () => {
  const { paymentMethod, error } = useStore().paymentStore;

  return (
    <div className="flex-[60%] mr-12 flex flex-col">
      <h5 className="mt-8">How would you like to pay?</h5>
      <p className="mb-8 max-w-[400px]">
        Choose a payment method and verify your details to successfully place
        the order.
      </p>
      {paymentMethod === "card" && <PaymentCard />}
      {error && <PaymentError error={error} />}
    </div>
  );
};

export default observer(PaymentMethod);
