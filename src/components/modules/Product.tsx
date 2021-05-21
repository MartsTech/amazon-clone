import { addToBasket } from "@slice/basketSlice";
import { productType } from "@type/productType";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import Prime from "../elements/Prime";
import Rating from "../elements/Rating";

interface ProductProps {
  data: productType;
}

const Product: React.FC<ProductProps> = forwardRef(
  ({ data }, ref: ForwardedRef<HTMLDivElement>) => {
    const dispatch = useDispatch();

    const { category, description, image, price, title } = data;

    return (
      <div ref={ref} className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">
          {category}
        </p>

        <Image src={image} height={200} width={200} objectFit="contain" />

        <h4 className="my-3">{title}</h4>

        <Rating />

        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-5">
          <Currency quantity={price} currency="EUR" />
        </div>

        <Prime />

        <button
          onClick={() => dispatch(addToBasket({ product: data }))}
          className="mt-auto button"
        >
          Add to Basket
        </button>
      </div>
    );
  }
);

export default Product;
