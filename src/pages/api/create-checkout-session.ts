import { createSessionBody } from "types/payment";
import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { items, userDetails, orderId }: createSessionBody = req.body;

  const transformedItems = items.map(
    (product) =>
      ({
        description: product.description,
        quantity: product.quantity,
        tax_rates: ["txr_1JEapHLMT7c0pt9wFlq27TLB"],
        price_data: {
          currency: "USD",
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
    shipping_rates: ["shr_1JEanGLMT7c0pt9wt1snHAKv"],
    payment_intent_data: {
      shipping: {
        address: {
          country: userDetails.country,
          postal_code: userDetails.zip,
          state: userDetails.state,
          line1: userDetails.address,
        },
        name: userDetails.name,
        phone: userDetails.phone,
      },
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    customer_email: userDetails.email,
    metadata: {
      email: userDetails.email,
      orderId: orderId,
    },
  });

  res.status(200).json({ id: session.id });
};

export default createCheckoutSession;
