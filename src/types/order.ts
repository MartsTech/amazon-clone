import Stripe from "stripe";

export interface Order {
  id: string;
  amount: number;
  amount_shipping: number;
  images: string[];
  timestamp: number;
  items: Stripe.LineItem[];
}
