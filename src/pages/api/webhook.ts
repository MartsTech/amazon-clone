import * as admin from "firebase-admin";
import { buffer } from "micro";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      }),
    })
  : admin.app();

const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session: Stripe.Checkout.Session) => {
  console.log("Fulfill" + session);

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata?.email as string)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: (session.amount_total as number) / 100,
      amount_shipping: (session.total_details?.amount_shipping as number) / 100,
      images: JSON.parse(session.metadata?.images as string),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("Success: Order: " + session.id);
    });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();

    const sig = req.headers["stripe-signature"];
    if (typeof sig === "undefined") {
      return;
    }

    let event: Stripe.Event;

    // Verify that the Event came from Stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERROR: " + err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    // Handles checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      return fulfillOrder(session)
        .then(() => {
          res.status(200);
        })
        .catch((err) => {
          res.status(400).send(`Webhook error: ${err.message}`);
        });
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
