import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");
const User = require("../models/user");
const InitiateMongoServer = require("../config/db");

InitiateMongoServer();
export async function POST(request) {
  try {
    const body = await request.json();
    const { businessName, businessField, email, password } = body;

    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return NextResponse.json({
        status: false,
        message: "This user is already registered! Kindly login.",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User({
      businessName: businessName,
      businessField: businessField,
      email: email,
      password: hashPassword,
    });

    await newUser.save();
    return NextResponse.json({
      status: true,
      message: "Successfully logged in user",
      data: newUser,
    });
  } catch (error) {
    return NextResponse.json(
      { status: false, message: "An error occurred!", error: error.message },
      { status: 500 }
    );
  }
}
