import { orderType } from "@type/orderType";
import moment from "moment";
import { ForwardedRef, forwardRef } from "react";
import Currency from "react-currency-formatter";

interface OrderProps {
  data: orderType;
}

const Order: React.FC<OrderProps> = forwardRef(
  (
    { data: { amount, amount_shipping, id, images, items, timestamp } },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className="relative border rounded-md">
        <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
          <div>
            <p className="font-bold text-xs">ORDER PLACED</p>
            <p>{moment.unix(timestamp as number).format("DD MMM YYYY")}</p>
          </div>

          <div>
            <p className="text-xs font-bold">TOTAL</p>
            <p>
              <Currency quantity={amount} currency="EUR"></Currency> - Next Day
              Delivery <Currency quantity={amount_shipping} currency="EUR" />
            </p>
          </div>

          <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
            {items.length} items
          </p>

          <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
            ORDER # {id}
          </p>
        </div>

        <div className="p-5 sm:p-10">
          <div className="flex space-x-6 overflow-x-auto">
            {images.map((image, i) => (
              <img
                className="h-20 object-contain sm:h-32"
                key={i}
                src={image}
                alt="product"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default Order;
