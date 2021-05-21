import { addToBasket, removeFromBasket } from "@slice/basketSlice";
import { productType } from "@type/productType";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import Prime from "../elements/Prime";
import Rating from "../elements/Rating";

interface CheckoutProductProps {
  data: productType;
  count: number;
}

const CheckoutProduct: React.FC<CheckoutProductProps> = forwardRef(
  ({ data, count }, ref: ForwardedRef<HTMLDivElement>) => {
    const dispatch = useDispatch();

    const { title, price, id, description, image } = data;

    return (
      <div ref={ref} className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain" />

        <div className="col-span-3 mx-5">
          <p>{title}</p>

          <Rating />

          <p className="text-xs my-2 line-clamp-3">{description}</p>

          <p>
            ({count} {count === 1 ? "item" : "items"}):{" "}
            <Currency quantity={price * count} currency="EUR" />
          </p>

          <Prime />
        </div>

        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button
            className="button"
            onClick={() => dispatch(addToBasket({ product: data }))}
          >
            Add to Basket
          </button>
          <button
            className="button"
            onClick={() => dispatch(removeFromBasket(id))}
          >
            Remove from Basket
          </button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
