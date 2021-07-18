interface PaymentItemProps {
  title: string;
  price: number | string;
  quantity?: string;
  total?: boolean;
}

const PaymentItem: React.FC<PaymentItemProps> = ({
  title,
  price,
  quantity,
  total = false,
}) => {
  return (
    <div className="flex w-full items-end overflow-hidden">
      <span className="truncate" suppressHydrationWarning>
        {title}
      </span>
      {quantity && <small className="pl-1 opacity-50">{quantity}</small>}
      <span className="whitespace-nowrap ml-auto pl-4">
        {total ? (
          <strong className="text-xl font-black">
            <small>$</small>
            {price}
          </strong>
        ) : (
          <>
            <small>$</small>
            {price}
          </>
        )}
      </span>
    </div>
  );
};

export default PaymentItem;
