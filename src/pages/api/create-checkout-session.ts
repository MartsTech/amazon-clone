import { reqBodyType } from "@type/reqBodyType";
import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe: Stripe = require("stripe")(
  "sk_test_51ItzghLMT7c0pt9wMKtG3Uv0ZnMh4C6WZy4tJtRCJpv59e4KiWFU59F99lPCPFfdDk9JWrygyBxV3Zcy3y6z132t00QLhWus2K"
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { items, email }: reqBodyType = req.body;

  const transformedItems = items.map(
    ({ product, count }) =>
      ({
        description: product.description,
        quantity: count,
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
      images: JSON.stringify(items.map(({ product }) => product.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
