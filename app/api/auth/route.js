import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");
const User = require("../models/user");
const InitiateMongoServer = require("../config/db");

InitiateMongoServer();
export async function POST(request) {
  try {
    const body = await request.json();
    const { businessName, businessField, email, password } = body;
    

    const hashPassword = await bcrypt.hash(password, 10);

    if (!businessName || !businessField || !email || !hashPassword) {
      return NextResponse.json(
        {
          status: false,
          message: "Bad request sent!",
        },
        { status: 400 }
      );
    }
   
    const foundUser = await User.findOne({ email, password });

    if (foundUser) {
      return NextResponse.json(
        {
          status: true,
          message: "This user already exists! Kindly login.",
        },
        { status: 409 }
      );
    }

    const newUser = await User({
      businessName: businessName,
      businessField: businessField,
      email: email,
      password: hashPassword,
    });

    await newUser.save();
    return NextResponse.json(
      {
        status: true,
        message: "User registered successfully!",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json(
      { status: false, message: "An error occurred!" },
      { status: 500 }
    );
  }
}
