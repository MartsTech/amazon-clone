import { makeAutoObservable, reaction } from "mobx";
import { Product } from "types/product";

class CartStore {
  cartRegistery: Map<number, Product> = process.browser
    ? new Map(JSON.parse(window.localStorage.getItem("cart") as string))
    : new Map();

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.cartRegistery,
      (cartRegistery) => {
        if (cartRegistery) {
          window.localStorage.setItem("cart", JSON.stringify(cartRegistery));
        } else {
          window.localStorage.removeItem("cart");
        }
      }
    );
  }

  get cart() {
    return Array.from(this.cartRegistery.values());
  }

  get cartTotal() {
    return Array.from(this.cartRegistery.values())
      .reduce((amount, product) => product.price * product.quantity + amount, 0)
      .toFixed(2);
  }

  get cartTotalItems() {
    return Array.from(this.cartRegistery.values()).reduce(
      (total, product) => product.quantity + total,
      0
    );
  }

  addToCart = (product: Product) => {
    const item = this.cartRegistery.get(product.id);

    if (typeof item === "undefined") {
      product.quantity = 1;
      this.cartRegistery.set(product.id, product);
    } else {
      item.quantity += 1;
      this.cartRegistery.set(item.id, item);
    }
  };

  removeFromCart = (id: number) => {
    const item = this.cartRegistery.get(id);

    if (typeof item === "undefined") {
      console.warn("Item Not Found In Cart");
      return;
    }

    if (item.quantity > 2) {
      item.quantity -= 1;
      this.cartRegistery.set(item.id, item);
    } else {
      this.cartRegistery.delete(id);
    }
  };
}

export default CartStore;
