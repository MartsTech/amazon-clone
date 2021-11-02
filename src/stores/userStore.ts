import { doc, onSnapshot, setDoc, Timestamp } from "@firebase/firestore";
import { db } from "configs/firebase";
import { makeAutoObservable, runInAction } from "mobx";
import moment from "moment";
import { Product } from "types/product";
import { UserDetails } from "types/user";
import { store } from "./store";

class UserStore {
  userDetails: UserDetails | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadUserDetails = (email: string) => {
    store.commonStore.setAppLoading(true);

    onSnapshot(doc(db, "users", email), (snapshot) => {
      if (snapshot.exists()) {
        runInAction(() => {
          this.userDetails = snapshot.data() as UserDetails;
        });
      }
    });

    store.commonStore.setAppLoading(false);
  };

  updateUserOrders = (
    orderId: string,
    amount: number,
    created: number,
    items: Product[]
  ) => {
    if (!this.userDetails) {
      return;
    }

    setDoc(doc(doc(db, "users", this.userDetails.email), "orders", orderId), {
      created: Timestamp.fromDate(moment.unix(created).toDate()),
      amount,
      items,
      type: "card",
    });
  };
}

export default UserStore;
