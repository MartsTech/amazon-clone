import { motion } from "framer-motion";
import { FC } from "react";
import { pageSlide, pageTransition } from "utils/animations";

interface CenterLayoutProps {}

const CenterLayout: FC<CenterLayoutProps> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageSlide}
    transition={pageTransition}
    className="flex-grow flex justify-center items-center"
  >
    <div
      className="m-12 mt-20 py-8 px-4 bg-white
        rounded-lg overflow-hidden drop-shadow-xl shadow-xl"
    >
      {children}
    </div>
  </motion.div>
);

export default CenterLayout;
