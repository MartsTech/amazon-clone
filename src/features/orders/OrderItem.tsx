import { Product } from "types/product";
import Image from "next/image";

interface OrderItemProps {
  item: Product;
}

const OrderItem: React.FC<OrderItemProps> = ({
  item: { image, title, quantity },
}) => {
  return (
    <div
      className="flex flex-col min-w-[120px] flex-[40%] p-4 
      rounded-lg shadow-inner bg-black bg-opacity-[1%] relative
      overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="w-full h-0 pb-[75%] semi:pb-[50%] lg:pb-[100%] relative">
        <Image
          height="100%"
          width="100%"
          objectFit="contain"
          src={image}
          alt="product image"
          className="!p-2 absolute"
        />
      </div>
      <span className="w-full truncate">{title}</span>
      <small
        className="left-auto right-2 bottom-auto top-2
          absolute py-1 px-2 rounded-2xl text-xs font-bold
          bg-[#1a1a2c] bg-opacity-5 text-[#1a1a2c]"
      >
        x{quantity}
      </small>
    </div>
  );
};

export default OrderItem;
