import { createPaymentBody } from "types/payment";
import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createNewPayment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { total, desc }: createPaymentBody = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total * 100,
    currency: "USD",
    description: `Amazon Clone Order for ${total.toFixed(2)} USD: ${desc}`,
  });

  res.status(200).json({
    clientSecret: paymentIntent.client_secret,
    id: paymentIntent.created,
  });
};

export default createNewPayment;
