import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PaymentItem from "./PaymentItem";

interface PaymentItemsProps {}

const PaymentItems: React.FC<PaymentItemsProps> = () => {
  const { deliveryCharges } = useStore().paymentStore;
  const { cart, cartTotal } = useStore().cartStore;

  return (
    <div className="mt-6">
      {cart.map(({ id, title, price, quantity }) => (
        <PaymentItem
          key={id}
          title={title}
          price={(price * quantity).toFixed(2)}
          quantity={"x" + quantity}
        />
      ))}
      {deliveryCharges && (
        <PaymentItem title={"Delivery Charges"} price={10.0} />
      )}
      <hr className="bg-[#acacad] my-4" />
      <PaymentItem
        title={"Total"}
        price={(cartTotal + (deliveryCharges ? 10 : 0)).toFixed(2)}
      />
      <PaymentItem
        title={"Tax"}
        quantity={"+5%"}
        price={(cartTotal * 0.05).toFixed(2)}
      />
      <hr className="bg-[#acacad] my-4" />
      <PaymentItem
        title={"Grand Total"}
        price={(
          cartTotal +
          cartTotal * 0.05 +
          (deliveryCharges ? 10 : 0)
        ).toFixed(2)}
        total
      />
    </div>
  );
};

export default observer(PaymentItems);
