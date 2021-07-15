import { motion } from "framer-motion";
import { Product } from "types/product";
import Image from "next/image";

interface ProductImageProps {
  product: Product;
}

const ProductImage: React.FC<ProductImageProps> = ({
  product: { id, image, title },
}) => {
  return (
    <motion.div
      layoutId={id.toString()}
      className="w-full h-0 pb-[75%] relative overflow-hidden block
            rounded-t-lg"
    >
      {true && (
        <span
          className="absolute transform translate-x-1/2 -translate-y-full 
        top-0 right-0 z-10 py-[0.33rem] px-12 bg-[#f90] text-white
        text-sm font-bold shadow-md label"
        >
          Offer!
        </span>
      )}
      <Image src={image || "images/default.jpg"} layout="fill" alt={title} />
    </motion.div>
  );
};

export default ProductImage;
