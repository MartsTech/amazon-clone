import Fuse from "fuse.js";
import { makeAutoObservable, reaction } from "mobx";
import { Product } from "types/product";
import { store } from "./store";

class SearchStore {
  fuse: Fuse<Product>;
  searchQuery = "";
  results: any;
  resultsOpen = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.searchQuery,
      (searchQuery) => {
        if (searchQuery.length > 0) {
          // this.results = this.fuse.search(searchQuery);
          this.resultsOpen = true;
        } else {
          this.results = null;
          this.resultsOpen = false;
        }
      }
    );
  }

  setFuse = (products: Product[]) => {
    this.fuse = new Fuse(products, { keys: ["name", "category"] });
  };

  setSearchQuery = (query: string) => {
    this.searchQuery = query;
  };
}

export default SearchStore;
