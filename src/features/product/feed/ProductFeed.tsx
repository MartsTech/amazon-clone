import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useStore } from "stores/store";
import Product from "./Product";

interface ProductFeedProps {}

const ProductFeed: FC<ProductFeedProps> = () => {
  const { products, activeCategory } = useStore().productStore;

  return (
    <div
      className="flex flex-col items-center sm:grid
      sm:grid-cols-2 lg:grid-cols-3 m-8"
    >
      {products?.map((product) =>
        activeCategory === "all departments" ? (
          <Product key={product.id} product={product} />
        ) : activeCategory === product.category ? (
          <Product key={product.id} product={product} />
        ) : null
      )}
    </div>
  );
};

export default observer(ProductFeed);
