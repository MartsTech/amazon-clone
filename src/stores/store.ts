import { createContext, useContext } from "react";
import BookmarkStore from "./bookmarkStore";
import CartStore from "./cartStore";
import CommonStore from "./commonStore";
import ProductStore from "./productStore";
import SearchStore from "./searchStore";

interface Store {
  commonStore: CommonStore;
  searchStore: SearchStore;
  productStore: ProductStore;
  cartStore: CartStore;
  bookmarkStore: BookmarkStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  searchStore: new SearchStore(),
  productStore: new ProductStore(),
  cartStore: new CartStore(),
  bookmarkStore: new BookmarkStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
