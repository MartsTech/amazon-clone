import Fuse from "fuse.js";
import { makeAutoObservable, reaction } from "mobx";
import { Product } from "types/product";

class SearchStore {
  fuse: Fuse<Product> = new Fuse([]);
  searchQuery = "";
  results: Fuse.FuseResult<Product>[] = [];
  resultsOpen = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.searchQuery,
      (searchQuery) => {
        if (searchQuery.length > 0) {
          this.results = this.fuse.search(searchQuery);
          this.resultsOpen = true;
        } else {
          this.results = [];
          this.resultsOpen = false;
        }
      }
    );
  }

  setFuse = (products: Product[]) => {
    this.fuse = new Fuse(products, { keys: ["title", "category"] });
  };

  setSearchQuery = (query: string) => {
    this.searchQuery = query;
  };

  closeResults = () => {
    this.resultsOpen = false;
  };
}

export default SearchStore;
