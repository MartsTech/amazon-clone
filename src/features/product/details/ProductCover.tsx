import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import Image from "next/image";

interface ProductCoverProps {}

const ProductCover: React.FC<ProductCoverProps> = () => {
  const { selectedProduct } = useStore().productStore;

  if (typeof selectedProduct == "undefined") {
    return null;
  }

  const { id, image, title } = selectedProduct;

  return (
    <motion.div
      layoutId={id.toString()}
      className="pb-[50%] relative rounded-2xl overflow-hidden
            shadow-lg bg-white"
      style={{ flex: "0 0 calc(100% / 2.5)" }}
    >
      <Image
        layout="fill"
        objectFit="contain"
        src={image}
        alt={title}
        className="absolute p-4"
      />
    </motion.div>
  );
};

export default observer(ProductCover);
