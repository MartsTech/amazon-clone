import { makeAutoObservable } from "mobx";

class CommonStore {
  sidebarActive = false;
  appLoaded = false;
  category = "all";

  constructor() {
    makeAutoObservable(this);
  }

  toggleSidebar = () => {
    this.sidebarActive = !this.sidebarActive;
  };

  setAppLoaded = (state: boolean) => {
    this.appLoaded = state;
  };
}

export default CommonStore;
