import { useState } from "react";

const categories = [
  "all departments",
  "electronics",
  "jewellery",
  "men's clothing",
  "women's clothing",
  "appliances",
  "toys",
  "prime video",
  "movies & TV",
  "music",
  "software",
];

interface ProductCategoriesProps {}

const ProductCategories: React.FC<ProductCategoriesProps> = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <div
      className="mt-4 -mb-4 mx-12 flex whitespace-nowrap
  overflow-scroll scrollbar-hide relative"
    >
      {categories.map((category, index) => (
        <span
          key={index}
          onClick={(e) => {
            e.preventDefault();
            setActive(category);
          }}
          className={`flex text-lg relative p-4 m-6 sm:m-0 sm:ml-4 opacity-50
       transition-opacity duration-200 cursor-pointer capitalize
       hover:opacity-100 before:absolute before:left-4 before:w-0
       before:h-px before:bg-[#1a1a2c] before:bottom-2
       before:transition-all before:duration-200 hover:before:w-1/3
     ${
       active == category && "font-bold opacity-100 before:w-2/3 before:left-8"
     }`}
        >
          {category}
        </span>
      ))}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-gray-50 h-10 w-1/12" />
    </div>
  );
};

export default ProductCategories;
