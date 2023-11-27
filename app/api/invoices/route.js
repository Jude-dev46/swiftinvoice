import { NextResponse } from "next/server";

const invoice = require("../models/invoice");
const client = require("../models/client");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const InitiatetMongoServer = require("../config/db");
const uuid = require("uuid").v4;

InitiatetMongoServer();
export async function GET(_req) {
  try {
    const foundInvoices = await invoice.find(
      {},
      "userId invoiceId amount quantity businessEmail dueDate isPaid overdue updatedAt"
    );

    return NextResponse.json({
      status: true,
      message: "Successfully retrieved invoices!",
      data: foundInvoices,
    });
  } catch (error) {
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      userId,
      amount,
      quantity,
      businessEmail,
      dueDate,
      clientEmail,
      isPaid,
      overdue,
    } = body;
    const uuId = uuid().slice(-5);
    const invoiceId = "inv-" + uuId;

    const foundInvoice = await invoice.findOne({ invoiceId }).maxTimeMS(20000);
    const foundClients = await client.find({}, "clientName clientId email");
    const foundClient = foundClients.filter((cli) => cli.email === clientEmail);

    if (foundInvoice) {
      return NextResponse.json(
        {
          status: false,
          message: "This invoice already exists!",
        },
        { status: 409 }
      );
    }

    if (!foundClient) {
      return NextResponse.json({
        status: false,
        message: "Could not find client!",
      });
    }

    const product = await stripe.invoiceItems.create({
      customer: foundClient[0].clientId,
      amount: amount,
      currency: "usd",
      quantity: quantity,
    });

    const newInvoice = await invoice({
      userId: userId,
      invoiceId: product.id,
      businessEmail: businessEmail,
      clientEmail: clientEmail,
      amount: amount,
      dueDate: dueDate,
      isPaid: isPaid,
      overdue: overdue,
    });

    await newInvoice.save();
    return NextResponse.json(
      {
        status: true,
        message: "Invoice Successfully created!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: false, message: "An error occurred!" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  const body = await req.json();
  const { invoiceId } = body;

  try {
    const foundInvoice = await invoice.findOne({ invoiceId });

    if (!foundInvoice) {
      return NextResponse.json({
        status: false,
        message: "This invoice does not exist!",
      });
    }

    await invoice.updateOne({ invoiceId }, body);
    return NextResponse.json({
      status: true,
      message: "Invoice successfully updated!",
    });
  } catch (error) {
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}

export async function DELETE(req) {
  const body = await req.json();
  const { invoiceId } = body;

  try {
    await invoice.deleteOne({ invoiceId });
    return NextResponse.json({
      status: true,
      message: "Invoice successfully deleted!",
    });
  } catch (error) {
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}
