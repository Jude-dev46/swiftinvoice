import { NextResponse } from "next/server";

const Client = require("../models/client");
const User = require("../models/user");
// const uuid = require("uuid").v4;

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
    return NextResponse.json({ status: false, message: "An error occurred!" });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { email } = body;

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
