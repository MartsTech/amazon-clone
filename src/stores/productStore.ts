import agent from "configs/agent";
import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "types/product";
import { shuffleArray } from "utils/array";
import { store } from "./store";

class ProductStore {
  productRegistery = new Map<number, Product>();
  selectedProduct?: Product;
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
    store.commonStore.setAppLoading(true);
    const products = shuffleArray(await agent.Products.list());

    runInAction(() => {
      products.forEach((product) => {
        this.setProduct(product);
      });
    });

    store.searchStore.setFuse(products);
    store.commonStore.setAppLoading(false);
  };

  loadProduct = async (id: number) => {
    await this.getProduct(id);

    if (this.selectedProduct?.id !== id) {
      this.removeSelectedProduct();
      await this.getProduct(id);
    }
  };

  getProduct = async (id: number) => {
    let product = this.productRegistery.get(id);

    if (product) {
      runInAction(() => {
        this.selectedProduct = product;
      });

      return product;
    }

    store.commonStore.setAppLoading(true);

    product = await agent.Products.details(id);
    this.setProduct(product);

    runInAction(() => {
      this.selectedProduct = product;
    });

    store.commonStore.setAppLoading(false);

    return product;
  };

  removeSelectedProduct = () => {
    this.selectedProduct = undefined;
  };

  private setProduct = (product: Product) => {
    product.quantity = 1;
    product.discount = Math.random() >= 0.5;
    this.productRegistery.set(product.id, product);
  };

  setActiveCategory = (category: string) => {
    this.activeCategory = category;
  };
}

export default ProductStore;
