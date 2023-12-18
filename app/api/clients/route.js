import { NextResponse } from "next/server";

const Client = require("../models/client");
const User = require("../models/user");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const InitiatetMongoServer = require("../config/db");

let email;

InitiatetMongoServer();
export async function GET() {
  try {
    const foundClients = await Client.find({});

    return NextResponse.json({
      status: true,
      message: "Successfully retrieved clients!",
      data: foundClients,
    });
  } catch (error) {
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { businessEmail, clientName, clientEmail, phoneNo } = body;

    if (!clientName || !clientEmail || !phoneNo) {
      return NextResponse.json(
        { status: false, message: "Invalid request sent!" },
        { status: 400 }
      );
    }

    email = businessEmail;
    const foundClient = await Client.findOne({ clientEmail });
    const currentUser = await User.findOne({ email });

    if (foundClient) {
      return NextResponse.json(
        { status: false, message: "This client already exists!" },
        { status: 409 }
      );
    }

    const createdBy = {
      bussinessName: currentUser.businessName,
      bussinessEmail: currentUser.email,
    };

    const client = await stripe.customers.create({
      name: businessEmail,
      email: email,
      phone: phoneNo,
    });

    const newClient = await Client({
      bussinessEmail: businessEmail,
      clientName: clientName,
      clientId: client.id,
      email: clientEmail,
      phoneNo: phoneNo,
      createdBy: createdBy,
    });

    await newClient.save();
    return NextResponse.json(
      {
        status: true,
        message: "Successfully created client!",
        data: newClient,
        createdBy: createdBy,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { email } = body;

    const foundClient = await Client.findOne({ email });

    if (!foundClient) {
      return NextResponse.json({
        status: false,
        message: "This client does not exists!",
      });
    }

    await Client.updateOne({ email }, body);
    return NextResponse.json({
      status: true,
      message: "Successfully updated client!",
    });
  } catch (error) {
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { email } = body;

    await Client.deleteOne({ email });
    return NextResponse.json(
      {
        status: true,
        message: "Successfully deleted client!",
      },
      { status: 410 }
    );
  } catch (error) {
    return NextResponse.json({
      status: true,
      message: "An error occurred!",
    });
  }
}
