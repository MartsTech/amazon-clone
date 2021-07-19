import { motion } from "framer-motion";
import Image from "next/image";
import styles from "styles/product.module.css";
import { Product } from "types/product";

interface ProductImageProps {
  product: Product;
}

const ProductImage: React.FC<ProductImageProps> = ({
  product: { id, image, title, discount },
}) => {
  return (
    <motion.div
      layoutId={id.toString()}
      className={`w-full pb-[75%] relative overflow-hidden 
      block rounded-t-lg product__image ${styles.productImage}`}
    >
      {discount && (
        <span
          className="absolute transform translate-x-1/2 -translate-y-full
          rotate-45 top-12 right-8 z-10 py-[0.33rem] px-12 bg-[#f90]
          text-white text-sm font-bold shadow-md"
        >
          Offer!
        </span>
      )}
      <Image
        src={image || "images/default.jpg"}
        layout="fill"
        objectFit="contain"
        alt={title}
      />
    </motion.div>
  );
};

export default ProductImage;
