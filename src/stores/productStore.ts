import agent from "configs/agent";
import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "types/product";
import { shuffleArray } from "utils/array";
import { store } from "./store";

class ProductStore {
  productRegistery = new Map<number, Product>();
  activeCategory = "all departments";

  constructor() {
    makeAutoObservable(this);
  }

  get products() {
    return Array.from(this.productRegistery.values());
  }

  get totalProducts() {
    return Array.from(this.productRegistery.values()).reduce(
      (total, product) => product.quantity + total,
      0
    );
  }

  loadProducts = async () => {
    store.commonStore.setAppLoading(false);
    const products = shuffleArray(await agent.Products.list());

    runInAction(() => {
      products.forEach((product) => {
        product.quantity = 1;
        this.productRegistery.set(product.id, product);
      });
    });

    store.searchStore.setFuse(products);
    store.commonStore.setAppLoading(true);
  };

  setActiveCategory = (category: string) => {
    this.activeCategory = category;
  };
}

export default ProductStore;
