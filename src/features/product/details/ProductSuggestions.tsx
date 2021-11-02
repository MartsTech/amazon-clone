import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "stores/store";
import { shuffleArray } from "utils/array";
import { useGetIntId } from "utils/useGetIntId";
import Product from "../feed/Product";

interface ProductSuggestionsProps {}

const ProductSuggestions: React.FC<ProductSuggestionsProps> = () => {
  const { products, loadProducts } = useStore().productStore;
  const id = useGetIntId();

  useEffect(() => {
    if (products.length == 0) {
      loadProducts();
    }
  }, [products, loadProducts]);

  return (
    <>
      <h5 className="mt-12 mb-8 text-xl font-bold">You might also like</h5>
      <div
        className="flex flex-col items-center justify-center 
      md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        {shuffleArray(products)
          ?.slice(0, 3)
          .map((product) =>
            product.id != id ? (
              <Product key={product.id} product={product} />
            ) : null
          )}
      </div>
    </>
  );
};

export default observer(ProductSuggestions);
