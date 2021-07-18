interface PaymentShippingDetailsProps {}

const PaymentShippingDetails: React.FC<PaymentShippingDetailsProps> = ({}) => {
  return (
    <div
      className="p-8 my-8 mx-4 w-full bg-white rounded-lg
      shadow-sm max-w-[420px]"
    >
      <h5 className="text-xl font-semibold">Shipping Details</h5>
    </div>
  );
};

export default PaymentShippingDetails;
