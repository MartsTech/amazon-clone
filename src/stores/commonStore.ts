import { makeAutoObservable } from "mobx";

class CommonStore {
  sidebarActive = false;
  loadingProgress = 0;

  constructor() {
    makeAutoObservable(this);
  }

  toggleSidebar = () => {
    this.sidebarActive = !this.sidebarActive;
  };

  setLoadingProgress = (progress: number) => {
    this.loadingProgress = progress;
  };
}

export default CommonStore;
