import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import SearchStore from "./searchStore";

interface Store {
  commonStore: CommonStore;
  searchStore: SearchStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  searchStore: new SearchStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
