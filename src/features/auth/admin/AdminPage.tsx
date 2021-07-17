import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "utils/animations";

interface AdminPageProps {}

const AdminPage: React.FC<AdminPageProps> = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
    ></motion.div>
  );
};

export default AdminPage;
