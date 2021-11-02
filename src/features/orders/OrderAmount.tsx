interface OrderAmountProps {
  amount: number;
}

const OrderAmount: React.FC<OrderAmountProps> = ({ amount }) => {
  return (
    <div
      className="flex flex-col min-w-[120px] flex-[40%] p-4 
      rounded-lg bg-black bg-opacity-[1%] relative
      overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      <span
        className="flex items-center justify-between py-1 px-2 rounded-2xl 
      bg-[#1a1a2c] bg-opacity-5 "
      >
        <span className="truncate">Amount</span>
        <span className="font-bold text-xs text-[#1a1a2c]">
          <strong className="text-xl font-black">
            <small>$</small>
            {amount}
          </strong>
        </span>
      </span>
    </div>
  );
};

export default OrderAmount;
