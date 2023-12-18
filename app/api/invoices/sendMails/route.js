import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");
const Client = require("../../models/client");

const EMAIL = process.env.EMAIL;
const PASS = process.env.EMAIL_PASS;

let clientMail;
let email;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASS,
  },
});

export const mailOptions = {
  from: email,
  to: clientMail,
};

export async function POST(req) {
  const body = await req.json();
  const { businessName, clientEmail, product, paymentUrl } = body;

  email = clientEmail;
  clientMail = email;

  try {
    const foundClient = await Client.findOne({ email });

    if (!foundClient) {
      return NextResponse.json(
        { status: false, error: "This client does not exist!" },
        { status: 404 }
      );
    }

    await transporter.sendMail({
      from: EMAIL,
      to: clientMail,
      subject: `Invoice from ${businessName}`,
      text: `Find below payment link for ${product}`,
      html: `<div>
      <h1>Click the link below to pay for ${product}</h1>
      <a href=${paymentUrl}>Checkout</a>
      </div>`,
    });

    return NextResponse.json({
      status: true,
      message: "Invoice successfully sent to client's mail.",
    });
  } catch (e) {
    console.log("YO", e);
    return NextResponse.json({
      status: false,
      message: "An error occurred!",
      error: e.message,
    });
  }
}
