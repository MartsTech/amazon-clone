import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import HeaderResult from "./HeaderResult";

interface HeaderResultsProps {}

const HeaderResults: React.FC<HeaderResultsProps> = () => {
  const {
    searchStore: { resultsOpen },
  } = useStore();

  return (
    <>
      {resultsOpen && (
        <motion.div
          className="max-w-xl w-full max-h-96 overflow-scroll scrollbar-hide
          my-4 mx-6 sm:m-4 rounded-2xl shadow-md absolute top-full
          right-0 sm:right-12 z-50 bg-white "
          initial={{ opacity: 0, y: "-1rem" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-1rem" }}
        >
          <HeaderResult />
          <HeaderResult />
          <HeaderResult />
          <HeaderResult />
          <HeaderResult />
          <HeaderResult />
        </motion.div>
      )}
    </>
  );
};

export default observer(HeaderResults);
