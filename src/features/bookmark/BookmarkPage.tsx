import Product from "features/product/feed/Product";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { pageTransition, pageZoom } from "utils/animations";
import BookmarkEmpty from "./BookmarkEmpty";

interface BookmarkPageProps {}

const BookmarkPage: React.FC<BookmarkPageProps> = () => {
  const { bookmarks } = useStore().bookmarkStore;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
    >
      <h4 className="text-2xl my-12 mx-6 sm:ml-12 mt-20 font-semibold">
        Bookmarks
      </h4>
      {bookmarks.length > 0 ? (
        <div
          className="m-8 flex flex-col items-center 
        md:grid md:grid-cols-2 lg:grid-cols-3"
        >
          {bookmarks.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <BookmarkEmpty />
      )}
    </motion.div>
  );
};

export default observer(BookmarkPage);
