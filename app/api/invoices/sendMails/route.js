import NextResponse from "next/server";

const nodemailer = require("nodemailer");
const Client = require("../../models/client");

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

let clientMail;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: clientMail,
};

export async function POST(req) {
  const body = await req.json();
  const { businessName, clientEmail, product, paymentUrl } = body;

  clientMail = clientEmail;

  try {
    const foundClient = await Client.findOne({ clientEmail });

    if (!foundClient) {
      return NextResponse.json(
        { status: false, error: "This client does not exist!" },
        { status: 404 }
      );
    }

    await transport.sendMail({
      ...mailOptions,
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
    return NextResponse.json({ status: false, message: e.message });
  }
}
