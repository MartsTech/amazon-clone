import { createContext, useContext } from "react";
import BookmarkStore from "./bookmarkStore";
import CartStore from "./cartStore";
import CommonStore from "./commonStore";
import OrdersStore from "./ordersStore";
import PaymentStore from "./paymentStore";
import ProductStore from "./productStore";
import SearchStore from "./searchStore";
import UserStore from "./userStore";

interface Store {
  commonStore: CommonStore;
  productStore: ProductStore;
  searchStore: SearchStore;
  cartStore: CartStore;
  bookmarkStore: BookmarkStore;
  paymentStore: PaymentStore;
  userStore: UserStore;
  ordersStore: OrdersStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  productStore: new ProductStore(),
  searchStore: new SearchStore(),
  cartStore: new CartStore(),
  bookmarkStore: new BookmarkStore(),
  paymentStore: new PaymentStore(),
  userStore: new UserStore(),
  ordersStore: new OrdersStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
