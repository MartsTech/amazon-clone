import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PaymentButtons from "./PaymentButtons";
import PaymentItems from "./PaymentItems";

interface PaymentSummaryProps {}

const PaymentSummary: React.FC<PaymentSummaryProps> = () => {
  const { orderId } = useStore().paymentStore;

  return (
    <div
      className="flex-[40%] max-w-[40%] bg-white 
      rounded-lg shadow-lg self-start p-8"
    >
      <h5 className="text-xl font-semibold">Order Summary</h5>
      <p>Order ID: {orderId ? orderId : "Generating..."}</p>
      <PaymentItems />
      <PaymentButtons />
    </div>
  );
};

export default observer(PaymentSummary);
