import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const InitiateMongoServer = require("../../config/db");

const secret_key = process.env.SECRET_KEY;
const private_key = process.env.PRIVATE_KEY;

InitiateMongoServer();
export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return NextResponse.json({
        status: false,
        message: "This user is not registered! You need to register.",
        error: "Bad request sent!",
      });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch) {
      return NextResponse.json({
        status: false,
        message: "Invalid password!",
        error: "Incorrect password sent!",
      });
    }

    const token = jwt.sign({ userId: foundUser.businessName }, secret_key, {
      expiresIn: "1h",
    });

    const refreshToken = jwt.sign(
      { userId: foundUser.businessName },
      private_key,
      {
        expiresIn: "1d",
      }
    );

    foundUser.refreshToken = refreshToken;
    await foundUser.save();

    cookies().set({
      name: "jwt",
      value: token,
      httpOnly: true,
      path: "/dashboard",
    });
    return NextResponse.json({
      status: true,
      message: "Successfully logged in user",
      data: foundUser,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: false,
      message: "An error occurred!",
      error: error.message,
    });
  }
}
