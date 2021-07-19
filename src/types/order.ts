import moment from "moment";
import { Product } from "./product";

export interface Order {
  amount: number;
  created: number;
  items: Product[];
  type: "card" | "cash";
}

export class Order implements Order {
  constructor(init?: Order) {
    if (init) {
      const timestamp = init.created as any;
      init.created = moment(timestamp.toDate()).unix();
    }

    Object.assign(this, init);
  }
}
