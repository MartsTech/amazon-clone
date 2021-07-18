import { makeAutoObservable, runInAction } from "mobx";

class CommonStore {
  sidebarActive = false;
  appLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleSidebar = () => {
    this.sidebarActive = !this.sidebarActive;
  };

  setAppLoading = (state: boolean) => {
    runInAction(() => {
      this.appLoading = state;
    });
  };
}

export default CommonStore;
