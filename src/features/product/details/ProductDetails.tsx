import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import ProductButtons from "./ProductButtons";
import ProductPrice from "./ProductPrice";

interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const { selectedProduct } = useStore().productStore;

  if (typeof selectedProduct === "undefined") {
    return null;
  }

  const { title, description, price } = selectedProduct;

  return (
    <div className="p-12 pr-4 flex flex-col">
      <h5 className="line-clamp-3 text-xl font-bold">{title}</h5>
      <p
        className="my-4 relative text-justify leading-7
      text-base"
      >
        {description}
      </p>
      <div className="mt-auto">
        <ProductPrice price={price} />
        <ProductButtons product={selectedProduct} />
      </div>
    </div>
  );
};

export default observer(ProductDetails);
