import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import HeaderResult from "./HeaderResult";

interface HeaderResultsProps {}

const HeaderResults: React.FC<HeaderResultsProps> = () => {
  const { resultsOpen, results } = useStore().searchStore;

  return (
    <>
      {resultsOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-1rem" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-1rem" }}
          className="max-w-xl max-h-80 md:max-h-96
          overflow-scroll scrollbar-hide my-4 mx-6 md:m-4
          rounded-2xl shadow-md absolute top-full right-0
          md:right-12 z-50 bg-white"
          style={{ width: "calc(100% - 2rem)" }}
        >
          {results.map((result) => (
            <HeaderResult key={result.item.id} result={result} />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default observer(HeaderResults);
