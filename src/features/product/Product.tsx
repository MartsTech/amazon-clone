import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Product as ProductType } from "types/product";
import { pageTransition, pageZoom } from "utils/animations";
import ProductImage from "./ProductImage";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
      layout
      onClick={() => router.push(`/product/${product.id}`)}
      className="w-1/4 bg-white m-4 rounded-lg shadow-md flex flex-col relative
      transition-all duration-200 transform hover:scale-105 hover:shadow-lg product"
      style={{ content: "View Product" }}
    >
      <ProductImage product={product} />
    </motion.div>
  );
};

export default Product;
