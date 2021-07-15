import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import { Product } from "types/product";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product: { category, title, price },
}) => {
  return (
    <div className="p-4 w-full flex flex-col justify-between flex-1">
      <span
        className="py-1 px-2 mb-3 rounded-2xl text-[0.5rem] 
      uppercase tracking-[2px] bg-[rgba(26, 26, 44, 0.05)]
      text-[#1a1a2c]"
      >
        {category}
      </span>
      <h6 className="h-16 text-lg line-clamp-3">{title}</h6>
      <div className="mt-auto pt-4 flex justify-between items-center">
        <p className="product__price">
          <b className="text-2xl font-black">${price}</b>{" "}
          {true && <del className="text-[#dc143c]">${price}</del>}
        </p>
        <div className="text-base">
          <StarRateRoundedIcon style={{ color: "#f90" }} />
          {5}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
