import { db } from "configs/firebase";
import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import { makeAutoObservable } from "mobx";
import { Order } from "types/order";
import { store } from "./store";

class OrdersStore {
  ordersRegistery = new Map<number, Order>();

  constructor() {
    makeAutoObservable(this);
  }

  get orders() {
    return Array.from(this.ordersRegistery.values());
  }

  loadOrders = (email: string) => {
    store.commonStore.setAppLoading(true);

    getDocs(
      query(
        collection(doc(db, "users", email), "orders"),
        orderBy("created", "desc")
      )
    ).then((res) => {
      res.docs.forEach((doc, index) => {
        this.setOrder(doc.data(), index);
      });
    });

    store.commonStore.setAppLoading(false);
  };

  private setOrder = (data: any, id: number) => {
    const order = new Order(data);
    this.ordersRegistery.set(id, order);
  };
}

export default OrdersStore;
