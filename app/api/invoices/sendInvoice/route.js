import { NextResponse } from "next/server";

const invoice = require("../../models/invoice");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { invoiceId } = body;

  const foundInv = await invoice.findOne({ invoiceId });

  if (foundInv.isPaid) {
    return NextResponse.json(
      {
        status: false,
        message: "This is a duplicate invoice!",
      },
      { status: 409 }
    );
  }

  const sessions = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: foundInv.product,
          },
          unit_amount: foundInv.amount,
        },
        quantity: foundInv.quantity,
      },
    ],
    success_url: `http://localhost:3000/invoices/success/${invoiceId}`,
    cancel_url: `http://localhost:3000/invoices/failure/${invoiceId}`,
  });

  return NextResponse.json({
    status: false,
    message: "Successfully created!",
    data: sessions,
  });
}
