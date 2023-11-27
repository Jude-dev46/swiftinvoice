import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { invoiceId } = body;

  const invoice = await stripe.invoices.sendInvoice(invoiceId);
  console.log(invoice);
}
