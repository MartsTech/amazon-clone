import Product from "@element/Product";
import { productType } from "@type/productType";

interface ProductFeedProps {
  products: productType[];
}

const ProductFeed: React.FC<ProductFeedProps> = ({ products }) => {
  return (
    <div
      className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    md:-mt-52 mx-auto"
    >
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} data={product} />
      ))}

      <img className="md:col-span-full" src="/images/ad.jpg" alt="ad" />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      {products.slice(5).map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
