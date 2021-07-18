import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import PaymentItem from "./PaymentItem";

interface PaymentItemsProps {}

const PaymentItems: React.FC<PaymentItemsProps> = () => {
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
      <PaymentItem title={"Delivery Charges"} price={6.99} />
      <hr className="bg-[#acacad] my-4" />
      <PaymentItem title={"Total"} price={(cartTotal + 6.99).toFixed(2)} />
      <PaymentItem
        title={"Tax"}
        quantity={"+5%"}
        price={(cartTotal * 0.05).toFixed(2)}
      />
      <hr className="bg-[#acacad] my-4" />
      <PaymentItem
        title={"Grand Total"}
        price={(cartTotal + cartTotal * 0.05 + 6.99).toFixed(2)}
        total
      />
    </div>
  );
};

export default observer(PaymentItems);
