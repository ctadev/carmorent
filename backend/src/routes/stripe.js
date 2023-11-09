import express from "express";
const router = express.Router();
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = "http://localhost:5173";

router.post("/", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Rental Car",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.DOMAIN}/success`,
    cancel_url: `${process.env.DOMAIN}/cancel`,
  });

  res.send({ url: session.url });
});

export default router;
