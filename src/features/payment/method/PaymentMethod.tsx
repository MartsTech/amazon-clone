import FormCheck from "components/form/FormCheck";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PaymentCard from "./PaymentCard";
import PaymentError from "./PaymentError";
import PaymentShippingDetails from "./PaymentShippingDetails";

interface PaymentMethodProps {}

const PaymentMethod: React.FC<PaymentMethodProps> = () => {
  const { paymentMethod, setPaymentMethod, error } = useStore().paymentStore;

  return (
    <div className="flex-[60%] mr-12 flex flex-col">
      <h5 className="mt-8 font-semibold text-xl">How would you like to pay?</h5>
      <p className="mb-8 max-w-[400px] font-normal">
        Choose a payment method and verify your details to successfully place
        the order.
      </p>
      {paymentMethod === "card" && <PaymentCard />}
      {error && <PaymentError error={error} />}
      <FormCheck
        name="method"
        label="Cash on Delivery"
        type="radio"
        value={paymentMethod === "card"}
        onClick={() => setPaymentMethod("card")}
      />
      <FormCheck
        name="method"
        label="Cash on Delivery"
        type="radio"
        value={paymentMethod === "cash"}
        onClick={() => setPaymentMethod("cash")}
      />
      <PaymentShippingDetails />
    </div>
  );
};

export default observer(PaymentMethod);
