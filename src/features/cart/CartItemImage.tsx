import { motion } from "framer-motion";
import Image from "next/image";

interface CartItemImageProps {
  id: number;
  image: string;
  title: string;
}

const CartItemImage: React.FC<CartItemImageProps> = ({ id, image, title }) => {
  return (
    <motion.div
      layoutId={id.toString()}
      className="pb-[10%] relative"
      style={{ flex: "flex: 0 0 30%" }}
    >
      <Image
        height="100%"
        width="100%"
        objectFit="contain"
        src={image}
        alt={title}
        className="absolute p-3 sm:p-4"
      />
    </motion.div>
  );
};

export default CartItemImage;
