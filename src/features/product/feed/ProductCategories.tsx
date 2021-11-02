import { categories } from "utils/data";
import ProductCategory from "./ProductCategory";

interface ProductCategoriesProps {}

const ProductCategories: React.FC<ProductCategoriesProps> = () => {
  return (
    <div
      className="m-6 sm:mt-4 sm:-mb-4 sm:mx-12 flex whitespace-nowrap
  overflow-scroll scrollbar-hide relative"
    >
      {categories.map((category, index) => (
        <ProductCategory key={index} category={category} />
      ))}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-gray-50 h-10 w-1/12" />
    </div>
  );
};

export default ProductCategories;
