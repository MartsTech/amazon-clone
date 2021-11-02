import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import Button from "components/buttons/Button";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useStore } from "stores/store";
import { Product } from "types/product";

interface ProductButtonsProps {
  product: Product;
}

const ProductButtons: React.FC<ProductButtonsProps> = ({ product }) => {
  const { bookmarkRegistery, addBookmark, removeBookmark } =
    useStore().bookmarkStore;
  const { cartRegistery, cartTotalItems, addToCart, removeFromCart } =
    useStore().cartStore;

  const [bookmarked, setBookmarked] = useState(false);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const bookmarked = bookmarkRegistery.has(product.id);

    if (bookmarked) {
      setBookmarked(true);
    } else {
      setBookmarked(false);
    }
  }, [product, bookmarkRegistery, bookmarkRegistery.size]);

  useEffect(() => {
    const inCart = cartRegistery.has(product.id);

    if (inCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [product, cartRegistery, cartTotalItems]);

  return (
    <div className="flex space-x-4 mt-6">
      {inCart ? (
        <Button variant="primary" onClick={() => removeFromCart(product.id)}>
          <ShoppingCartRoundedIcon /> Added
        </Button>
      ) : (
        <Button variant="primary" onClick={() => addToCart(product)}>
          <AddShoppingCartRoundedIcon /> Add To Cart
        </Button>
      )}
      <Button
        data-tip={bookmarked ? "Remove" : "Bookmark"}
        data-for="bookmarkTooltip"
        variant="secondary"
        onClick={() =>
          !bookmarked ? addBookmark(product) : removeBookmark(product.id)
        }
      >
        <BookmarkRoundedIcon
          className={`${
            !bookmarked && "!fill-[transparent]"
          } stroke-[#fff] stroke-2 !text-xl`}
        />
      </Button>
      <ReactTooltip
        place="right"
        id="bookmarkTooltip"
        backgroundColor="#1a1a2cee"
        effect="solid"
        className="!rounded-lg whitespace-nowrap"
      />
    </div>
  );
};

export default observer(ProductButtons);
