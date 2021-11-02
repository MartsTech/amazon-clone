import { motion } from "framer-motion";
import { FC } from "react";
import { pageTransition, pageZoom } from "utils/animations";
import ProductCover from "./ProductCover";
import ProductDetails from "./ProductDetails";
import ProductSuggestions from "./ProductSuggestions";

interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = () => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageZoom}
    transition={pageTransition}
    className="p-12 pt-20"
  >
    <div className="flex">
      <ProductCover />
      <ProductDetails />
    </div>
    <ProductSuggestions />
  </motion.div>
);

export default ProductPage;
