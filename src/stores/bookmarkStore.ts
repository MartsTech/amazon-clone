import { makeAutoObservable, reaction } from "mobx";
import { toast } from "react-toastify";
import { Product } from "types/product";

class BookmarkStore {
  bookmarkRegistery: Map<number, Product> = process.browser
    ? new Map(JSON.parse(window.localStorage.getItem("bookmarks") as string))
    : new Map();

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.bookmarkRegistery.entries(),
      (entries) => {
        if (entries) {
          window.localStorage.setItem(
            "bookmarks",
            JSON.stringify(Array.from(entries))
          );
        } else {
          window.localStorage.removeItem("bookmarks");
        }
      }
    );
  }

  get bookmarks() {
    return Array.from(this.bookmarkRegistery.values());
  }

  get totalBookmarks() {
    return this.bookmarkRegistery.size;
  }

  addBookmark = (product: Product) => {
    const exist = this.bookmarkRegistery.has(product.id);

    if (!exist) {
      this.bookmarkRegistery.set(product.id, product);
    }
  };

  removeBookmark = (id: number) => {
    const item = this.bookmarkRegistery.get(id);

    if (typeof item === "undefined") {
      toast.error("Item Not Found In Bookmarks");
      return;
    }

    this.bookmarkRegistery.delete(id);
  };
}

export default BookmarkStore;
