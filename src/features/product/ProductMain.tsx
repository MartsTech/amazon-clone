import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import Product from "./Product";

interface ProductMainProps {}

const ProductMain: React.FC<ProductMainProps> = () => {
  const {
    productStore: { products },
  } = useStore();

  return (
    <div className="m-8 flex flex-row flex-wrap">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default observer(ProductMain);
