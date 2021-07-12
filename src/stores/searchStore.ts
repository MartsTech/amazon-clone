import { makeAutoObservable, reaction } from "mobx";

class SearchStore {
  searchQuery = "";
  fuse: any;
  results: any;
  resultsOpen = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.searchQuery,
      (searchQuery) => {
        console.log("hi");
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

  setSearchQuery = (query: string) => {
    this.searchQuery = query;
  };
}

export default SearchStore;
