import { NextResponse } from "next/server";

const Client = require("../models/client");
const User = require("../models/user");
const uuid = require("uuid").v4;

export async function GET(req) {}

export async function POST(req) {
  try {
    const body = await req.json();
    const { bussinessEmail, clientName, email, phoneNo } = body;

    const foundClient = await Client.findOne({ email });
    const currentUser = await User.findOne({ bussinessEmail });

    if (!clientName || !email || !phoneNo) {
      return NextResponse.json(
        { status: false, message: "Invalid request sent!" },
        { status: 400 }
      );
    }
    if (foundClient) {
      return NextResponse.json(
        { status: false, message: "This client exists!" },
        { status: 409 }
      );
    }

    const newClient = await Client({
      clientName: clientName,
      clientId: currentUser._id,
      email: email,
      phoneNo: phoneNo,
    });

    await newClient.save();
    return NextResponse.json(
      {
        status: true,
        message: "Successfully created client!",
        data: newClient,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}

export async function PATCH(req) {}

export async function DELETE(req) {}
