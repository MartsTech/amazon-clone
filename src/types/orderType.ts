import Stripe from "stripe";

export type orderType = {
  id: string;
  amount: number;
  amount_shipping: number;
  images: string[];
  timestamp: number;
  items: Stripe.LineItem[];
};
