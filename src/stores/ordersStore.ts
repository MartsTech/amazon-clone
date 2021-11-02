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

  loadOrders = async (email: string) => {
    store.commonStore.setAppLoading(true);

    const userRef = doc(db, "users", email);

    const ordersSnap = await getDocs(
      query(collection(userRef, "orders"), orderBy("created", "desc"))
    );

    ordersSnap.docs.forEach((orderDoc, index) => {
      this.setOrder(orderDoc.data(), index);
    });

    store.commonStore.setAppLoading(false);
  };

  private setOrder = (data: any, id: number) => {
    const order = new Order(data);
    this.ordersRegistery.set(id, order);
  };
}

export default OrdersStore;
