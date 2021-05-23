import Stripe from "stripe";

export type orderType = {
  id: string;
  amount: number;
  amount_shipping: number;
  images: string[];
  timestamp: FirebaseFirestore.FieldValue | number;
  items: Stripe.LineItem[];
};
