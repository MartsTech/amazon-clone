import { reqBody } from "types/payment";
import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { items, email }: reqBody = req.body;

  const transformedItems = items.map(
    (product) =>
      ({
        description: product.description,
        quantity: product.quantity,
        tax_rates: ["txr_1ItzgWE4K4vYNE8J6tVoJrYj"],
        price_data: {
          currency: "EUR",
          unit_amount: product.price * 100,
          product_data: {
            name: product.title,
            images: [product.image],
          },
        },
      } as Stripe.Checkout.SessionCreateParams.LineItem)
  );

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1Iu0OHLMT7c0pt9wnZIDpIwo"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA", "BG", "IN"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((product) => product.image)),
    },
  });

  res.status(200).json({ id: session.id });
};

export default createCheckoutSession;
