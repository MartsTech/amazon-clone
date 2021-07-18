import { Product } from "./product";
import { UserDetails } from "./user";

export type createSessionBody = {
  items: Product[];
  userDetails: UserDetails;
  orderId: string;
};

export type createPaymentBody = {
  total: number;
  desc: string;
};
