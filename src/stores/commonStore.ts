import { makeAutoObservable } from "mobx";

class CommonStore {
  sidebarActive = false;
  appLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  toggleSidebar = () => {
    this.sidebarActive = !this.sidebarActive;
  };

  setAppLoading = (state: boolean) => {
    this.appLoading = state;
  };
}

export default CommonStore;
