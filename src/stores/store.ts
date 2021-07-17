import { createContext, useContext } from "react";
import BookmarkStore from "./bookmarkStore";
import CartStore from "./cartStore";
import CommonStore from "./commonStore";
import PaymentStore from "./paymentStore";
import ProductStore from "./productStore";
import SearchStore from "./searchStore";

interface Store {
  commonStore: CommonStore;
  productStore: ProductStore;
  searchStore: SearchStore;
  cartStore: CartStore;
  bookmarkStore: BookmarkStore;
  paymentStore: PaymentStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  productStore: new ProductStore(),
  searchStore: new SearchStore(),
  cartStore: new CartStore(),
  bookmarkStore: new BookmarkStore(),
  paymentStore: new PaymentStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
