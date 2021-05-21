import Product from "@module/Product";
import { productType } from "@type/productType";
import FlipMove from "react-flip-move";

interface ProductFeedProps {
  products: productType[];
}

const ProductFeed: React.FC<ProductFeedProps> = ({ products }) => {
  return (
    <FlipMove
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

      {products.slice(5, 13).map((product) => (
        <Product key={product.id} data={product} />
      ))}

      <div className="md:col-span-2">
        {products.slice(13, 14).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      {products.slice(14).map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </FlipMove>
  );
};

export default ProductFeed;
