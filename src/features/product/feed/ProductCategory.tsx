import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

interface ProductCategoryProps {
  category: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ category }) => {
  const { activeCategory, setActiveCategory } = useStore().productStore;

  return (
    <span
      onClick={(e) => {
        e.preventDefault();
        setActiveCategory(category);
      }}
      className={`text-lg relative p-4 sm:ml-4 opacity-50
         transition-opacity duration-200 cursor-pointer capitalize
         hover:opacity-100 before:underline hover:before:w-1/3
       ${
         activeCategory == category &&
         "font-bold opacity-100 before:w-almost before:left-8"
       }`}
      style={{ flex: "0 0 auto" }}
    >
      {category}
    </span>
  );
};

export default observer(ProductCategory);
