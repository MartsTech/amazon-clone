import { db } from "configs/firebase";
import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "types/product";
import { UserDetails } from "types/user";
import { store } from "./store";
import firebase from "firebase";
import moment from "moment";

class UserStore {
  userDetails: UserDetails | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadUserDetails = (email: string) => {
    store.commonStore.setAppLoading(true);

    db.collection("users")
      .doc(email)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
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

    db.collection("users")
      .doc(this.userDetails.email)
      .collection("orders")
      .doc(orderId)
      .set({
        created: firebase.firestore.Timestamp.fromDate(
          moment.unix(created).toDate()
        ),
        amount: amount,
        items: items,
        type: "card",
      });
  };
}

export default UserStore;
